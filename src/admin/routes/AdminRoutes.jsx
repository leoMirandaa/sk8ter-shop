import { Navigate, Route, Routes } from "react-router-dom"
import { CouponsPage, ProductsPage, UsersPage, AdminPage } from "../pages/"

export const AdminRoutes = () => {

    return (
      <>
        {/* <Navbarr/> */}

        <Routes>

          {/* <Route path="admin" element={<Admin/>} /> */}
          <Route path="/" element={<AdminPage/>} />

          <Route path="users" element={ <UsersPage /> } />
          <Route path="products" element={<ProductsPage />} />
          <Route path="coupons" element={<CouponsPage />} />

          <Route path="/*" element={< Navigate to="/admin/"/>} />
        </Routes>
      </>
    )

  }
