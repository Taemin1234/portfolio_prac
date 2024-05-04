import styled from "styled-components"

const Section_Wrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
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
        margin-top: 40px;
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

    & ul ~ ul {
        margin-top: 30px;
    }

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
const Skill_wrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    border-top: ${props => props.top ? 'dashed 2px #000' : 'none'};
    padding-top: ${props => props.top ? '30px' : '0'};
`
const Skill_li = styled.li`
    img {
        width: 80px;
        height: 80px;
    }

    p {
        text-align: center;
        margin-top: 10px;
        font-size: 18px;
    }
`

function About () {
    const Skill_list = [
        {name: "HTML", img:"images/icon/html.png"},
        {name: "CSS", img:"images/icon/css.png"},
        {name: "SASS", img:"images/icon/sass.png"},
        {name: "JavaScript", img:"images/icon/JS.png"},
        {name: "jQuery", img:"images/icon/jquery.png"},
        {name: "React", img:"images/icon/react.png"},
    ]
    const Tool_list = [
        {name: "git", img:"images/icon/git.png"},
        {name: "Figma", img:"images/icon/figma.png"},
        {name: "jira", img:"images/icon/jira.png"},
        {name: "notion", img:"images/icon/notion.png"},
    ]

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
            <About_Box>
                <p className="title">SKILLS</p>
                <Skill_wrap>
                    {Skill_list.map((skill) => {
                        return (
                            <Skill_li key={skill.name}>
                                <img src={skill.img} alt={skill.name} />
                                <p>{skill.name}</p>
                            </Skill_li>
                        )
                    })}
                    
                </Skill_wrap>
                <Skill_wrap top={true}>
                    {Tool_list.map((tool) => {
                        return (
                            <Skill_li key={tool.name}>
                                <img src={tool.img} alt={tool.name} />
                                <p>{tool.name}</p>
                            </Skill_li>
                        )
                    })}
                </Skill_wrap>
            </About_Box>
        </Section_Wrap>
    )
}

export default About