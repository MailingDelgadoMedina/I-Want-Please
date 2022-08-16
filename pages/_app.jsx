import "../styles/globals.css";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
