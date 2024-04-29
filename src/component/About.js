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
    padding: 20px 50px;
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
                <div className="blog_link">
                    <a href="#">velog</a>
                    <a href="#">github</a>
                </div>
            </About_Box>
            <About_Box2>
                <p className="title">SKILLS</p>
            </About_Box2>
        </Section_Wrap>
    )
}

export default About