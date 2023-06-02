import styled from "styled-components";

export const ButtonStyled = styled.button`

background-color : ${(prop) => prop.ColorButton ? prop.ColorButton : 'yellow'};
font-size : 2rem;
padding : 10px 30px ;
border-radius: 4px; 
color: black;
border : 1px solid black;
cursor : pointer;   

&:hover{
    filter : brightness(80%)
}

`