import { styled } from "styled-components"


export const Button = styled.button`
position: absolute;
right: 8px;
top: 50%;
transform: translateY(-50%);
background: none;
border: none;
cursor: pointer;
`

export const WarningText = styled.p`
display: none;
color: white;
`
export const SearchInput = styled.input`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 1.17;
color: #000000;
// width: 100%;
width: 220px;
// height: 42px;
// height: 34px;
// padding: 16px;
background: #ffffff;
border-radius: 100px;
border: none;
padding: 10px 16px 10px 14px;
outline: none;

 &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    color: #000000;
  
 }


`
export const SearchForm = styled.form`
position: relative;
display: flex;
justify-content: center;


// width: 100%;
// order: 2;

`
export const SearchImg = styled.img`
padding-top: 4px;
width: 14px;
height: 14px;
`
