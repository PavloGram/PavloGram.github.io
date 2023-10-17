import { css, styled } from "styled-components";

export const ButtonStyle = styled.button`
color: #B92F2C;
text-align: center;
font-size: 12px;
font-weight: 500;
line-height: normal;
text-transform: uppercase;

padding: 9px 10px;

${({value}) =>
    value === "library" &&
    css`
      padding: 10px 24px;
    `}
border-radius: 100px;
border: 1px solid #000000;
cursor: pointer;
margin-right: 4px;


&:hover{
    border: 1px solid #B92F2C;
    background-color: #B92F2C;
    color: #FFF;
}
` 