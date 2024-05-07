import React, { useState } from 'react';
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
    padding-bottom: 60px;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
`
const Pd_item = styled.li`
    width: 100%;
    max-width: 580px;
    padding: 20px;
    border-top: solid 2px #000;
    border-bottom: solid 2px #000;
    box-sizing: border-box;
    background-color: #d9d9d9;
`
const Pd_info = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    img {
        width: 50%;
    }

    .pd_info_text {
        .title {
            font-size: 24px;
            font-weight: 700;
            border-bottom: solid 1px #000;
            line-height: 30px;
        }
        .pd_info_skill {
            display: flex;
            gap: 5px;
            margin-top: 15px;

        }
    }

    .pd_link {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        margin-top: 15px;
    }
`

const Use_skill = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 0;
    background-image: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-size: contain;
`
const Pd_link_box = styled.a`
    display: block;
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border: solid 1px #000;
    text-align: center;
`
const Pd_content = styled.div`
    margin-top: 20px;
    
    p {
        font-size: 22px;
        font-weight: 700;
        line-height: 30px;
    }

`
const Pd_tags = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    p {
        padding: 5px 10px;
        background-color: #494949;
        color: #fff;
        border-radius: 50px;
    }
`
function PdItem({item}) {
    return (
        <Pd_item key={item.id}>
            <Pd_info>
                <img src={item.img} alt={item.title}/>
                <div className="pd_info_text">
                    <span className="title">{item.title}</span>
                    <div className="pd_info_skill">
                        {item.skills.map((skill) => (
                            <Use_skill key={skill} data-value={skill} bgImg={`/images/icon/${skill}.png`}>{skill}</Use_skill>
                        ))}
                    </div>
                    <div className="pd_link">
                        {item.link && <Pd_link_box href={item.link} target="_blank">Homepage</Pd_link_box>}
                        {item.github && <Pd_link_box href={item.github} target="_blank">Github</Pd_link_box>}
                    </div>
                </div>
            </Pd_info>
            <Pd_content>
                <p>{item.des}</p>
            </Pd_content>
            <Pd_tags>
                {item.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))}
            </Pd_tags>
        </Pd_item>
    )
}

function Products() {
    const skill = [
        {id:1, name: 'JS'},
        {id:2, name:'react'},
        {id:3, name:'next'},
        {id:4, name:'jQuery'},
        {id:5, name:'HTML'},
    ]

    // 체크된 항목 저장, 중복을 거르기 위해 set 함수 사용
    const [checkItems, setCheckItems] = useState(new Set()) 
    const [checked, setChecked] = useState(false); // 체크 여부 판단

    // 체크 상태에 따라 Set 함수에 저장 또는 제외
    const checkItemHandler = (value, isChecked) => {
        const newCheckItems = new Set(checkItems);
        if (isChecked) {
            newCheckItems.add(value);
        } else {
            newCheckItems.delete(value);
        }
        setCheckItems(newCheckItems);
        // console.log(newCheckItems);
    }

    // 클릭한 체크박스의 value값을 가져오고 체크 상태를 변경
    const checkHandled = ({target}) => {
        setChecked(!checked);
        checkItemHandler(target.value, target.checked);
    }

    return (
        <>
            <Products_wrap>
                <Products_title>Products</Products_title>
            </Products_wrap>
            <Skill_sel>
                {skill.map((item) => (
                    <Skill_item key={item.id}>
                        <input type="checkbox" value={item.name} id={`chk-${item.id}`} onChange={checkHandled} />
                        <label htmlFor={`chk-${item.id}`}>{item.name}</label>
                    </Skill_item>
                ))}
            </Skill_sel>
            <Pd_list>
                <ul>
                    {list.filter(item => 
                        checkItems.size === 0 || Array.from(checkItems).every(skill => item.skills.includes(skill))
                    ).map((item) => (
                        <PdItem item={item} key={item.id} />
                    ))}
                </ul>
            </Pd_list>
        </>
    )
}

export default Products

