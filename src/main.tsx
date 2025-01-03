import { configure } from "mobx";
import { createRoot } from "react-dom/client";

import { GlobalStyle } from "@shared/lib";
import { RootStoreContextProvider } from "@shared/store";

import { App } from "./app";

configure({
  enforceActions: "never",
  useProxies: "never",
});

createRoot(document.getElementById("root")!).render(
  <RootStoreContextProvider>
    <GlobalStyle />
    <App />
  </RootStoreContextProvider>,
);
