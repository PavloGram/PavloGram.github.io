
import { ButtonStyle } from "./ButtonStyle"
import React from "react"


function Button ({text, change}){
    return(<ButtonStyle onClick={change} type="button">{text}</ButtonStyle>)
}

export default Button