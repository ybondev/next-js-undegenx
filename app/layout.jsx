"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// export const metadata = {
//   title: "Un-DegenX",
// };

const layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>UN-DEGENX</title>
      </head>
      <body>
        <ThirdwebProvider
          activeChain="goerli"
          clientId="e887491a6bf2e42ba4a0436a450b1b93"
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
};

export default layout;
