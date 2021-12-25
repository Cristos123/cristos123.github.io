import {  useState } from "react";
import { Route, Switch } from "react-router";
import About from "./About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Intro from "./Component/Intro";
import Profile from "./Component/Profile";
import { ThemeContext } from "./Component/ThemeContext";

function App() {
  const storedColour = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "theme-default";
  const [theme, setTheme] = useState(storedColour);

  const defaultContext = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={defaultContext}>
      <div className={`container max-w-full h-screen w-full`}>
        <div className="grid">
          <h1
            className={`grid text-base border-${theme}-borderColor content-center text-center md:text-5xl font-bold uppercase  bg-${theme}-mainColor h-80`}
          >
            Hi I'm Babatunde Osunkile
          </h1>

          <Header />
          {/* <div className="flex bg-blue-500 h-12 px-2 items-center">
          {/* <span className="self-center">header</span> */}
          {/* <div className="md:mr-auto">logo</div>
          <div className="ml-auto flex md:px-5">
          <div className="mr-auto pr-2 md:pr-0">menu</div>
          <div className="md:hidden mr-auto">icon</div>
          <div className="md:w-8"></div>
          <div className="hidden md:grid md:ml-auto">search</div>
          </div>
        </div>  */}
          <div
            className={`grid md:grid-flow-col md:grid-cols-2 bg-${theme}-mainColor border border-${theme}-borderColor h-full`}
          >
            <div className={`grid   md:pt-12 pb-12 text-black`}>
              <Profile />
            </div>
            <div className=" grid justify-center sm:justify-center     pt-12 pb-16 text-black">
              <Intro />
            </div>
          </div>
          <About />

          <div className=" bg-gray-400">
            <Footer />{" "}
            <Switch>
              <Route path="/contact-us" exact >
                <Contact />
              </Route>
            </Switch>
            <div className="bg-gray-800 text-center font-bold uppercase text-yellow-300 h-6">
              Cristos @2021 All right reserved
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
