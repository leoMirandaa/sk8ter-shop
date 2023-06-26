import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import {
  CouponsPage,
  CreateCouponPage,
  DetailsCouponPage,
  UpdateCouponPage,
} from "../coupons";
import {
  CreateUserPage,
  DetailsUserPage,
  UpdateUserPage,
  UsersPage,
} from "../users";
import {
  CreateProductPage,
  DetailsProductPage,
  ProductsPage,
  UpdateProductPage,
} from "../products";
import { AdminPage } from "../pages";
import { useEffect, useState } from "react";

export const AdminRoutes = () => {
  const navigate = useNavigate();

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
          element={<CouponsPage />}
        >
          <Route
            index
            element={<DetailsCouponPage />}
          />
          <Route
            path="create"
            element={<CreateCouponPage />}
          />
          <Route
            path="update/:id"
            element={<UpdateCouponPage />}
          />
        </Route>

        <Route
          path="products"
          element={<ProductsPage />}
        >
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

        <Route
          path="/*"
          element={<Navigate to="/admin" />}
        />
      </Routes>
    </>
  );
};
