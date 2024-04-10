import styled, { keyframes } from "styled-components"

const Title = styled.h2`
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.color}
`
const Section_Wrap = styled.section`
    padding: 100px 0;
    background-color: ${(props) => props.bg};

`

const Text_box = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    color: #fff;
    margin: 0 auto;
    margin-top: 40px;
    width: 80%;
    padding: 40px 40px;
    border-radius: 16px;
    background-color: #1A1A1A;
    font-size: 20px;

    .des_box .name {
        font-size: 50px;
    }

    .des_box .des {
        margin-top: 30px;
        font-size:20px;
        line-height:1.5;
    }
`

const Info_list = styled.li`
    margin-top: 20px;

    &:first-child {
        margin-top:0;
    }

    .title {
        margin-bottom:15px;
        color: #00bfff;
        font-size : 25px;
    }
`

function About () {
    return (
        <Section_Wrap bg='#262626'>
            <Title color="#00bfff">About</Title>
            <Text_box>
                <div className='des_box'>
                    <p className='name'>송태민</p>
                    <p className='des'>
                        항상 고민하고 노력하는 개발자가 되려 합니다.<br/>
                        같은 목적지라도 어떻게 효율적이고 좋은 방법으로 갈지 고민하고<br/>
                        처음 가는 길도 생각하며 나아가면 나의 길로 만들 수 있습니다.
                    </p>
                </div>
                <div>
                    <ul>
                        <Info_list>
                            <p className='title'>생년월일</p>
                            <p className='content'>1994.11.22</p>
                        </Info_list>
                        <Info_list>
                            <p className='title'>경력</p>
                            <ul>
                                <li>페이잇 - 퍼블리셔<br/>2022.03 ~ 2022.12 (스타트업)</li>
                                <li>코드파트너즈 - 퍼블리셔<br/>2023.02 ~  (웹에이전시)</li>
                            </ul>
                        </Info_list>
                        <Info_list>
                            <a href='#link' title='새 창 열림' target="_blank">벨로그</a>
                            <a href='#link' title='새 창 열림' target="_blank">깃허브</a>
                        </Info_list>
                    </ul>
                </div>
            </Text_box>
        </Section_Wrap>
    )
}

export default About