import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="admin__layout ">
      {/* // <div className="admin__layout surface-ground h-screen"> */}
      <Outlet />
    </div>
  );
};
