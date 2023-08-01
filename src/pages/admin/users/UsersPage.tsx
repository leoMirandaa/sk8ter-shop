import { Outlet } from "react-router-dom";
import "./usersPage.css";

export const UsersPage = () => {
  return (
    <div className="p-3 pt-0">
      <Outlet />
    </div>
  );
};
