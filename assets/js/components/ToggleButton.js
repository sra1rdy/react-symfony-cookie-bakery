import React from "react";
import { Button } from "@bootstrap-styled/v4";
import { useTheme } from "../context/ThemeContext"
import styled from "styled-components";



const RoundButton = styled(Button)`

    width: 150px;
    height: 150px;
    border-radius: 50%;

    :hover {
        color: blue;
    }
`;

const ToggleButton = () => {
    const themeState = useTheme();

    return (
        <RoundButton className="mr-4"  onClick={() => themeState.toggle()}></RoundButton>

    )

}

export default ToggleButton;