import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "styled/GlobalStyle";
import { theme } from "styled/theme";
import { ChildrenProp } from "types";

const StyledProvider = ({ children }: ChildrenProp) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
