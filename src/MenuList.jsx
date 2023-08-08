import { styled } from "styled-components"


const MenuListStyle = styled.ul`
display: flex;
flex-direction: row;
list-style-type: none;
padding-left: 0;
margin: 0 -8px 8px 0;
`

const ListItemStyle = styled.li`

`
const ItemStyle = styled.a`
display: block;
text-decoration: none;
text-transform: uppercase;
background: white;
color: inherit;
margin-right: 4px;
padding: ${props => props.home !== 'false' ? '10px 26px 10px 26px' : '10px 22px 10px 22px'} ; 
border-radius: 100px;

font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;


&:hover {
    background: black;
    color: white;
}
`





function MenuList (){



    return(
     <MenuListStyle>
      <ListItemStyle>
        <ItemStyle home='true' href="/index.html">home</ItemStyle>
      </ListItemStyle>
      <ListItemStyle>
        <ItemStyle home='false' href="№">my library</ItemStyle>
        </ListItemStyle>
     </MenuListStyle>

    )
}

export default MenuList