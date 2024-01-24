import React, { useState, useEffect } from "react";
import "./darkMode.styles.css";

const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease";

    if (isDarkMode) {
      document.body.style.backgroundColor = "#f0f0f0";
      document.body.style.color = "#333";
    } else {
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "#ffffff";
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`dark-mode-switcher ${isDarkMode ? "on" : "off"}`}
      onClick={toggleDarkMode}
    >
      <div className="slider"></div>
    </div>
  );
};

export default DarkModeSwitcher;
