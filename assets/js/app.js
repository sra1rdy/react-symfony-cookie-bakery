import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@bootstrap-styled/v4";
import { useTheme, ThemeProvider} from "./context/ThemeContext";

import '../css/app.css';


const App = () => {
  const themeState = useTheme();
  return (
    
      <Button onClick={() => themeState.toggle()}></Button>
   
  )
}


ReactDOM.render(<ThemeProvider> <App/> </ThemeProvider>, document.getElementById('root'));
