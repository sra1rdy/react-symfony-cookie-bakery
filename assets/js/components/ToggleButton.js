import React from "react";
import { useTheme } from "../context/ThemeContext"
import styled from "styled-components";


const RoundButton = styled.button`
    cursor: pointer;
    border-radius: 50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    border:1px solid ${props => props.theme.toggleBtnBorder}; 
    background-color: ${props => props.theme.toggleBtnColor};
    width: 125px;
    height: 125px;
    position: absolute;
    top: 2%;
    right: 30%;
`;

const ToggleButton = () => {
    const themeState = useTheme();

    return (
      
           <RoundButton onClick={() => themeState.toggle()}></RoundButton>
      
    )

}

export default ToggleButton;