import "../components/navbar/index.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import Context from "@/context/context";
import { useEffect } from "react";
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  const jwtToken = Cookies.get("jwtToken");
  // console.log("token in _app.tsx file", jwtToken);

  return (
    <Context>
      {jwtToken && <Navbar />}
      <Component {...pageProps} />
    </Context>
  );
}
