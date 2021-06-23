import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Profile() {
  const { theme, setTheme } = useContext(ThemeContext);

  /* const changeTheme = (colourLabel) => {
    setTheme(colourLabel);
    localStorage.setItem("theme", colourLabel);
    console.log("click color", colourLabel, "setThemeColor", setTheme);
    console.log("theme", theme);
  }; */

  const changeTheme = (colorlabel) => {
    setTheme(colorlabel);
    localStorage.setItem("theme", colorlabel);
    if (
      localStorage.theme === "dark" ||
      localStorage.theme === "blue" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      console.log("colorLabel", localStorage.getItem("theme"));
      document.documentElement.classList.remove("green");
      document.documentElement.classList.remove("purple");
      document.documentElement.classList.add("blue");
    } else if (localStorage.theme === "green") {
      console.log("colorLabel", localStorage.getItem("theme"));
      document.documentElement.classList.remove("blue");
      document.documentElement.classList.remove("purple");
      document.documentElement.classList.add("green");
    } else if (localStorage.theme === "purple") {
      console.log("colorLabel", localStorage.getItem("theme"));
      document.documentElement.classList.remove("blue");
      document.documentElement.classList.remove("green");
      document.documentElement.classList.add("purple");
    } else {
      console.log("colorLabel", localStorage.getItem("theme"));
      document.documentElement.classList.remove("green");
      document.documentElement.classList.remove("blue");
      document.documentElement.classList.remove("purple");
    }
  };
  return (
    <div>
      <img
        className={`h-52 object-cover border-2 block m-auto border-${theme}-borderColor w-52`}
        src="/tunde.jpg"
        alt="Tunde profile photo"
      />
      <h5 className="text-center ">Personalize Theme</h5>
      <div className="flex justify-center">
        <button
          onClick={() => changeTheme("defaultTheme")}
          value="theme-default"
          className="bg-white w-8 h-8 rounded-full hover:border hover:bg-gray-900  cursor-auto shadow-md border-2  border-gray-900 m-1"></button>
        <button
          onClick={() => changeTheme("blue")}
          value="theme-blue"
          className={`bg-blue-500 w-8 h-8  rounded-full hover:bg-yellow-700  cursor-auto shadow-md border-2  border-${theme}-borderColor m-1`}></button>
        <button
          onClick={() => changeTheme("green")}
          value="theme-green"
          className={`bg-green-700 w-8  rounded-full h-8 hover:bg-gray-700 cursor-auto shadow-md border-2 border-gray-900 m-1
       `}></button>
        <button
          onClick={() => changeTheme("purple")}
          value="theme-purple"
          className="bg-purple-700 h-8 w-8 rounded-full hover:bg-gray-700  cursor-auto shadow-md border-2  border-gray-900 m-1"></button>
      </div>
      <p className="text-center italic text-xs">
        Theme options will be saved for <br />
        your next visit
      </p>
    </div>
  );
}

export default Profile;
