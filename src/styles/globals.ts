import { createGlobalStyle } from 'styled-components';

interface ITheme {
    colors: {
        lightBlue: string,
        mediumBlue: string,
        blue: string,
        darkBlue: string,
        grey: string,
        white: string,
    },
    fontSize: {
        title: string,
        body: string,
        sidebarTitle: string,
    },
    fonts: IFont
}

interface IFont {
    [key: string]: string
}

export const defaultTheme: ITheme = {
    colors: {
        lightBlue: "#96B9FD",
        mediumBlue: "#7BA4FC",
        blue: "#5081FB",
        darkBlue: "#051D3B",
        grey: "#666666",
        white: "#F5F5F5"
    },
    fontSize: {
        title: "21px",
        body: "16px",
        sidebarTitle: "12px",
    },
    fonts: {
        inter: "Inter",
        robotoMono: "Roboto Mono",
    }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: ${defaultTheme.colors.darkBlue};
    font-family: ${defaultTheme.fonts["inter"]}, sans-serif;
    font-weight: 400;
    color: ${defaultTheme.colors.grey};
  }
  body html #root {
    height: 100%;
  }
`;