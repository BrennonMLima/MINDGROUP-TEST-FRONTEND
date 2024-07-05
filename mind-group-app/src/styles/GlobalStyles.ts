import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
}
.main{
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

*, button, input {
border: 0;
outline: 0;
font-family: 'Roboto', sans-serif;
}

:root {
--secondary: #011936;
--tertiary: #3772FF;
}

header{
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    background-color: var(--secondary);
    color: #fff;
    padding: 20px 35px; 
}

footer{
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    justify-content: center;
    background-color: var(--secondary);
    color: #fff;
    gap: 10px;
    padding: 10px 25px; 
}

.config-icon{
    font-size: 20px;
    cursor: pointer;
}

.action-icon{
    font-size: 18px;
    cursor: pointer;
}


.board{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 30px;
    min-width: 70%;
    padding: 20px 30px;
    margin-top: 20px;
}

.column{
    display: flex;
    flex-direction: column;
}
.name-input{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 20px;
    align-items: center;
}
.button {
    padding: 10px 20px;
    border: 0;
    background: var(--secondary);
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

.table{
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 20px;
    min-width: 70%;
    margin-top: 20px;
    padding-bottom: 20px;
    word-break: break-all;
}
.product-item{
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 0px;
    margin: 10px 0px;
    padding: 30px 30px;
    word-break: break-all;
}

.table-header{
    width: 100%;
    background-color: var(--secondary);
    color: #fff;
    overflow-x: auto;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 30px 3px;
}
img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
textarea{
    display:flex;
    resize:none;
    height: 50px;
    align-items: center;
    font-size: 40px;
}
.text-input{
    background: var(--white);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 10px;
    padding: 20px 15px;
}
.number-input{
    background: var(--white);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 10px;
    margin-right: 15px;
    padding: 10px 10px;
    max-width: 80px;
}
.login{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10%;
}

.form-login{
    display: flex;
    flex-direction: column;
    gap: 20px
}
.link{
    color: var(--secondary);
}
`;

