
import { ButtonStyle } from "./ButtonStyle"
import React from "react"


function Button ({text, change, value}){
    return(<ButtonStyle value={value} onClick={change} type="button">{text}</ButtonStyle>)
}

export default Button