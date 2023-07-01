import React, { useContext, useState } from "react";
import PrimeReact from "primereact/api";

import { Menubar } from "primereact/menubar";
import { SplitButton } from "primereact/splitbutton";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

import { UserContext } from "../pages/auth/context/UserContext";
import logo from "../../public/images/clothing-logo.svg";
import "../styles/navbar.scss";

export const Navbar = () => {
  const navigate = useNavigate();
  const { globalUser } = useContext(UserContext);
  const [theme, setTheme] = useState("light");

  const changeMyTheme = () => {
    console.log("...");
    const newTheme = theme === "dark" ? "light" : "dark";
    PrimeReact?.changeTheme?.(
      `lara-${theme}-teal`,
      `lara-${newTheme}-teal`,
      "app-theme",
      () => setTheme(newTheme)
    );
  };

  const userOptions = [
    { label: "Women", command: () => navigate("/women") },
    { label: "Men", command: () => navigate("/men") },
    { label: "Kids", command: () => navigate("/kids") },
    { label: "Sale", command: () => navigate("/sale") },
  ];

  const adminOptions = [
    ...userOptions,
    { label: "Admin", command: () => navigate("/admin") },
  ];
  const items =
    globalUser.name === "admin" || "leo" ? adminOptions : userOptions;
  const profileButton = [
    {
      label: "Settings",
      icon: "pi pi-cog",
      command: () => {
        navigate("/settings");
      },
    },
    {
      label: "LogOut",
      icon: "pi pi-power-off",
      command: () => {
        localStorage.clear();
        location.reload();
        navigate("/home");
      },
    },
  ];

  const end = globalUser.name ? (
    <>
      <Button
        text
        className="mr-2"
        onClick={() => changeMyTheme()}
      >
        <span className={`pi pi-${theme === "dark" ? "sun" : "moon"}`}></span>
      </Button>

      <Button
        badge={globalUser?.cart?.length}
        className={`mr-2 ${globalUser.name === "admin" ? "hidden" : ""}`}
        onClick={() => navigate("/cart")}
      >
        <i className="pi pi-shopping-cart"></i>
      </Button>

      <SplitButton
        text
        label={globalUser?.name}
        icon="pi pi-user "
        model={profileButton}
      ></SplitButton>
    </>
  ) : (
    <span>
      <Button
        text
        className="p-button-primary mr-2"
        onClick={() => changeMyTheme()}
      >
        <span className={`pi pi-${theme === "dark" ? "sun" : "moon"}`}></span>
      </Button>

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
  );

  const start = (
    <span
      className="textLogo"
      onClick={() => navigate("/home")}
    >
      {/* <img
        src={logo}
        width={30}
        height={30}
      /> */}
      Cool Style
    </span>
  );

  return (
    <div className="">
      {/* <div className="container sticky top-0 z-2"> */}
      <Menubar
        className="navbar px-0"
        model={items}
        start={start}
        end={end}
      />
    </div>
  );
};
