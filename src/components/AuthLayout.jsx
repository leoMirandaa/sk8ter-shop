import { Outlet } from "react-router-dom";
import "../styles/authLayout.scss";

export const AuthLayout = () => {
  return (
    <div className="auth">
      <div className="container auth__container animate__animated animate__fadeInLeft">
        <section className="auth__form">
          <Outlet />
        </section>
        <section className="auth__imgSection" />
      </div>
    </div>
  );
};
