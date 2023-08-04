import { Outlet } from "react-router-dom";
import "../../styles/layouts/adminLayout.scss";

export const AdminLayout = () => {
  return (
    <div className="admin__layout">
      {/* // <div className="admin__layout surface-ground h-screen"> */}
      <Outlet />
    </div>
  );
};
