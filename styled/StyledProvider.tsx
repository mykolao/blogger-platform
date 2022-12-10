import { Inter } from "@next/font/google";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "styled/GlobalStyle";
import { theme } from "styled/theme";
import { ChildrenProp } from "types";

const inter = Inter({ subsets: ["latin"] });

const StyledProvider = ({ children }: ChildrenProp) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={inter.className}>
        <GlobalStyle />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default StyledProvider;
