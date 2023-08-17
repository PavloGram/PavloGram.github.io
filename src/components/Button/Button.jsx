
import { ButtonStyle } from "./ButtonStyles"


function Button ({text, change}){
    return(<ButtonStyle onClick={change} type="button">{text}</ButtonStyle>)
}

export default Button