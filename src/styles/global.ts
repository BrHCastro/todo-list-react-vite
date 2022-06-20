import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #8284FA;
    --purple-dark: #5E60CE;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;

    --danger: #E25858;
    --warning: #c96928;

    --background: #1A1A1A;
    --text: #F2F2F2;
    --alternativeText: #D9D9D9;
    --placeholderText: #808080;

    --backgroundInput: #262626;
    --border: #333333;
    --shape: #0D0D0D;
    --transparent-shape: #0d0d0d8c;
  }

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }


  html {
    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;

  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: var(--text);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .wrapper {
    padding-inline: 1.25rem;
  }

  .toast {
    &.Toastify__toast--info, .Toastify__progress-bar--info {
      color: var(--blue);
      background-color: var(--blue);
    }

    &.Toastify__toast--success, .Toastify__progress-bar--success {
      color: var(--purple);
      background-color: var(--purple);
    }

    &.Toastify__toast--warning, .Toastify__progress-bar--warning {
      color: var(--warning);
      background-color: var(--warning);
    }

    &.Toastify__toast--error, .Toastify__progress-bar--error {
      color: var(--danger);
      background-color: var(--danger);
    }
  }
`;
