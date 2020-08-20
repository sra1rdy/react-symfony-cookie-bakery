import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./context/ThemeContext";
import styled, { createGlobalStyle } from "styled-components";
import ToggleButton from "./components/ToggleButton";
import CookieBakery from "./components/CookieBakery";
import 'bootstrap/dist/css/bootstrap.css';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;


const Wrapper = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  `;


const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
        <Wrapper>
          <ToggleButton />
          <CookieBakery />
        </Wrapper>
    </Fragment>
    
   
  )
}


ReactDOM.render(<ThemeProvider> <App/> </ThemeProvider>, document.getElementById("root"));
