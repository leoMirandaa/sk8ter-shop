import { Navigate, Route, Routes } from "react-router-dom";

import {
  CreateUserPage,
  DetailsUserPage,
  UpdateUserPage,
} from "../pages/users";

import { UsersPage } from "../pages/users/usersPage";

import {
  CreateProductPage,
  DetailsProductPage,
  UpdateProductPage,
} from "../pages/admin/products";

import { AddNewCoupon } from "../pages/admin/coupons/addNewCoupon";
import { UpdateCoupon } from "../pages/admin/coupons/updateCoupon";
import { Coupons } from "../pages/admin/coupons";
import { AdminPage } from "../pages/admin/index";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<AdminPage />}
        />

        <Route
          path="users"
          element={<UsersPage />}
        >
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

        <Route
          path="coupons"
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

        <Route
          path="products"
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

        <Route
          path="/*"
          element={<Navigate to="/admin" />}
        />
      </Routes>
    </>
  );
};
