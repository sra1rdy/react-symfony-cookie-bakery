import React from  "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../colors.js";



const HouseFront = styled.div`
 position: absolute;
  height: 280px;
  width: 400px;
background-color: ${colors.gray};
top: 46%;
right: 33%;
pointer-events: ${props => props.themeState.dark ? 'none' : ''};
opacity: ${props => props.themeState.dark ? '0.9' : '1'}; 

`;





const BakeryWindow = styled.button`
    cursor: pointer;
    border-radius: 50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    border:2px solid ${colors.blueDark}; 
    background: ${colors.blue};
    width: 75px;
    height: 75px;

  &:hover {
    width: 75px;
    height: 75px;
    background-size: contain;
    border: none;
    background-image: url(https://i.pinimg.com/originals/eb/0b/f7/eb0bf7ca906e1178435abde1e6ad7007.jpg);
    transition: all .5s ease-in-out;
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
        background: ${colors.orange};
        box-shadow: none;
    `;
    const BakeryDoorHandle = styled.span`
    display: inline-block;
    width: 20px;
    height: 5px;
    position: absolute;
    left: 0.5rem;
    background: ${colors.redDark};
    `;


    const animateDrop = keyframes`{
        from {
            top: 9rem;
            transform: translateY(100%);#a4aba6
            opacity: 1;
        }
        to {
            top: 11rem;
            transform: translateY(0);
            opacity: 0;
        }
        }`;


    const Mailbox = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 100px;
    position: absolute;
    top: 9rem;
    left: 17rem;
    background: ${colors.grayDark};

    &:active {
    -webkit-animation-name: ${animateDrop};
    -webkit-animation-duration: 5s;
    -webkit-animation-timing-function: ease;
    -webkit-animation-iteration-count: 0;
    -webkit-animation-direction: normal;
    -webkit-animation-delay: 0;
    -webkit-animation-play-state: running;
    -webkit-animation-fill-mode: forwards;
     
    }
   
    `;

    const MailboxWindow = styled.span`
    display: inline-block;
    width: 70px;
    height: 15px;
    position: absolute;
    top: 1rem;
    background: ${colors.grayLight};
    `;
    
const  House = () => {
    const themeState = useTheme(); 

     return(
<HouseFront themeState={themeState}>
 <BakeryWindowLeft></BakeryWindowLeft>
 <Door></Door>
  <BakeryWindowRight></BakeryWindowRight>
 <Mailbox>
 <MailboxWindow className="mb-1" ></MailboxWindow>
     <span>Mailbox</span>
 </Mailbox>
</HouseFront>
     )


 }


 const Door = () => {
     return (
        <BakeryDoor>
        <BakeryDoorHandle></BakeryDoorHandle>
        </BakeryDoor>
     )
 }

 export default House;