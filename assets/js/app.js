import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@bootstrap-styled/v4";
import { ThemeProvider } from "./context/ThemeContext";

import ToggleButton from "./components/ToggleButton"


import '../css/app.css';




const App = () => {
 
  return (
     <Container>
<ToggleButton></ToggleButton>
        
     </Container>
    
   
  )
}


ReactDOM.render(<ThemeProvider> <App/> </ThemeProvider>, document.getElementById("root"));
