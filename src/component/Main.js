import styled from "styled-components"
import { React } from 'react';
import media from '../styles/media'

import mainImg from '../img/window06.jpg'

const Header = styled.section`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: solid 1px #000;

    h2 {
        font-family: 'MBC1961';
        font-weight: 500;
        font-size: 45px;

        ${({ theme }) => media(theme.breakpoints).small`
            margin: ${({ theme }) => '0 auto'};
            font-size: ${({ theme }) => '35px'};
        `}
    }
`
const Header_Box = styled.p`
    width: 170px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'MBC1961';
    font-size: 24px;
    color: #000;

    border: solid 1px #000;

    ${({ theme }) => media(theme.breakpoints).medium`
        width: ${({ theme }) => '110px'};
        font-size: ${({ theme }) => '18px'};
    `}

    ${({ theme }) => media(theme.breakpoints).small`
        display: ${({ theme }) => 'none'};
    `}
`
const Main_Wrap = styled.div`
    position: relative;
    padding-top: 130px;

    ${({ theme }) => media(theme.breakpoints).large`
        padding-top: ${({ theme }) => '104px'};
    `}

    p {
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);

        font-family: 'Unbounded';
        font-size: 146px;
        font-weight: 900;

        ${({ theme }) => media(theme.breakpoints).large`
            font-size: ${({ theme }) => '11vw'};
        `}

        ${({ theme }) => media(theme.breakpoints).medium`
            font-size: ${({ theme }) => '45px'};
        `}
    }

    img {
        width: 100%;
    }
`
const Main_text = styled.div`
    margin: 40px 0;

    ${({ theme }) => media(theme.breakpoints).medium`
        margin: ${({ theme }) => '20px 0'};
        padding: ${({ theme }) => '0px 20px'};
    `}

    .title {
        font-size: 40px;
        font-weight: 700;

        ${({ theme }) => media(theme.breakpoints).medium`
            font-size: ${({ theme }) => '30px'};
        `}
    }

    .content {
        font-size: 25px;
        margin-top: 30px;

        ${({ theme }) => media(theme.breakpoints).medium`
            font-size: ${({ theme }) => '18px'};
        `}
    }
`

function Main() {
    return (
       <>
        <Header>
            <Header_Box>Since 2021</Header_Box>
            <h2>송태민</h2>
            <Header_Box>1994.11.22</Header_Box>
        </Header>
        <Main_Wrap>
            <p>PORTFOLIO</p>
            <img src={mainImg} alt='메인 이미지' />
        </Main_Wrap>
        <Main_text>
            <p className="title">개발을 한다는 것</p>
            <p className="content">
                항상 고민하고 노력하는 개발자가 되려합니다.<br/>
                같은 목적지라도 어떻게 효율적이고 좋은 방법으로 갈지 고민하고<br/>
                처음 가는 길도 생각하며 나아가면 나의 길로 만들 수 있습니다.
            </p>
        </Main_text>
       </>
    )
}

export default Main