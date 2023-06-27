import { Outlet } from "react-router-dom";
// import "./usersPage.css";

export const AdminLayout = () => {
  return (
    <div className="animate__animated animate__fadeIn p-3 pt-0 bg-pink-300">
      <Outlet />
    </div>
  );
};
