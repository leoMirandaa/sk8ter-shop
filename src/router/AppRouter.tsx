import { Route, Routes, Navigate } from "react-router-dom";

import { Login } from "../pages/auth";
import { ProductRoutes } from "./ProductRoutes";
import { Register } from "../pages/auth";

// import { Layout } from "../components/Layout";
import { AuthLayout } from "../components/AuthLayout";
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          path="sign_in"
          element={<Login />}
        />
        <Route
          path="sign_up"
          element={<Register />}
        />
        <Route
          path="/users/*"
          element={
            <Navigate
              to="signin"
              replace
            />
          }
        />
      </Route>

      <Route
        path="/*"
        element={<ProductRoutes />}
      />
    </Routes>
  );
};
