import { observer } from "mobx-react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "styled-components";

import { COLORS, asyncData } from "@shared/lib";
import { useStore } from "@shared/store";
import { Loader } from "@shared/ui/loader/loader.tsx";

import { MainRoutes } from "./_routes";

export const App = observer(() => {
  const { authStore } = useStore();

  useEffect(() => {
    authStore.fetchUserInfo();
  }, []);

  if (asyncData.isLoading(authStore.user)) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={COLORS}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
});
