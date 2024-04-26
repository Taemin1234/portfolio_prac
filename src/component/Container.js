import styled from "styled-components"

import Header from '../component/Header'
import Main from '../component/Main'
import About from '../component/About'

const Container_Wrap = styled.div`
    background-color: #f1f1f2;
`
const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

function Container() {
    return (
        <Container_Wrap>
            <Content>
                {/* <Header/> */}
                {/* <Main/> */}
                {/* <About/> */}
                {/* <작품/> */}
                {/* <Contact/> */}
                {/* <Header /> */}
                <Main/>
                {/* <About/> */}
            </Content>
        </Container_Wrap>
        

    )
}

export default Container