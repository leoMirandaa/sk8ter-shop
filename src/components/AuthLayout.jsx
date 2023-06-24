import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-column justify-content-center align-items-center p-4">
      <Outlet />
    </div>
  );
};
