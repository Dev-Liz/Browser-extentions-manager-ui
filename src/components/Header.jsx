import { useState, useEffect } from "react";
import moonIcon from "/assets/images/icon-moon.svg";
import sunIcon from "/assets/images/icon-sun.svg";
import Logo from "./Logo";

export default function Header() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    const root = window.document.body;

    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="header">
      <Logo />
      <button onClick={toggleTheme} className="theme">
        {theme === "light" ? (
          <img src={moonIcon} alt="moon-icon" />
        ) : (
          <img src={sunIcon} alt="moon-icon" />
        )}
      </button>
    </header>
  );
}
