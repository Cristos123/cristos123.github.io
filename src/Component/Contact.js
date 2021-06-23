import React from "react";

function Contact({ theme }) {
  return (
    <div>
      <div
        className={`min-h-screen flex items-center justify-center bg-defaultTheme-mainColor py-12 px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-2xl w-full space-y-8">
          <h2 className="text-center mt-6 text-3xl font-extrabold text-defaultTheme-mainText">
            Get in touch with us
          </h2>

          <div className=" bg-yellow-100 max-w-2xl rounded overflow-hidden shadow-xl p-5">
            <form className="space-y-4   ">
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid gap-6">
                  <div className="col-span-12">
                    <label
                      htmlFor="name_full"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name_full"
                      id="name_full"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="grid gap-6 py-3 ">
                  <div className="col-span-12">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="grid gap-6  py-2">
                  <div className="col-span-12">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="grid gap-6 py-2">
                  <div className="col-span-12">
                    <label
                      htmlFor="name_full"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full resize-none px-3 py-2 text-gray-700 border rounded-lg focus:outline-none "
                      rows="15"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <form className="w-full max-w-lg   ">
        <div className="flex flex-wrap justify-center mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700   text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 rounded px-4 py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700 border border-yellow-500"
              placeholder="First name"
              id="firstName"
              type="text"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 ">
            <label
              className="block uppercase tracking-wide text-gray-700   text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 rounded px-4 py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700 border border-yellow-500"
              placeholder="Last name"
              id="lastName"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700   text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 rounded px-4 py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700 border border-yellow-500"
              placeholder="Email"
              id="email"
              type="text"
            />
          </div>
        </div>
      </form> */}
    </div>
  );
}

export default Contact;
