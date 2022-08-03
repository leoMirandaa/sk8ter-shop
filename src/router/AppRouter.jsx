import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages"
import { AdminRoutes } from "../admin/routes/AdminRoutes"
import { ClothingRoutes } from "../clothing/routes/ClotingRoutes"
import { Admin } from "../admin/pages/admin"
import { AdminLoginPage } from "../admin/auth/adminLogin"
import { SignupPage } from "../auth/pages/SignupPage"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="sigup" element={<SignupPage />} />
        <Route path="adminLogin" element={<AdminLoginPage/>}/>

        <Route path="/*" element={<ClothingRoutes/>}/>

      </Routes>
    </>
  )
}
