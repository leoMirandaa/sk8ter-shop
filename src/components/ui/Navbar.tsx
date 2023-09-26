import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Badge } from "primereact/badge";

import { ThemeManager } from "../ThemeManager";
import { urls } from "../../utils/urls";
import SideBar from "../../components/ui/Sidebar";
import "../../styles/navbar.scss";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <ThemeManager />

      <div className="navbarContainer">
        <SideBar />

        <div className="navbarContainer__fullNavbar">
          <div
            className="logo"
            onClick={() => navigate("/")}
          >
            Sk8er
          </div>

          <nav>
            <ul className="nav__links">
              {urls.map(({ url, label }) => (
                <li key={url}>
                  <div
                    className={
                      location?.pathname.includes(url) ? "selectedPage" : null
                    }
                    onClick={() => navigate(url)}
                  >
                    {label}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <span>
            <span>
              <i
                className="pi pi-shopping-cart p-overlay-badge"
                style={{
                  fontSize: "1.5rem",
                  marginRight: "1.5rem",
                  color: "var(--text-color)",
                }}
                onClick={() => navigate("/cart")}
              >
                <Badge value="2"></Badge>
              </i>
            </span>

            <Button
              label="Sign in"
              outlined
              style={{ marginRight: ".5rem" }}
              onClick={() => navigate("/sign_in")}
            />

            <Button
              label="Sign up"
              severity="secondary"
              className="mr-2"
              onClick={() => navigate("/sign_up")}
            />
          </span>
        </div>
      </div>
    </>
  );
};
