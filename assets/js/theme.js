
const white = '#FFFFFF';
const black = '#161617';
const yellow = '#f7f42f';

const themeLight = { 
  '$body-color': white,
  '$btn-primary-bg': yellow,
};

const themeDark = {
  '$body-color': black,
  '$btn-primary-bg' : black
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;