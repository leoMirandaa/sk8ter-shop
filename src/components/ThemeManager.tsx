import { useState } from "react";

import { Button } from "primereact/button";
import PrimeReact from "primereact/api";
import "../styles/themeManager.scss";

export const ThemeManager = () => {
  const [theme, setTheme] = useState("light");

  const changeMyTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    PrimeReact?.changeTheme?.(
      `lara-${theme}-teal`,
      `lara-${newTheme}-teal`,
      "app-theme",
      () => setTheme(newTheme)
    );
  };

  return (
    <div className="themeManagerContainer">
      <Button
        onClick={() => changeMyTheme()}
        icon={theme === "dark" ? "pi pi-sun" : "pi pi-moon"}
        severity="warning"
        className="themeManagerContainer__button"
      />
    </div>
  );
};
