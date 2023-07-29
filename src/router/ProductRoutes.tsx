import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRoutes } from "./AdminRoutes";
import { Layout } from "../components/Layout";

import { HomePage, Cart } from "../pages";
import {
  PennyBoardPage,
  SkateBoardPage,
  LongBoardPage,
  SalePage,
} from "../pages/product";

export const ProductRoutes = () => {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route
            path="home"
            element={<HomePage />}
          />

          <Route
            path="pennyboards"
            element={<PennyBoardPage />}
          />

          <Route
            path="skateboards"
            element={<SkateBoardPage />}
          />
          <Route
            path="longboards"
            element={<LongBoardPage />}
          />

          <Route
            path="sale"
            element={<SalePage />}
          />

          <Route
            path="cart"
            element={<Cart />}
          />

          <Route
            path="/*"
            element={<Navigate to="home" />}
          />

          <Route
            path="/admin/*"
            element={<AdminRoutes />}
          />
        </Routes>
      </Layout>
    </div>
  );
};
