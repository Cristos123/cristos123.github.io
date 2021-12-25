import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <h3 className="text-center capitalize font-bold ">
        Some of my past project
      </h3>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg  bg-yellow-200">
          <a className="cursor-pointer " href="https://cristos-blog-websites.netlify.app/">
            <img className="w-full" src="/ScreenshotofBlog1.png" />
          </a>
          <div className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">Blog website</h6>
            <p className="text-gray-900 text-base">
              This is Blog website I created with reactjs and Nodejs express
              that have the all functionality where user can create an acount,
              verify thier email, login before creating post or edit the post
              want to check it out{" "}
            </p>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-yellow-200">
        <a className="cursor-pointer " href="https://cristos-blog-websites.netlify.app/">
            <img className="w-full" src="/ScreenshotofBlog1.png" />
          </a>
          <div className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">Post Title</h6>
            <p className="text-gray-900 text-base">
              This is a sentence more text
            </p>
          </div>
        </div>{" "}
        <div className="rounded overflow-hidden shadow-lg bg-yellow-200">
        <a className="cursor-pointer " href="https://cristos-blog-websites.netlify.app/">
            <img className="w-full" src="/ScreenshotofBlog1.png" />
          </a>
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
