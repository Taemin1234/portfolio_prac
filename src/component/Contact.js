import styled from "styled-components"
import React, { useState } from 'react';

const Contact_wrap = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
    box-sizing: border-box;

    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #d9d9d9;
    }
`
const Email_wrap = styled.div`
    width: 50%;

    form {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        gap: 10px;
    }
`
const Email_input = styled.input`
    width: 100%;
    background-color: #d9d9d9;
    border: solid 1px #f1f1f2;
    color: #000;
    font-weight: 700;
    padding: 5px 10px;
    box-sizing: border-box;
`
const Email_btn = styled.button`
    border-radius: 5px;
    padding: 5px;
    background-color: #808080;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #fff;
    }
`

function Contact() {
    const defaultEmail = 'example@example.com';  // 기본 이메일 주소 설정
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: defaultEmail, subject, message })
        });
        if (response.ok) {
        alert('이메일이 성공적으로 전송되었습니다.');
        } else {
        alert('이메일 전송에 실패했습니다.');
        }
    };

    return (
        <Contact_wrap>
            <h2>Contact</h2>
            <Email_wrap>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Email_input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="제목을 입력해주세요" required />
                    </div>
                    <div>
                        <Email_input as='textarea' rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="내용을 입력해주세요" required/>
                    </div>
                    <Email_btn type="submit">이메일 전송</Email_btn>
                </form>
            </Email_wrap>
        </Contact_wrap>
    )
}

export default Contact;

