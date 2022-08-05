import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
