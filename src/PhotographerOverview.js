import React from "react";
// import img from "./img.jpg"
import YouTube from "react-youtube";
import "./photographer.css";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function PhotographerOverview() {
  return (
    <div>
      <div class="min-h-screen container  mx-auto">
        <img
          className="w-full h-full"
          src="https://wedabout.com/blog/wp-content/uploads/2017/07/St.-Regis.jpg"
          alt="wedding event"
        />
      </div>
      {/* <img className='w-full' src={img} alt="sunset"></img>  */}
      <section className="flex px-10 py-24 ">
        <span class=" bg-black inline-flex w-3/4 px-6 py-10 mt-8 ml-10">
          <img
            alt="blog"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfPO9omt_s_P0l4VZAkdFBQYxgGpXOuKS1Q&usqp=CAU"
            class="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span class="flex-grow flex flex-col ">
            <span class="title-font text-4xl font-medium text-white">
              Shan Patel
            </span>
            <span class="text-white text-2xs tracking-widest mt-0.5">
              Category : Wedding
            </span>
            <span className="text-white text-2xs tracking-widest mt-0.5">
              Rating:
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarOutlineIcon />
            </span>
          </span>
        </span>
        {/* <div className="bg-local ..." style="background-image: url(Pages/bgimage.jpg)"></div> */}
        {/* <img src={bgimage} alt="sunset"></img> */}
        <div className="flex-col ">
          <h1 className="design text-center ">OVERVIEW</h1>
          <p className="p-5 mx-5 w-5/6 pl-20 text-justify ">
            A photographer is someone who takes photographs using a camera to
            capture images of people, places, or things. Photographers may work
            in a variety of settings, including portrait studios, news
            organizations, advertising agencies, or as freelance artists.
          </p>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <h1 className=" design text-center">My portfolio</h1>
        <h1 className="title-font sm:text-2xl  mt-5 text-black font-weight: 900 text-left pl-16">
          Photo:
        </h1>

        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://i.pinimg.com/736x/54/fc/08/54fc08de29e7d60caa871e0c83734a2a.jpg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://image.wedmegood.com/resized/540X/uploads/project/222784/1667644034_0F5A2723.jpg?crop=12,185,2024,1139"
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVn0dUY6EyKka4WX-MMyj9HusJFjSUP9D9ig&usqp=CAU"
                  alt="content"
                />
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://cdn0.weddingwire.in/article/5414/3_2/1280/jpg/94145-how-to-post-a-discussion-on-community-lead.webp"
                  alt="content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <h1 className=" title-font font-medium text-2xl mt-5 text-black font-weight: 900 text-left pl-16">
          Youtube Videos:
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <YouTube videoId="tyBJioe8gOs" />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <YouTube videoId="oTpr9TT9rfI" />
              </div>
              {/* <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">YouTube Videos</h2>
        <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <h1 className="packages text-center">Packages</h1>
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 rounded-lg overflow-hidden text-left relative ">
                <h2 className="title-font sm:text-2xl text-black">Duration:</h2>
                <p class="leading-relaxed mb-3">1-2 Days</p>
                <h3 className="title-font sm:text-2xl text-black">
                  Photographers:
                </h3>
                <p class="leading-relaxed mb-3">2</p>
                <h3 className="title-font sm:text-2xl text-black">
                  Videographers:
                </h3>
                <p class="leading-relaxed mb-3">1</p>
                <h3 className="title-font sm:text-2xl text-black">Services:</h3>
                <pre>50 Pages Photo Album</pre>
                <pre class="leading-relaxed mb-5">Pendrive</pre>
                <h1 className="text-center title-font sm:text-2xl text-black mb-6">
                  Rs. 20,000
                </h1>
                <h1 className="text-center title-font sm:text-2xl text-black ">
                  SILVER
                </h1>
              </div>
            </div>

            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-left relative ">
                <h2 className="title-font sm:text-2xl text-black">Duration:</h2>
                <p class="leading-relaxed mb-3">1-2 Days</p>
                <h3 className="title-font sm:text-2xl text-black">
                  Photographers:
                </h3>
                <p class="leading-relaxed mb-3">2</p>
                <h3 className="title-font sm:text-2xl text-black">
                  Videographers:
                </h3>
                <p class="leading-relaxed mb-3">1</p>
                <h3 className="title-font sm:text-2xl text-black">Services:</h3>
                <pre>50 Pages Photo Album</pre>
                <pre class="leading-relaxed mb-5">Pendrive</pre>
                <h1 className="text-center title-font sm:text-2xl text-black mb-6">
                  Rs. 20,000
                </h1>
                <h1 className="text-center title-font sm:text-2xl text-black ">
                  GOLD
                </h1>
              </div>
            </div>

            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-left relative ">
                <h2 className="title-font sm:text-2xl text-black">Duration:</h2>
                <p class="leading-relaxed mb-3">1-2 Days</p>
                <h3 className="title-font sm:text-2xl text-black">
                  Photographers:
                </h3>
                <p class="leading-relaxed mb-3">2</p>
                <h3 className="title-font sm:text-2xl text-black">
                  Videographers:
                </h3>
                <p class="leading-relaxed mb-3">1</p>
                <h3 className="title-font sm:text-2xl text-black">Services:</h3>
                <pre>50 Pages Photo Album</pre>
                <pre class="leading-relaxed mb-5">Pendrive</pre>
                <h1 className="text-center title-font sm:text-2xl text-black mb-6">
                  Rs. 20,000
                </h1>
                <h1 className="text-center title-font sm:text-2xl text-black   ">
                  PLATINIUM
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link to="/Booking">
        <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 mb-8 focus:outline-none hover:bg-indigo-600 rounded-lg">
          Book Now{" "}
        </button>
      </Link>
    </div>
  );
}

export default PhotographerOverview;
