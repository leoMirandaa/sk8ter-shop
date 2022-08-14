
import { Outlet } from "react-router-dom";
import './usersPage.css'

export const UsersPage = () => {

  return (
    <div
      className="usersContainer animate__animated animate__fadeIn">

      {/* <div style={{ padding: '2rem'}}>From USER PAGE  CONTAINER</div> */}
      <Outlet />

    </div>
  )
}
