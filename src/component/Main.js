import styled from "styled-components"
import { React } from 'react';

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
        font-size: 40px;
        font-weight: 800;
    }
`
const Header_Box = styled.p`
    width: 170px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    color: #000;

    border: solid 1px #000;
`
const Main_Wrap = styled.div`
    position: relative;
    padding-top: 160px;

    p {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);

        font-size: 146px;
        font-weight: 700;
    }

    img {
        width: 100%;
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
       </>
    )
}

export default Main