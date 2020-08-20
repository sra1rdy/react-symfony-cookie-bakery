import React from  "react";
import styled from "styled-components";
import { Badge, H3 } from "@bootstrap-styled/v4";
import { useTheme } from "../context/ThemeContext";
import House from "./House";
import { colors } from "../colors.js";



const BakeryWrapper = styled.div`
position: fixed;
top: 19%;
right: 33%;
`;


const Roof = styled.div`
width: 0;
height: 0;
border-left: 200px solid transparent;
border-right: 200px solid  transparent;
border-bottom: 150px solid ${colors.red};


`; 

const BakeryBadge = styled(Badge)`
font-size: 1.5rem;
text-transform: uppercase;
position: absolute;
top: 120px;
left: 80px;
z-index: 1000;
`;

const BadgeHeader = styled(H3)`
&&& {
  color: ${props => props.theme.badgeText};
  opacity: 0.9;
}`;

    


const CookieBakery = () => {
    const themeState = useTheme();

    return (
    <BakeryWrapper>
        <Roof className="mb-0" /> 
        <BakeryBadge color="success" >
        <BadgeHeader>{themeState.dark ? "Bakery Closed" : "Cookie Bakery"}</BadgeHeader>
        </BakeryBadge>
        <House />
    </BakeryWrapper>
    )

}






export default CookieBakery;