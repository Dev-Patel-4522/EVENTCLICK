import React from "react";

function Portfolio() {
  return (
    <div>
      <section>
        <div class="bg-blue-500 w-1/5 text-white">
          <div class="flex flex-col  mt-1 ">
            <div class=" text-center  sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 ">
                <circle cx="12" cy="7" r="4"></circle>
              </div>
              <h1>PHOTOGRAPHER NAME</h1>
              <p>username321</p>
              <hr class="my-7"></hr>
              <div class="text-left ml-5">
                <h1 class="font-medium">Experience :</h1>
                <p>4 years</p>
                <h1 class="font-medium mt-7">Expertise :</h1>
                <p>Wedding</p>
                <p>Nature</p>
                <hr class="my-7 "></hr>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
