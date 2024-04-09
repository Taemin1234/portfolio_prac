import styled, { keyframes } from "styled-components"

const header = keyframes`
    0% {
        margin-top: -65px;
    }
    100% {
        margin-top: 0
    }
`;


const Head = styled.header`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    max-width: 800px;
    min-width: 340px;
    height: 60px;
    border-radius: 0 0 15px 15px;
    border: solid 1px #00bfa5;
    padding: 0 10px;

    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: -65px;
    animation: ${header} 3s forwards;

    z-index: 50;
`;


const HeaderLink = styled.a`
    color: #00bfa5;
    text-decoration: none;
    margin: 0 10px;
    font-size: 20px;
`

function Header() {
    return (
        <Head>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>
            <HeaderLink href="/Works">Works</HeaderLink>
            <HeaderLink href="/contact">Contact</HeaderLink>    
        </Head>
    )
    
}

export default Header