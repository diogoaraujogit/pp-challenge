import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css'
// import 'react-perfect-scrollbar/dist/css/styles.css';


// Reset CSS básico
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  
  html {
    /*font-size: 62.5%; */ /* To easily handle px -> rem conversion */ 
    font-size: ${props => props.rate}%; /* Other way to make desktop responsive */
  }
  body {
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #FFFFFF;
  }
  * {
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  .input {
    width: 100%;
  }

    /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;