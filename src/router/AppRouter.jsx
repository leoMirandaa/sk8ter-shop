import { Route, Routes, Navigate } from "react-router-dom";

import { LoginPage } from "../auth/pages";
import { ClothingRoutes } from "../clothing/routes/ClotingRoutes";
import { AdminLoginPage } from "../admin/auth/adminLogin";
import { SignupPage } from "../auth/pages/SignupPage";

// import { Layout } from "../components/Layout";
import { ImagesPage } from "../clothing/pages/ImagesPage";
import { AdminRoutes } from "../admin/routes/AdminRoutes";
import { AuthLayout } from "../components/AuthLayout";
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          path="sign_in"
          element={<LoginPage />}
        />
        <Route
          path="sign_up"
          element={<SignupPage />}
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
        path="adminLogin"
        element={<AdminLoginPage />}
      />

      <Route
        path="/*"
        element={<ClothingRoutes />}
      />
    </Routes>
  );
};
