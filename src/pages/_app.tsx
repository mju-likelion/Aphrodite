import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@styles/global-styles";
import { theme } from "@styles/theme";
import CustomHead from "src/components/CustomHead";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Notice from "@components/Notice";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const { asPath, pathname } = router;
    if (pathname === "/" && asPath !== "/") {
      router.replace("/");
    }
  }, [router]);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CustomHead />
        <GlobalStyle />
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Notice />
        </AppContainer>
      </ThemeProvider>
      <div id="modal" />
    </RecoilRoot>
  );
}

const AppContainer = styled.main`
  width: 100%;
  max-width: 1024px;
  height: 100%;

  margin: 0 auto;
`;

export default MyApp;
