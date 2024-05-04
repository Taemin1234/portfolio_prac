import styled from "styled-components"
import list from "../json/list.json"

const Products_wrap = styled.div`
    margin-top: 40px;
`

const Products_title = styled.h2`
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 10px;
    border-bottom: 6px solid #000;
`
const Skill_sel = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    background-color: #d9d9d9;
    padding: 15px;
    box-sizing: border-box;

`
const Skill_item = styled.div`
    label {
        display: inline-block;
        padding: 5px 10px;
        background-color: #fff;
        color: #333;
        border-radius: 50px;
        cursor: pointer;
    }

    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"]:checked + label {
        background-color: #333;
        color: #fff;
    }

`
const Pd_list = styled.div`
    margin-top: 20px;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
`
const Pd_item = styled.li`
    width: 100%;
    max-width: 580px;

    img {
        width: 60%;
    }

`

function Products() {
    const skill = [
        {id:1, name: 'JS'},
        {id:2, name:'react'},
        {id:3, name:'next'},
    ]

    return (
        <>
            <Products_wrap>
                <Products_title>Products</Products_title>
            </Products_wrap>
            <Skill_sel>
                {skill.map((item) => (
                    <Skill_item key={item.id}>
                        <input type="checkbox" value={item.name} id={`chk-${item.id}`}/>
                        <label htmlFor={`chk-${item.id}`}>{item.name}</label>
                    </Skill_item>
                ))}
            </Skill_sel>
            <Pd_list>
                <ul>
                    {list.map((item) => (
                        <Pd_item key={item.id}>
                            <div className="pd_info">
                                <img src={item.img} alt={item.title}/>
                                <div className="pd_info_text">
                                    <p>{item.title}</p>
                                    <div className="pd_info_skill">
                                        {item.skills.map((skill) => (
                                            <p key={skill}>{skill}</p>
                                        ))}
                                    </div>
                                    <div className="pd_link">
                                        <a href={item.link} target="_blank" rel="noreferrer">Homepage</a>
                                        <a href={item.github} target="_blank" rel="noreferrer">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="pd_content">
                                <p>{item.des}</p>
                            </div>
                            <div className="pd_tags">
                                {item.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))}
                            </div>
                        </Pd_item>
                    ))}
                </ul>
            </Pd_list>
        </>
    )
}

export default Products

