import React from "react";

function Intro() {
  return (
    <div>
      <div className="bg-yellow-200 w-72 md:w-96 h-44 md:h-48 md:pl-8 md:pt-8 pl-3 pt-3">
        <div className="w-72 md:w-96 border-2 border-blue-400 bg-yellow-50 relative p-2 md:p-4">
          <div className="w-2 h-2 rounded-full border border-blue-400 bg-white absolute -top-1 -left-1"></div>
          <div className="w-2 h-2 rounded-full border border-blue-400 bg-white absolute -top-1 -right-1">
            {" "}
          </div>
          <h1 className="text-3xl">What I do</h1> <br></br>
          <p className="text-base md:text-2xl ">
            I'm a developer, I have experience in HTML, CSS, JavaSpcrit and
            backend service like Nodejs PHP MongoDB and also the frame work
          </p>
          <div className="w-2 h-2 rounded-full border border-blue-400 bg-white absolute -bottom-1 -right-1"></div>
          <div className="w-2 h-2 rounded-full border border-blue-400 bg-white absolute -bottom-1 -left-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
