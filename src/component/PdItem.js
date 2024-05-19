import React, { useRef, useEffect } from 'react';
import styled from "styled-components"
import media from '../styles/media'

const Pd_item = styled.li`
    width: 100%;
    max-width: 580px;
    padding: 20px;
    border-top: solid 2px #000;
    border-bottom: solid 2px #000;
    box-sizing: border-box;
    background-color: #d9d9d9;

    opacity: 0;
    margin-top: 30px;
    transition: all 0.5s;

    ${({ theme }) => media(theme.breakpoints).sub_large`
        max-width : unset;
    `}
`
const Pd_info = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    ${({ theme }) => media(theme.breakpoints).medium`
         flex-direction : ${({ theme }) => theme.flex.fdCol};
    `}

    img {
        width: 50%;

        ${({ theme }) => media(theme.breakpoints).medium`
            width : 100%;
        `}
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
            flex-wrap:wrap;
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

        ${({ theme }) => media(theme.breakpoints).small`
            font-size: ${({ theme }) => theme.font.moCont};
        `}
    }

`
const Pd_tags = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    p {
        padding: 5px 10px;
        background-color: #494949;
        color: #fff;
        border-radius: 50px;
    }
`

function PdItem({item}) {
    const targetRef = useRef(null);

    let options = {
        threshold: 0.3
    }

    const observeCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.marginTop = '0px';
            }
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observeCallback, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return (
        <Pd_item ref={targetRef} key={item.id}>
            <Pd_info>
                <img src={item.img} alt={item.title}/>
                <div className="pd_info_text">
                    <span className="title">{item.title}</span>
                    <div className="pd_info_skill">
                        {item.skills.map((skill) => (
                            <Use_skill key={skill} bgImg={`/images/icon/${skill}.png`}>{skill}</Use_skill>
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

export default PdItem