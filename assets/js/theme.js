
const white = '#FFFFFF';
const black = '#161617';
const yellow = '#f7f42f';


const themeLight = { 
  background: white,
  toggleBtnColor: yellow,
  toggleBtnBorder: white,
  badgeText: black
  
};

const themeDark = {
  background: black,
  toggleBtnColor : white,
  toggleBtnBorder: black,
  badgeText: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;