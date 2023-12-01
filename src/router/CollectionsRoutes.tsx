import { Navigate, Route, Routes } from "react-router-dom";

import {
  PennyBoardPage,
  SkateBoardPage,
  LongBoardPage,
  ProductPage,
} from "../pages/product";

export const CollectionsRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="pennyboards">
          <Route
            index
            element={<PennyBoardPage />}
          />
          <Route
            path="/pennyboards/:id"
            element={<ProductPage />}
          />
        </Route>

        <Route path="skateboards">
          <Route
            index
            element={<SkateBoardPage />}
          />

          <Route
            path="/skateboards/:id"
            element={<ProductPage />}
          />
        </Route>

        <Route path="longboards">
          <Route
            index
            element={<LongBoardPage />}
          />

          <Route
            path="/longboards/:id"
            element={<ProductPage />}
          />
        </Route>

        <Route
          path="/*"
          element={<Navigate to="pennyboards" />}
        />
      </Routes>
    </>
  );
};
