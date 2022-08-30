import { Navigate, Route, Routes } from "react-router-dom"
import { AdminRoutes } from "../../admin/routes/AdminRoutes"
import { Navbarr } from "../../ui/components/Navbarr"
import { ImagesPage } from "../pages/ImagesPage"
import { TestingComponents, CouponsPage, HomePage, KidsPage, MenPage, WomenPage, QuizzPage } from "../pages"

export const ClothingRoutes = () => {

  return (
    // <div className="animate__animated animate__fadeIn usersContainer" style={{minHeight: '100vh'}}>
    <div className="animate__animated animate__fadeIn">
      <Navbarr/>

      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="quizz" element={<QuizzPage />} />
        <Route path="women" element={<WomenPage/>} />
        <Route path="men" element={<MenPage/> } />
        <Route path="kids" element={<KidsPage/>} />
        <Route path="coupons" element={<CouponsPage/>} />
        <Route path="images" element={<ImagesPage />} />
        <Route path="testing" element={<TestingComponents />} />

        <Route path="/*" element={< Navigate to="home"/>} />

        <Route path="/admin/*" element={<AdminRoutes/>} />
      </Routes>
    </div>
  )

}
