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
    width: 100%;
    height: 300px;
    border-radius: 30px;
    border-left: solid 3px #000;
    border-right: solid 3px #000
`

function About () {
    return (
        <Section_Wrap>
            <About_Box></About_Box>
            <About_Box></About_Box>
        </Section_Wrap>
    )
}

export default About