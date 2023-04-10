import React from "react";

function Booking() {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">
              BOOKING
            </h1>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-grey-900">
              Event Details
            </h1>
          </div>
          <form>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class=" flex-wrap -m-2">
                <div class="p-2 w-1/2 ">
                  <div class="relative flex space-x-4">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2 ">
                  <div class="relative flex space-x-4">
                    <label
                      for="Event Date"
                      class="leading-7 text-sm text-gray-600 "
                      placeholder="Event Date"
                    >
                    Event Date: 
                    </label>
                    <input
                      type="date"
                      id="Event Date"
                      name="Event Date"
                      placeholder="Start"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <input
                      type="date"
                      id="Event Date"
                      name="Event Date"
                      placeholder="End"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2 ">
                  <div class="relative flex space-x-4">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Package:
                    </label>
                    <select class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option>Select Package</option>
                      <option>Silver</option>
                      <option>Gold</option>
                      <option>Platinium</option>
                    </select>
                    {/* <label for="name" class="leading-7 text-sm text-gray-600">Package:</label>
            <input type="text" id="Package" name="Package" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative flex space-x-4">
                    <label
                      for="Address"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Address:
                    </label>
                    <textarea
                      id="Address"
                      name="Address"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative flex space-x-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative flex space-x-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Contact:
                    </label>
                    <input
                      
                      type="number"
                      id="contact"
                      name="Contact"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Booking;
