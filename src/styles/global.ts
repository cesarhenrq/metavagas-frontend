import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --purple: #5D5FEF;
    --purple-light: #B2A1D9;
    --purple-dark: #1A1033;
    --purple-dark-secondary: #6950A1;
    --white: #FFFFFF;
    --gray: #A6A8AB;
    --dark-grey: #4A4A68;
    --gray-medium: #8C8CA1;
    --gray-light: #D1D1D1;
    --yellow: #FBB04D;
    --font-size-normal: 1rem;
    --font-size-small: 0.875rem;
    --font-size-xsmall: 0.75rem;
    --font-size-medium: 1.125rem;
    --font-size-xmedium: 1.5rem;
    --font-size-large: 2rem;
    --font-size-xlarge: 3rem;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Poppins', sans-serif;
  }

    html {
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`;
