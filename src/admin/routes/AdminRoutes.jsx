import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPage, CouponsPage, DetailsUserPage, CreateUserPage, ProductsPage, UpdateUserPage, UsersPage } from "../pages/"

export const AdminRoutes = () => {

    return (
      <>
        <Routes>
          {/* <Route path="admin" element={<Admin/>} /> */}
          <Route path="/" element={<AdminPage/>} />

          <Route path="users" element={ <UsersPage /> } >
            <Route index element={<DetailsUserPage />} />
            <Route path="create" element={<CreateUserPage />} />
            <Route path="update/:id" element={<UpdateUserPage />} />
          </Route>

          <Route path="products" element={<ProductsPage />} />

          <Route path="coupons" element={<CouponsPage />} />

          <Route path="/*" element={< Navigate to="/admin"/>} />
        </Routes>
      </>
    )

  }
