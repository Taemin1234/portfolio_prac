import styled, { keyframes } from "styled-components"

const Main_wrap = styled.section`
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const textShow = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

const Main_title = styled.h1`
    position: relative;
    font-size: 80px;
    font-weight: 700;
    color: #1A1A1A;
    text-shadow: -3px 0px #fff, 0px 3px #fff, 3px 0px #fff, 0px -3px #fff;

    &:before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        color: #00bfa5;
        text-shadow: -3px 0px #fff, 0px 3px #fff, 3px 0px #fff, 0px -3px #fff;
        overflow: hidden;
        animation: ${textShow} 3s forwards;
    }
`

const Main_subtitle = styled.p`
    font-size: 40px;
    font-weight: 500;
    color: #fff;
`
const arrow_wave = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 1;
    }
`;
const arrow_down = keyframes`
    0% {
        bottom: 18%;
    }
    50% {
        bottom: 15%;
    }
    100% {
        bottom: 18%;
    }
`;
const Arrow_wrap = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 18%;
    animation:${arrow_down} 2s infinite;
`

const Arrow = styled.div`
    width: 80px;
    height: 80px;

    rotate: 225deg;
    border-radius: 6px;
    box-shadow: -10px -10px 4px 5px #00bfa5;
    animation: ${arrow_wave} 1s infinite; animation-direction: alternate;
`
const TopArrow = styled(Arrow)`
    animation-delay: 0.1s;
`
const MidArrow = styled(Arrow)`
    margin-top: -30px;
    animation-delay: 0.2s;
`
const BottomArrow = styled(Arrow)`
    margin-top: -30px;
    animation-delay: 0.3s;
`
function Main() {
    return (
        <Main_wrap>
            <div>
                <Main_title data-text="TM's&nbsp;Portfolio">TM's&nbsp;Portfolio</Main_title>
                <Main_subtitle>송태민의 포트폴리오입니다.</Main_subtitle>
            </div>
            <Arrow_wrap>
                <TopArrow></TopArrow>
                <MidArrow></MidArrow>
                <BottomArrow></BottomArrow>
            </Arrow_wrap>
        </Main_wrap>
    )
}

export default Main