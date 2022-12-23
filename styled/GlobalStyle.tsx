import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 24px;
    color: ${({ theme }) => theme.neutral_dark__neg_60};
    background-color: ${({ theme }) => theme.grey};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
