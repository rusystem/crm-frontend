import { PropsWithChildren, createContext, useContext } from "react";

import { AuthStore } from "@shared/store/auth-store/auth-store.ts";

class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

const rootStore = new RootStore();

const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreContextProvider = ({ children }: PropsWithChildren) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
);

export const useStore = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error("useStore must be used within a RootStoreProvider");
  }

  return context;
};
