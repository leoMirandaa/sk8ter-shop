import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages"
import { ClothingRoutes } from "../clothing/routes/ClotingRoutes"
import { AdminLoginPage } from "../admin/auth/adminLogin"
import { SignupPage } from "../auth/pages/SignupPage"
import { useState } from "react"


export const AppRouter = () => {

  const userName = useState(JSON.parse(localStorage.getItem('User')))

  if (userName == "") {
    localStorage.setItem('User', JSON.stringify("") );
  }
  else {
    // const [{ name }, setUserInLocalStorage] = useState(JSON.parse(localStorage.getItem('User')))
  }
  // const { myUser } = useContext(UserContext)
  // console.log('***--- ',myUser)

  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="sigup" element={<SignupPage />} />
        {/* <Route path="adminLogin" element={<AdminLoginPage/>}/> */}

        <Route path="/*" element={<ClothingRoutes/>}/>

      </Routes>
    </>
  )
}
