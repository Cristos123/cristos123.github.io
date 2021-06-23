import React from "react";

function About() {
  return (
    <div>
      <div className="grid gap-28 bg-gray-500">
        <div className="grid md:grid-flow-col md:grid-cols-2 mt-2">
          <div className="mb-3   text-white">
            <div>
              <h4 className="text-lg text-center font-bold uppercase">
                More about me
              </h4>{" "}
              <br></br>
              <p className="text-center text-md">
                I build new Projects just to tickle my brain and love teaching
                others how they are made
              </p>
              <br></br>{" "}
              <p className="text-center text-md pb-3">
                While i keep busy building new projects, I still take Interviews
                in search of a great team & projects that interest me
              </p>
            </div>
            <hr></hr>

            <h4 className="text-lg text-center font-bold mt-4">
              TOP EXPERTISE
            </h4>
            <p className="text-center text-md pb-3">
              Fullstack developer with primary focus on React Nodejs PHP{" "}
              <a className="text-blue-400" target="_blank" href="#">
                Download Resume
              </a>{" "}
            </p>
            <div className="bg-yellow-200 ml-3 p-6 justify-center text-center font-bold text-black text-lg pb-3">
              <ul>
                <li>HTML/CSS</li>

                <li>JavaScprit</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>MySql</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>

          <div className="grid content-center text-center font-bold text-white text-lg pb-3">
            <h3>Find me on Twitter, Facebook & Skype</h3>
            <a className="text-blue-400" target="_blank" href="#">
              Twitter: @cristosDon
            </a><br/>
            <a className="text-blue-400" target="_blank" href="#">
              Facebook: @Osunkile1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
