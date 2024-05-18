import React, { useState } from 'react';
import styled from "styled-components"
import list from "../json/list.json"
import media from '../styles/media'

import PdItem from './PdItem';

const Products_wrap = styled.div`
    margin-top: 40px;

    ${({ theme }) => media(theme.breakpoints).medium`
        padding: ${({ theme }) => '0 20px'};
    `}
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

    ${({ theme }) => media(theme.breakpoints).medium`
        margin: ${({ theme }) => '0 20px'};
    `}

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

function Products() {
    const skill = [
        {id:1, name: 'JS'},
        {id:2, name:'react'},
        {id:3, name:'nextjs'},
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

    // filter 함수로 true인 요소만 랜더링한다.
    // checkItems가 비어있으면 모든 item을 랜더링한다.
    // 논리 OR 연산자로 앞 조건이 true이면 뒷 조건을 무시하고 false이면 뒷 조건을 발동시킨다.
    // checkItems를 배열로 변환하고
    // every를 사용하여 배열 요소가 every의 모든 조건을 통화하면 true로 반환하여 랜더링할 수 있다.
    // every의 조건(item.skills.includes(skill))은 skill가 item.skills(list에 있는 배열) 배열에 포함되는 지 확인
    // 그러면 true인 skill만 map 함수로 돌려서 랜더링 된다.
    const filteredSkill = list.filter(item => 
        checkItems.size === 0 || Array.from(checkItems).every(skill => item.skills.includes(skill))
    );

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
                    {filteredSkill.length === 0 ? (<p>내용이 없습니다.</p>) : filteredSkill.map((item) => (
                        <PdItem item={item} key={item.id} />
                    ))}
                </ul>
            </Pd_list>
        </>
    )
}

export default Products

