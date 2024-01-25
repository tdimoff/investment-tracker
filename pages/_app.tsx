import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/src/store";
import Layout from "@/src/components/Layout";
import CustomThemeProvider from "@/src/components/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </Provider>
  );
}
