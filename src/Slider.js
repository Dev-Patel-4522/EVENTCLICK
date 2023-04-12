import { Swiper, SwiperSlide } from "swiper/react";
// import c1 from './Images/c1.jpg'
// import c2 from './Images/c2.jpg'
// import c3 from './Images/c3.jpg'
// import c4 from './Images/c4.jpg'
import img4 from "./Images/shan.png";
import "./Home.css";

// import c5 from './Images/c5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import React from "react";

function Slider() {
  return (
    <div>
      <section class="mt-20">
        <div className="dataslider">
          {/* <img src="https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg"/> */}

          <p className="sliderdata">
            <h6>Contrast is what makes photography interesting</h6>
            <b>
              <h1 className="sliderdata1">
                People Who<br></br>Believed Us{" "}
              </h1>
            </b>
          </p>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
          >
            <SwiperSlide>
              <div class=" h-full mb-10 ">
                <div class="h-full  p-8 rounded bg-[#91beef]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5   text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6 text-xl">
                    Event-Click did a fabulous holiday photoshoot for us at Taj
                    Holiday, Goa. Each & every picture came out really
                    beautiful. The photographer, Adil, was very patient and took
                    25 pictures in just 1 hour! He was very cooperative and
                    delivered stunning photos. Highly recommend them for your
                    next photoshoot.
                  </p>
                  <a class="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src={img4}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900 text-2xl">
                        Holden Caulfield
                      </span>
                      <span class="text-gray-500 text-sm">
                        WEDDING PHOTOGRAPHER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class=" h-full  mb-10 ">
                <div class="h-full bg-[#91beef] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6 text-xl">
                    Event-Click did a fabulous holiday photoshoot for us at Taj
                    Holiday, Goa. Each & every picture came out really
                    beautiful. The photographer, Adil, was very patient and took
                    25 pictures in just 1 hour! He was very cooperative and
                    delivered stunning photos. Highly recommend them for your
                    next photoshoot.
                  </p>
                  <a class="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src={img4}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900 text-2xl">
                        Holden Caulfield
                      </span>
                      <span class="text-gray-500 text-sm">
                        WEDDING PHOTOGRAPHER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="h-full mb-10  ">
                <div class="h-full bg-[#91beef] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6 text-xl">
                    Event-Click did a fabulous holiday photoshoot for us at Taj
                    Holiday, Goa. Each & every picture came out really
                    beautiful. The photographer, Adil, was very patient and took
                    25 pictures in just 1 hour! He was very cooperative and
                    delivered stunning photos. Highly recommend them for your
                    next photoshoot.
                  </p>
                  <a class="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src={img4}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900 text-2xl">
                        Holden Caulfield
                      </span>
                      <span class="text-gray-500 text-sm">
                        WEDDING PHOTOGRAPHER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class=" h-full mb-10 ">
                <div class="h-full bg-[#91beef] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6 text-xl">
                    Event-Click did a fabulous holiday photoshoot for us at Taj
                    Holiday, Goa. Each & every picture came out really
                    beautiful. The photographer, Adil, was very patient and took
                    25 pictures in just 1 hour! He was very cooperative and
                    delivered stunning photos. Highly recommend them for your
                    next photoshoot.
                  </p>
                  <a class="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src={img4}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900 text-2xl">
                        Holden Caulfield
                      </span>
                      <span class="text-gray-500 text-sm">
                        WEDDING PHOTOGRAPHER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class=" h-full mb-10 ">
                <div class="h-full bg-[#91beef] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6 text-xl">
                    Event-Click did a fabulous holiday photoshoot for us at Taj
                    Holiday, Goa. Each & every picture came out really
                    beautiful. The photographer, Adil, was very patient and took
                    25 pictures in just 1 hour! He was very cooperative and
                    delivered stunning photos. Highly recommend them for your
                    next photoshoot.
                  </p>
                  <a class="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src={img4}
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900 text-2xl">
                        Holden Caulfield
                      </span>
                      <span class="text-gray-500 text-sm">
                        WEDDING PHOTOGRAPHER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Slider;
