import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  *{
  font-family: "Roboto", sans-serif;
  }
}
`;

export const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

export const theme = {
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "black",
    light2: "black",
    text: "snow",
    textDark: "gray",
    sectionOneColor: "#c1d7f4",
    sectionThreeColor: "#abedcc",
    sectionOneText: "#02227a",
    bgDefault: "white",
    bgPrimary: "darkBlue",
    bgSecondary: "darkBlué",
    bgLight: "aliceBlue",
    infoBoxTransform: "aliceBlue",
    welcomeheader: "#95a8e3",
    welcomemessage: "#244bbe",
    welcometime: "darkBlue",
    shadow: "black",
  },
};

export const Darktheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "#519fe3",
    light2: "#aef1ea",
    text: "snow",
    textDark: "gray",
    sectionOneColor: "#0c263c",
    // sectionOneColor: "#aef1ea",
    sectionThreeColor: "#022a2a",
    sectionOneText: "snow",
    bgDefault: "#030417",
    bgPrimary: "black",
    bgSecondary: "black",
    bgLight: "aliceBlue",
    infoBoxTransform: "#0d0a3e",
    welcomeheader: "#95a8e3",
    welcomemessage: "#95a8e3",
    welcometime: "#95a8e3",
    shadow: "white0",
  },
};
