import { Navigate, Route, Routes } from "react-router-dom"
import { Admin } from "../../admin/pages/admin"
import { Navbarr } from "../../ui/components/Navbarr"
import { CouponsPage } from "../pages/CouponsPage"
import { KidsPage } from "../pages/KidsPage"
import { MenPage } from "../pages/MenPage"
import { WomenPage } from "../pages/WomenPage"


export const ClothingRoutes = () => {

  return (
    <>
      <Navbarr/>

      <Routes>
        <Route path="women" element={<WomenPage/>} />
        <Route path="men" element={<MenPage/> } />
        <Route path="kids" element={<KidsPage/>} />
        <Route path="coupons" element={<CouponsPage/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="/*" element={< Navigate to="/admin"/>} />
      </Routes>
    </>
  )

}
