import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRoutes } from "../admin/routes/AdminRoutes";
import { Layout } from "../components/Layout";

import { HomePage, CouponsPage, QuizzPage, Cart } from "../pages";
import { KidsPage, MenPage, WomenPage } from "../pages/category";

export const ClothingRoutes = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Layout>
        <Routes>
          <Route
            path="home"
            element={<HomePage />}
          />
          <Route
            path="quizz"
            element={<QuizzPage />}
          />
          <Route
            path="women"
            element={<WomenPage />}
          />
          <Route
            path="men"
            element={<MenPage />}
          />
          <Route
            path="kids"
            element={<KidsPage />}
          />
          <Route
            path="coupons"
            element={<CouponsPage />}
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
