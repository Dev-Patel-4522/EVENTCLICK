import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import YouTube from "react-youtube";

function Portfolio() {
  return (
    <div>
      <div className=" flex ">
        <section>
          <div class="bg-blue-500 w-full text-white ">
            <div class="flex flex-col px-10 fix ">
              <div class=" text-center  sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400  ">
                  <circle cx="12" cy="7" r="4"></circle>
                </div>
                <h1>PHOTOGRAPHER NAME</h1>
                <p>username321</p>
                <hr class="my-7 "></hr>
                <div class="text-left  ">
                  <div class="flex flex-row justify-between ">
                    <h1 class="font-medium">Experience :</h1>
                    <EditIcon />
                  </div>
                  <p>4 years</p>
                  <div class="flex flex-row justify-between mt-7 ">
                    <h1 class="font-medium">Expertise :</h1>
                    <EditIcon />
                  </div>
                  <p>Wedding</p>
                  <p>Nature</p>
                </div>
                <hr class="my-7"></hr>
                <div class="text-left ">
                  <div class="flex flex-row justify-between ">
                    <h1 class="font-medium">City :</h1>
                    <EditIcon />
                  </div>
                  <p>Ahemdabad</p>
                  <div class="flex flex-row justify-between mt-7 ">
                    <h1 class="font-medium ">Area :</h1>
                    <EditIcon />
                  </div>
                  <p>Ranip</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="flex justify-between mr-10">
              <h1 className="font-bold text-xl text-left my-5 mx-16">
                Edit Personal Details :
              </h1>
              <button className="  text-white text bg-blue-500 border-0  px-6  hover:bg-blue-600 text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-4">
                Save
              </button>
            </div>
            <div className="flex mx-20">
              <input
                type="text"
                class="block w-1/5 border border-gray-400  p-3 rounded mr-10 mb-4"
                name="firstname"
                placeholder="First Name"
              />
              <input
                type="text"
                class="block border border-gray-400 w-1/5 p-3 rounded mb-4"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              class="block border border-gray-400 w-1/2 p-3 rounded mb-4 mx-20"
              name="email"
              placeholder="Email"
            />
            <input
              type="email"
              class="block border border-gray-400 w-1/2 p-3 rounded mb-4 mx-20"
              name="username"
              placeholder="username"
            />
          </div>
          <div className="flex justify-between mr-10">
            <h1 className="font-bold text-xl title-font text-left mt-12 mx-16">
              Upload Work Photos :
            </h1>
            <button className="  text-white text bg-blue-500 border-0  px-6  hover:bg-blue-600 text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-4">
              Save
            </button>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 p-2 text-left">
                      CATEGORY
                    </h2>
                    <div class="lg:h-60 md:h-36 w-full object-cover object-center bg-gray-200 py-20">
                      <div class="w-20 h-20 py-10 rounded-full inline-flex items-center justify-center bg-blue-500 text-gray-400  ">
                        <circle cx="12" cy="7" r="4"></circle>
                        <div className="text-white text-xl">
                          <AddIcon />
                        </div>
                      </div>
                    </div>

                    <div class="p-6 flex justify-between ">
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Name
                      </h1>
                      <EditIcon />
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 p-2 text-left">
                      CATEGORY
                    </h2>
                    <img
                      class="lg:h-60 md:h-36 w-full object-cover object-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qPmyou8HM0n-ia6ZoZYnSPZDyiyfE1Rxlw&usqp=CAU"
                      alt="blog"
                    />
                    <div class="p-6 flex justify-between">
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Name
                      </h1>
                      <EditIcon />
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 p-2 text-left">
                      CATEGORY
                    </h2>

                    <img
                      class="lg:h-60 md:h-36 w-full object-cover object-center"
                      src="https://www.grandweddings.co.in/wp-content/uploads/2020/01/Wedding-Event.jpg"
                      alt="blog"
                    />
                    <div class="p-6 flex justify-between">
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Name
                      </h1>
                      <EditIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-between mr-10">
            <h1 className="font-bold text-xl title-font text-left mt-12 mx-16">
              Upload Your Video :
            </h1>
            <button className="  text-white text bg-blue-500 border-0  px-6  hover:bg-blue-600 text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-4">
              Save
            </button>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 p-2 text-left">
                      CATEGORY
                    </h2>
                    <div class="lg:h-64 md:h-36 w-full object-cover object-center bg-gray-200 py-20">
                      <div class="w-20 h-20 py-10 rounded-full inline-flex items-center justify-center bg-blue-500 text-gray-400  ">
                        <circle cx="12" cy="7" r="4"></circle>
                        <div className="text-white text-xl">
                          <AddIcon />
                        </div>
                      </div>
                    </div>

                    <div class="p-6 flex justify-between">
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Name
                      </h1>
                      <EditIcon />
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 p-2 text-left">
                      CATEGORY
                    </h2>
                    <div className=" h-64 overflow-hidden">
                      <YouTube videoId="JNKZN8uq1H8" />
                    </div>
                    {/* <img class="lg:h-60 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qPmyou8HM0n-ia6ZoZYnSPZDyiyfE1Rxlw&usqp=CAU" alt="blog"/> */}
                    <div class="p-6 flex justify-between">
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Name
                      </h1>
                      <EditIcon />
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 p-2 text-left">
                      CATEGORY
                    </h2>
                    <div className=" h-64  overflow-hidden">
                      <YouTube videoId="7pVpquui3Rc" />
                    </div>
                    {/* <video class="lg:h-60 md:h-36 w-full object-cover object-center" src="" alt="blog"/> */}
                    <div class="p-6 flex justify-between">
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Name
                      </h1>
                      <EditIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-between mr-10">
            <h1 className="font-bold text-xl title-font text-left mt-12 mx-16">
              Add Packages :
            </h1>
            <button className="  text-white text bg-blue-500 border-0  px-6  hover:bg-blue-600 text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-4">
              Save
            </button>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-16 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 rounded-lg overflow-hidden text-left relative ">
                    <div class="text-right pb-2">
                      {" "}
                      <EditIcon />
                    </div>
                    <h2 className="title-font sm:text-2xl text-black">
                      Duration:
                    </h2>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Photographers:
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Videographers:
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Services:
                    </h3>
                    <textarea className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Price :
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h1 className="text-center title-font sm:text-2xl text-black pb-5 ">
                      SILVER
                    </h1>
                  </div>
                </div>

                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 rounded-lg overflow-hidden text-left relative ">
                    <div class="text-right pb-2">
                      {" "}
                      <EditIcon />
                    </div>
                    <h2 className="title-font sm:text-2xl text-black">
                      Duration:
                    </h2>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Photographers:
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Videographers:
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Services:
                    </h3>
                    <textarea className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Price :
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h1 className="text-center title-font sm:text-2xl text-black pb-5 ">
                      GOLD
                    </h1>
                  </div>
                </div>

                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 rounded-lg overflow-hidden text-left relative ">
                    <div class="text-right pb-2">
                      {" "}
                      <EditIcon />
                    </div>
                    <h2 className="title-font sm:text-2xl text-black">
                      Duration:
                    </h2>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Photographers:
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Videographers:
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Services:
                    </h3>
                    <textarea className="bg-gray-300 mb-3" />
                    <h3 className="title-font sm:text-2xl text-black">
                      Price :
                    </h3>
                    <input type={Number} className="bg-gray-300 mb-3" />
                    <h1 className="text-center title-font sm:text-2xl text-black pb-5 ">
                      PLATINIUM
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
