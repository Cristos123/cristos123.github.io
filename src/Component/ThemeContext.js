import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

/* export const Theme = () => {
  let storedColour = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "theme-default";
  const [theme, setTheme] = useState(storedColour);
  return theme;
};

export const defaultContext = () => {
  const defaultContext = {
    theme,
    setTheme,
  };
  return defaultContext;
}; */
