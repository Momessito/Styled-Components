import styled from "styled-components";

export const ButtonStyled = styled.button`

background-color : ${(prop) => prop.ColorButton ? prop.ColorButton : 'yellow'};
font-size : 2rem;
padding : 10px 30px ;
border-radius: 40px; 
color: black;
font-weight: bold;
box-shadow : 0px 0px 15px ${(prop) => prop.ColorButton ? prop.ColorButton : 'yellow'};
border : 5px solid black;
margin: 5px;
cursor : pointer;   

&:hover{
    filter : brightness(80%)
}

`