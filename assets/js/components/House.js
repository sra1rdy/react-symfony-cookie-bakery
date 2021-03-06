import React from  "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../colors.js";


const HouseFront = styled.div`
height: 280px;
width: 400px;
background-color: ${colors.gray};
pointer-events: ${props => props.themeState.dark ? 'none' : ''};
opacity: ${props => props.themeState.dark ? '0.9' : '1'}; 
position: relative;

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
    top: 1.5rem;
    left: 1.5rem;
    `;

    const BakeryWindowRight = styled(BakeryWindow)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
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
            transform: translateY(100%);
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



let isOrderPlaced;
    


 
 const placeOrder = async () => {

    const API_URI = 'http://127.0.0.1:8000/order';

    const orderData =  {
        orderTimestamp: Date().toLocaleString()
    }

    const postOrderResponse = await fetch(API_URI, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData) });

  
    isOrderPlaced = postOrderResponse.ok ? true: false;

    if (!isOrderPlaced) {
        console.log("order error");
      }
        /**A message like a toast can be shown based on the response */
      console.log(orderData);
      console.log(isOrderPlaced);
 }



 const Door = (props) => {

   const isOrdered = props.orderDetails;

     return (
        <BakeryDoor onClick={() => placeOrder()}>
            <BakeryDoorHandle />
        {/* {A toast can be implemented to notify the user about the order request he/she placed.} */}
        </BakeryDoor>
     )
 }

 const  House = () => {
    
    const themeState = useTheme(); 

     return(
    <HouseFront themeState={themeState}>
        <BakeryWindowLeft />
        <Door orderDetails={isOrderPlaced} />
        <BakeryWindowRight />
    <Mailbox>
    <MailboxWindow className="mb-1" ></MailboxWindow>
     <span>Mailbox</span>
    </Mailbox>
</HouseFront>
     )
    


 }

 export default House;
