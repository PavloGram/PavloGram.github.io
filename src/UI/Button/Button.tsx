
import IButton from "../../types/IButton"
import { ButtonStyle } from "./ButtonStyle"


function Button ({text, change}: IButton){
    return(<ButtonStyle onClick={change} type="button">{text}</ButtonStyle>)
}

export default Button