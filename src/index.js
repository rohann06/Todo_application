import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <React.StrictMode>
    <ColorModeScript initialColorMode={'light'} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
