import React, { useState } from "react";
import { Close, Menu } from "./svg";

export const MenuSwitcher = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const eventListener = () => {
    let menuBtn = document.getElementById("menu-icon");
    if (menuOpen === false) {
      setMenuOpen(true);
      if (menuOpen !== false) {
        menuBtn.classList.remove("hidden");
        menuBtn.classList.add("block");
        console.log("true");
        menuBtn.innerHTML = <Close />;
        console.log(menuBtn.innerHTML);
      }
    } else {
      setMenuOpen(false);
      if (menuOpen === false) {
        menuBtn.classList.remove("block");
        menuBtn.classList.add("hidden");
        console.log("false");
        menuBtn.innerHTML = <Menu />;
        console.log(menuBtn.innerHTML);
      }
    }
  };
  return <></>;
};
