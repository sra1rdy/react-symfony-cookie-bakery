
import React from  "react";
import styled from "styled-components";
import { Badge, H3 } from "@bootstrap-styled/v4";
import { useTheme } from "../context/ThemeContext";

const red = '#fc0f03';

const Roof = styled.div`
width: 0;
height: 0;
border-left: 200px solid transparent;
border-right: 200px solid  transparent;
border-top: 100px solid transparent;
border-bottom: 150px solid ${red};
position: absolute;
right: 33%;

`; 

const HouseFront = styled.div`
 position: absolute;
  height: 280px;
  width: 400px;
background-color: #A5A3A2;
top: 46%;
right: 33%;

`;


const HouseWrapper = styled.div`
margin: 20px auto;
align-items: center;
`;


const BakeryBadge = styled(Badge)`
font-size: 2rem;
position: absolute;
top: 42%;
right: 40%;
z-index: 1000;
`;


const BakeryWindow = styled.button`
    cursor: pointer;
    border-radius: 50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    border:2px solid #4287f5; 
    background: #95b7ed;
    width: 75px;
    height: 75px;

    &:hover {
        width: 75px;
        height: 75px;
        background-size: contain;
        border: none;
        background-image: url(https://i.pinimg.com/originals/eb/0b/f7/eb0bf7ca906e1178435abde1e6ad7007.jpg);
        transition-delay: 0.5s;
    }
    `;


    const BakeryWindowLeft = styled(BakeryWindow)`
    position: absolute;
    top: 1.5em;
    left: 1.5em;
    `;

    const BakeryWindowRight = styled(BakeryWindow)`
    position: absolute;
    top: 1.5em;
    right: 1.5em;
    `;

    const BakeryDoor = styled.button`
        width: 110px;
        height: 239px;
        position: absolute;
        top: 2.5rem;
        left: 9rem;
        background: #ebb134;
    `;

    const MailBox = styled.button`
    width: 110px;
    height: 100px;
    position: absolute;
    top: 9rem;
    left: 17rem;
    background: #3b3737;
    
    `;
    


    const  House = () => {
        return(
<HouseFront>
    <BakeryWindowLeft></BakeryWindowLeft>
    <BakeryDoor></BakeryDoor>
    <BakeryWindowRight></BakeryWindowRight>
    <MailBox>Mailbox</MailBox>
</HouseFront>
        )


    }


const CookieBakery = () => {
    const themeState = useTheme();

    return (
<HouseWrapper>
<Roof className="mb-0"> </Roof>
<BakeryBadge color="success" ><H3>{themeState.dark ? "Bakery Closed" : "Cookie Bakery"}</H3></BakeryBadge>
<House></House>
</HouseWrapper>
    )

}






export default CookieBakery;