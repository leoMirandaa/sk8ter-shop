import { Outlet } from "react-router-dom";
// import "./usersPage.css";

export const AdminLayout = () => {
  return (
    <div className="p-4 pt-0">
      <Outlet />
    </div>
  );
};
