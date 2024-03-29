import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Sidebar } from "primereact/sidebar";
import { categories } from "../../utils/categoriesArr";

import skateLogo from "../../../public/images/sk8er-logo3.svg";
import "../../styles/sidebar.scss";

const SideBar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const sidebarUrls = categories.slice(0, -1).map((url) => ({
    label: url.title,
    command: () => {
      navigate(url.url);
      setIsVisible(false);
    },
  }));

  return (
    <div className="sidebarContainer">
      <Sidebar
        showCloseIcon={false}
        visible={isVisible}
        onHide={() => setIsVisible(false)}
      >
        <div className="sidebarContainer__sections">
          <div>
            <div
              className="logo"
              onClick={() => navigate("/")}
            >
              Sk8er
            </div>
            <Menu model={sidebarUrls} />
          </div>

          <div className="pb-3">
            <div className="px-3">
              <Button
                className="w-full my-2"
                outlined
                label="Sign in"
                onClick={() => navigate("/sign_in")}
              />
              <Button
                className="w-full"
                label="Sign up"
                severity="secondary"
                onClick={() => navigate("/sign_up")}
              />
            </div>
          </div>
        </div>
      </Sidebar>

      <div className="sidebarContainer__rightOptions">
        <Button
          text
          icon="pi pi-bars"
          onClick={() => setIsVisible(true)}
        />
        <img
          width={30}
          src={skateLogo}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        <div>
          <i
            className="pi pi-shopping-cart p-overlay-badge cart__icon"
            onClick={() => navigate("/cart")}
          >
            <Badge value="2"></Badge>
          </i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
