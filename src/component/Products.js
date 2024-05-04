import styled from "styled-components"

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
        </>
    )
}

export default Products

