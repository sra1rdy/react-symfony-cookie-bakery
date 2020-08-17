
import { colors } from "./colors.js";


const themeLight = { 
  background: colors.white,
  toggleBtnColor: colors.yellow,
  toggleBtnBorder: colors.white,
  badgeText: colors.black
  
};

const themeDark = {
  background: colors.black,
  toggleBtnColor : colors.white,
  toggleBtnBorder: colors.black,
  badgeText: colors.white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;