import styled from "styled-components"

const Section_Wrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    border-top: solid 6px #000;
    padding: 60px 0;
`
const About_Box = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    padding: 40px 50px 30px;
    border-radius: 30px;
    border-left: solid 3px #000;
    border-right: solid 3px #000;

    .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -25px;

        font-size: 40px;
        font-weight: 700;
        
    }

    .name {
        font-size: 40px;
        font-weight: 700;
        text-align: center;
    }
    .birth {
        font-size: 30px;
        text-align: center;
    }
    .career {
        margin-top: 15px;
        text-align: center;
        

        li {
            margin-top: 20px;

            &:first-child {
                margin-top: 0;
            }

            .name {
                font-size: 30px;
                font-weight: 500;
            }
            .date {
                font-size: 20px;
            }
        }
    }

`
const About_Box2 = styled(About_Box)`
    display: block;
`
const Blog_link = styled.div`
    margin-top: 60px;
    display: flex;
    gap: 30px;

`
const Blog_a = styled.a`
    display: inline-block;
    font-size: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-size: contain;
`

function About () {
    return (
        <Section_Wrap>
            <About_Box>
                <p className="title">ABOUT</p>
                <div className="name_wrap">
                    <p className="name">송태민</p>
                    <p className="birth">1994.11.22</p>
                </div>
                <ul className="career">
                    <li>
                        <p className="name">코드 파트너즈</p>
                        <p className="date">퍼블리셔(2023.02 ~)</p>
                    </li>
                    <li>
                        <p className="name">페이잇 주식회사</p>
                        <p className="date">퍼블리셔(2022.03 ~ 2022.12)</p>
                    </li>
                </ul>
                <Blog_link>
                    <Blog_a href="https://velog.io/@s_ongt_aemin/posts" target="_blank" title="새 창 열림" bgImg="/images/icon/velog.png">velog</Blog_a>
                    <Blog_a href="https://github.com/Taemin1234" target="_blank" title="새 창 열림" bgImg="/images/icon/github.png">Github</Blog_a>
                </Blog_link>
            </About_Box>
            <About_Box2>
                <p className="title">SKILLS</p>
            </About_Box2>
        </Section_Wrap>
    )
}

export default About