import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
  padding: 20px 40px;
  font-family: "Texturina", serif;

  @media screen and (max-width: 900px) {
      padding:10px;
  }

}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box
}`;
