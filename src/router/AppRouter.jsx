import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages"
import { ClothingRoutes } from "../clothing/routes/ClotingRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/*" element={<ClothingRoutes/>}/>

      </Routes>
    </>
  )
}
