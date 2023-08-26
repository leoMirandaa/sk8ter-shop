import { Navigate, Route, Routes } from "react-router-dom";

import { CreateUser, UserList, UpdateUser } from "../pages/admin/users";

import {
  CreateProductPage,
  ProductList,
  UpdateProductPage,
} from "../pages/admin/products";

import { CouponList, CreateCoupon, UpdateCoupon } from "../pages/admin/coupons";
import {
  CategoryList,
  CreateCategory,
  UpdateCategory,
} from "../pages/admin/categories";
import { AdminPage } from "../pages/admin/index";
import { AdminLayout } from "../components/layouts";

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

          <Route path="categories">
            <Route
              index
              element={<CategoryList />}
            />
            <Route
              path="create"
              element={<CreateCategory />}
            />
            <Route
              path="update/:id"
              element={<UpdateCategory />}
            />
          </Route>

          <Route path="users">
            <Route
              index
              element={<UserList />}
            />
            <Route
              path="create"
              element={<CreateUser />}
            />
            <Route
              path="update/:id"
              element={<UpdateUser />}
            />
          </Route>

          <Route path="coupons">
            <Route
              index
              element={<CouponList />}
            />
            <Route
              path="create"
              element={<CreateCoupon />}
            />
            <Route
              path="update/:id"
              element={<UpdateCoupon />}
            />
          </Route>

          <Route path="products">
            <Route
              index
              element={<ProductList />}
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
