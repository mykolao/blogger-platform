import type { AppProps } from "next/app";

import StyledProvider from "styled/StyledProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledProvider>
      <Component {...pageProps} />
    </StyledProvider>
  );
}
