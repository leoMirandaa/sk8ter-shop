import React, { useContext, useState } from "react";
import PrimeReact from "primereact/api";

import { UserContext } from "../pages/auth/context/UserContext";

import { Menubar } from "primereact/menubar";
import { SplitButton } from "primereact/splitbutton";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
PrimeReact.ripple = true;

export const Navbar = () => {
  const navigate = useNavigate();
  const { globalUser } = useContext(UserContext);
  const [theme, setTheme] = useState("light");

  const changeMyTheme = () => {
    console.log("...");
    const newTheme = theme === "dark" ? "light" : "dark";
    PrimeReact?.changeTheme?.(
      `tailwind-${theme}`,
      `tailwind-${newTheme}`,
      "app-theme",
      () => setTheme(newTheme)
    );
  };
  // const changeMyTheme = () => {
  //   console.log("...");
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   PrimeReact?.changeTheme?.(
  //     `lara-${theme}-teal`,
  //     `lara-${newTheme}-teal`,
  //     "app-theme",
  //     () => setTheme(newTheme)
  //   );
  // };

  const userOptions = [
    // { icon: "pi pi-home", command: () => navigate("/home") },
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
    <div>
      {/* <Button
        text
        className="p-button-primary mr-2"
        onClick={() => changeMyTheme()}
      >
        <span className={`pi pi-${theme === "dark" ? "sun" : "moon"}`}></span>
      </Button> */}
      <Button
        badge={globalUser?.cart?.length}
        className={`p-button-rounded mr-4  ${
          globalUser.name === "admin" ? "hidden" : ""
        }`}
        onClick={() => navigate("/cart")}
      >
        <i className="pi pi-shopping-cart"></i>
      </Button>

      <SplitButton
        label={globalUser?.name}
        icon="pi pi-user "
        className=" p-button-text p-button-oulined"
        model={profileButton}
      ></SplitButton>
    </div>
  ) : (
    <span>
      {/* <Button
        text
        className="p-button-primary mr-2"
        onClick={() => changeMyTheme()}
      >
        <span className={`pi pi-${theme === "dark" ? "sun" : "moon"}`}></span>
      </Button> */}

      <Button
        label="Log in"
        className="p-button-outlined  mr-2"
        onClick={() => navigate("/sign_in")}
      />

      <Button
        label="Sign up"
        className="p-button-secondary  "
        onClick={() => navigate("/sign_up")}
      />
    </span>
  );

  const start = (
    <div>
      <b
        className="text-3xl text-primary mr-4"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/home")}
      >
        Clothing Style
      </b>
    </div>
  );

  return (
    <div className="container">
      {/* // <div className="sticky top-0 z-2"> */}
      <Menubar
        className="font-bold border-0 surface-0"
        model={items}
        start={start}
        end={end}
      />
    </div>
  );
};
