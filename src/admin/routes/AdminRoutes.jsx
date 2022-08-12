import { Navigate, Route, Routes } from "react-router-dom"
import { Admin } from "../pages/admin"
import { Coupons, Products, Users } from "../pages/"

export const AdminRoutes = () => {

    return (
      <>
        {/* <Navbarr/> */}

        <Routes>

          {/* <Route path="admin" element={<Admin/>} /> */}
          <Route path="/" element={<Admin/>} />

          <Route path="users" element={ <Users /> } />
          <Route path="products" element={<Products />} />
          <Route path="coupons" element={<Coupons />} />

          <Route path="/*" element={< Navigate to="/admin/"/>} />
        </Routes>
      </>
    )

  }
