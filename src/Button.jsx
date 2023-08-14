import { styled } from "styled-components"

const ButtonStyle = styled.button`

color: #B92F2C;
text-align: center;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: uppercase;

padding: 10px 12px;
border-radius: 100px;
cursor: pointer;
margin-right: 4px;


:hover{
    background-color: #B92F2C;
    color: #FFF;
}
` 

function Button ({children}){
    return(<ButtonStyle type="button">{children}</ButtonStyle>)
}

export default Button