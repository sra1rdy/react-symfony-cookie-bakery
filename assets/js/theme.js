import { withTheme } from "styled-components";

const white = "#FFFFFF";
const black = "#161617";

const themeLight = {
  background: white,
  body: black
};

const themeDark = {
  background: black,
  body: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;