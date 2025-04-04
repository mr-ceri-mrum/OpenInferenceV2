import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-blue: #00c2ff;
    --primary-purple: #7b2ff7;
    --primary-pink: #ff2d87;
    --dark-blue: #151b42;
    --light-gray: #f5f7fa;
    --white: #ffffff;
    --transition: all 0.3s ease;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  body {
    background-color: var(--white);
    color: var(--dark-blue);
    line-height: 1.6;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;
