import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Poppins&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${defaultTheme.colors.lightTheme.backgorund};
    font-family: ${defaultTheme.fonts.primary};
    display: flex;
    /* align-items: center; */
    justify-content: center;
    height: 100vh;

}


`;
export default GlobalStyles;
