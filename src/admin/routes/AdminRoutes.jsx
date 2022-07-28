import { Navigate, Route, Routes } from "react-router-dom"
import { Admin } from "../pages/admin"

export const AdminRoutes = () => {

    return (
      <>
        <Navbarr/>
  
        <Routes>
          
          <Route path="admin" element={<Admin/>} />
          
          <Route path="/*" element={< Navigate to="/admin"/>} />
        </Routes>
      </>
    )
  
  }
