import React, {createContext, useContext, useState, useEffect}from "react";
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';


import theme from "../theme.js";

// const themeMode = theme("dark");
// console.log(themeMode)

const defaultThemeData = {
  dark: false,
  toggle: () => {}
};

const ThemeContext = createContext(defaultThemeData);


const useTheme = () => useContext(ThemeContext);


const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false
  });

  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};


 
const ThemeProvider = ({ children }) => {

const [themeState, setThemeState] = useEffectDarkMode();

// if (!themeState.hasThemeMounted) {
//   return <div />;
// }

const toggle = () => {

  const dark = !themeState.dark;

  localStorage.setItem("dark", JSON.stringify(dark));

  setThemeState({ ...themeState, dark });
};


const activeTheme = themeState.dark ? theme("dark") : theme("light");


  return (
    <BootstrapProvider theme={activeTheme} reset={true} >
    <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
      </BootstrapProvider>
  )
}

export {ThemeProvider, useTheme}