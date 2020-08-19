import React from  "react";
import styled from "styled-components";
import { Badge, H3 } from "@bootstrap-styled/v4";
import { useTheme } from "../context/ThemeContext";
import House from "./House";
import { colors } from "../colors.js";



const BakeryWrapper = styled.div`
margin: 20px auto;
align-items: center;
`;


const Roof = styled.div`
width: 0;
height: 0;
border-left: 200px solid transparent;
border-right: 200px solid  transparent;
border-top: 100px solid transparent;
border-bottom: 150px solid ${colors.red};
position: absolute;
right: 33%;

`; 

const BakeryBadge = styled(Badge)`
font-size: 1.5rem;
position: absolute;
text-transform: uppercase;
top: 41%;
right: 39%;
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
        <Roof className="mb-0"> </Roof>
        <BakeryBadge color="success" >
        <BadgeHeader>{themeState.dark ? "Bakery Closed" : "Cookie Bakery"}</BadgeHeader>
        </BakeryBadge>
        <House />
    </BakeryWrapper>
    )

}






export default CookieBakery;