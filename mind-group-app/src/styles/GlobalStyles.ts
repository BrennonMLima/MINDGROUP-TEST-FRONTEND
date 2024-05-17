import { createGlobalStyle } from 'styled-components';


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
    margin: 20px 150px;
    padding: 20px 30px;
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
    padding: 16px 20px;
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
    margin: 20px 150px;
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
    margin: 20px auto;
    padding: 30px
}
img{
    width: 100px;
    height: 100px;
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
    margin-right: 15px;
    padding: 20px 30px;
}
.number-input{
    background: var(--white);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 10px;
    margin-right: 15px;
    padding: 10px 10px;
    max-width: 70px;
}
}
`;

