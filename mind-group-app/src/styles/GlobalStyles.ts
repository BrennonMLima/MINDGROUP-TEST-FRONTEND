import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


export default createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html, body, #root {
height: 10
}

*, button, input {
border: 0;
outline: 0;
font-family: 'Roboto', sans-serif;
}

:root {
--white: #fff;
--secondary: #011936;
--tertiary: #3772FF;

--gray: #8a8c90;
--chat-input: rgb(64,68,75);
--symbol: #74777a;

--notification: #f84a4b;
--discord: #6e86d6;
--mention-detail: #f9a839;
--mention-message: #413f3f;

--link: #5d80d6;

--rocketseat: #6633cc;
}

header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--secondary);
    color: var(--white);
    padding: 20px 35px; 
}

.config-icon{
    font-size: 25px;
}

.board{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 30px;
    margin: 15px 16px;
    padding: 30px 30px;
}
.button {
    padding: 8px 10px;
    border: 0;
    background: var(--tertiary);
    border-radius: 0.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    cursor: pointer
  }
.profile{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
}
}
`;

