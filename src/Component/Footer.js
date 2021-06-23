import React from "react";

function Footer() {
  return (
    <div>
      <h3 className="text-center capitalize font-bold ">Some of my past project</h3>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg  bg-yellow-200">
          <img className="w-full" src="/tunde.jpg" />
          <div className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">Post Title</h6>
            <p className="text-gray-900 text-base">
              This is a sentence more text
            </p>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-yellow-200">
          <img className="w-full" src="/tunde.jpg" />
          <div className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">Post Title</h6>
            <p className="text-gray-900 text-base">
              This is a sentence more text
            </p>
          </div>
        </div>{" "}
        <div className="rounded overflow-hidden shadow-lg bg-yellow-200">
          <img className="w-full" src="/tunde.jpg" />
          <div className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">Post Title</h6>
            <p className="text-gray-900 text-base">
              This is a sentence more text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
