import { Navigate, Route, Routes } from "react-router-dom";

import {
  CreateUserPage,
  DetailsUserPage,
  UpdateUserPage,
} from "../pages/admin/users";

import { UsersPage } from "../pages/admin/users/UsersPage";
import {
  CreateProductPage,
  DetailsProductPage,
  UpdateProductPage,
} from "../pages/admin/products";

import { AddNewCoupon } from "../pages/admin/coupons/addNewCoupon";
import { UpdateCoupon } from "../pages/admin/coupons/updateCoupon";
import { Coupons } from "../pages/admin/coupons";
import { AdminPage } from "../pages/admin/index";
import { AdminLayout } from "../components/AdminLayout";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<AdminLayout />}
        >
          <Route
            index
            element={<AdminPage />}
          />

          <Route path="users">
            <Route
              index
              element={<DetailsUserPage />}
            />
            <Route
              path="create"
              element={<CreateUserPage />}
            />
            <Route
              path="update/:id"
              element={<UpdateUserPage />}
            />
          </Route>

          <Route path="coupons">
            <Route
              index
              element={<Coupons />}
            />
            <Route
              path="create"
              element={<AddNewCoupon />}
            />
            <Route
              path="update/:id"
              element={<UpdateCoupon />}
            />
          </Route>

          <Route path="products">
            <Route
              index
              element={<DetailsProductPage />}
            />
            <Route
              path="create"
              element={<CreateProductPage />}
            />
            <Route
              path="update/:id"
              element={<UpdateProductPage />}
            />
          </Route>
        </Route>

        <Route
          path="/*"
          element={<Navigate to="/admin" />}
        />
      </Routes>
    </>
  );
};
