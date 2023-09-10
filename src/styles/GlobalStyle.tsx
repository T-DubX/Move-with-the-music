import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";
import {SectionTitle} from "../components/sectionTitle/SectionTitle";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.fontPrimary};

    min-width: 360px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
  //
  // section:nth-of-type(odd) {
  //   ${SectionTitle} {
  //     text-align: start;
  //   }
  // }
  //
  // section:nth-of-type(even) {
  //   ${SectionTitle} {
  //     text-align: center;
  //   }
  // }
  //
  // @media ${theme.media.tablet} {
  //   section:nth-of-type(odd) ${SectionTitle} {
  //     text-align: center;
  //   }
  }
`