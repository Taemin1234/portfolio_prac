import styled from "styled-components"

import Main from '../component/Main' 
import About from '../component/About'
import Products from '../component/Products'
import Contact from '../component/Contact'

import media from '../styles/media'

const Container_Wrap = styled.div`
    background-color: #f1f1f2;
    font-family: 'Pretendard';
`
const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    ${({ theme }) => media(theme.breakpoints).large`
        width: ${({ theme }) => '85%'};
    `}

    ${({ theme }) => media(theme.breakpoints).medium`
        width: ${({ theme }) => '100%'};
    `}
`

function Container() {
    return (
        <Container_Wrap>
            <Content>
                <Main/>
                <About/>
                <Products/>
                <Contact/>
            </Content>
        </Container_Wrap>
        

    )
}

export default Container