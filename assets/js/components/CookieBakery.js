
import React from  "react";
import styled from "styled-components";
import { Button, Badge, H3 } from "@bootstrap-styled/v4"

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
    border:1px solid blue; 
    background-color: white;
    width: 100px;
    height: 100px;
    `;


    const BakeryWindowLeft = styled(BakeryWindow)`
    position: absolute;
    top: 1.5em;
    left: .25em;
    `;

    const BakeryWindowRight = styled(BakeryWindow)`
    position: absolute;
    top: 1.5em;
    right: .25em;
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

    return (
<HouseWrapper>
<Roof className="mb-0"> </Roof>
<BakeryBadge color="success" ><H3>Cookie Bakery</H3></BakeryBadge>
<House></House>
</HouseWrapper>
    )

}






export default CookieBakery;