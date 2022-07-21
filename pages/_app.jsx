import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
