import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
