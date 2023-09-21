import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { urls } from "../../utils/urls";
import "../../styles/sidebar.scss";

const SideBar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const sidebarUrls = urls.map((url) => ({
    label: url.label,
    command: () => {
      navigate(url.url);
    },
  }));

  return (
    <div className="sidebarContainer">
      <Sidebar
        showCloseIcon={false}
        visible={isVisible}
        onHide={() => setIsVisible(false)}
      >
        <div
          className="logo mb-2"
          onClick={() => navigate("/")}
        >
          Sk8er
        </div>
        <Menu model={sidebarUrls} />
      </Sidebar>

      <div className="sidebarContainer__rightOptions">
        <Button
          text
          icon="pi pi-bars"
          onClick={() => setIsVisible(true)}
        />

        <span>
          <span>
            <i
              className="pi pi-shopping-cart p-overlay-badge mr-4"
              style={{ fontSize: "1.5rem" }}
              onClick={() => navigate("/cart")}
            >
              <Badge value="2"></Badge>
            </i>
          </span>
          <Button
            label="Sign in"
            className="p-button-outlined mr-2"
            onClick={() => navigate("/sign_in")}
          />
          <Button
            label="Sign up"
            className="p-button-secondary "
            onClick={() => navigate("/sign_up")}
          />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
