import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRoutes } from "./AdminRoutes";
import { ShopLayout } from "../components/layouts";

import { HomePage, Cart } from "../pages";
import {
  PennyBoardPage,
  SkateBoardPage,
  LongBoardPage,
  SalePage,
  ProductPage,
} from "../pages/product";
import { CollectionsRoutes } from "./CollectionsRoutes";

export const PagesRoutes = () => {
  return (
    <div className="">
      <ShopLayout>
        <Routes>
          <Route
            path="home"
            element={<HomePage />}
          />

          {/* <Route path="pennyboards">
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
          </Route> */}

          <Route
            path="sale"
            element={<SalePage />}
          />

          <Route
            path="cart"
            element={<Cart />}
          />

          <Route
            path="/collections/*"
            element={<CollectionsRoutes />}
          />
          <Route
            path="/admin/*"
            element={<AdminRoutes />}
          />

          <Route
            path="/*"
            element={<Navigate to="home" />}
          />
        </Routes>
      </ShopLayout>
    </div>
  );
};
