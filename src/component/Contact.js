import styled from "styled-components"
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    const form = useRef();

    const [formData, setFormData] = useState({
        email_title: '',
        email_text: '',
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, //저장된 데이터 값을 가져와 모든 사항을 볼 수 있게 한다.
            [name]: value, // 현재 바뀌는 값을 업데이트 한다.
        });
        console.log(formData)
    };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_3s27gid', 'template_9puzar1', form.current, {
          publicKey: 'cHwSPE6mnf62FrATm',
        })
        .then(
          () => {
            alert('메일이 전송되었습니다!')
            console.log('SUCCESS!');
            setFormData({
                email_title: '',
                email_text: '',
              });
          },
          (error) => {
            alert('메일 전송에 실패했습니다 ㅠ')
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <Contact_wrap>
            <h2>Contact</h2>
            <Email_wrap>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label>
                            <Email_input type="text" name='email_title' placeholder="제목을 입력해주세요(20자 이내)" maxLength={20} value={formData.email_title} onChange={handleChange} required />
                        </label>
                    </div>
                    <div>
                        <label>
                            <Email_input as='textarea' rows={5} name='email_text' placeholder="내용과 회신할 연락처를 입력해주세요" value={formData.email_text} onChange={handleChange} required/>
                        </label>
                    </div>
                    <Email_btn type="submit">이메일 전송</Email_btn>
                </form>
            </Email_wrap>
        </Contact_wrap>
    )
}

export default Contact;

