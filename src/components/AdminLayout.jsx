import { Outlet } from "react-router-dom";
// import "./usersPage.css";

export const AdminLayout = () => {
  return (
    <div className="animate__animated animate__fadeIn p-4 pt-0">
      <Outlet />
    </div>
  );
};
