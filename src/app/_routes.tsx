import { Route, Routes } from "react-router";

import { MaterialsPage } from "@pages/materials";
import { SuppliersPage } from "@pages/suppliers";
import { WarehousePage } from "@pages/warehouse";
import { MAIN_ROUTS } from "@shared/constants";

export const MainRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path={MAIN_ROUTS.warehouse} element={<WarehousePage />} />
      <Route path={MAIN_ROUTS.suppliers} element={<SuppliersPage />} />
      <Route path={MAIN_ROUTS.materials} element={<MaterialsPage />} />
    </Route>
  </Routes>
);
