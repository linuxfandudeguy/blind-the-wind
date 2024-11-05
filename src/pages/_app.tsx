// src/pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
