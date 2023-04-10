import React from "react";
// import { Axios, db } from "../firebase/firebaseConfig";

    

function Contactus(){

  // const ContactForm = () => {
  // const [formData, setFormData] = useState({})

  // const updateInput = e => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   sendEmail()
  //   setFormData({
  //     name: '',
  //     email: '',
  //     message: '',
  //   })
  // }
  // const sendEmail = () => {
  //   Axios.post(
  //     'https://us-central1-your-app-name.cloudfunctions.net/submit',
  //     formData
  //   )
  //     .then(res => {
  //       db.collection('emails').add({
  //         name: formData.name,
  //         email: formData.email,
  //         message: formData.message,
  //         time: new Date(),
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <section class="text-gray-600 body-font relative">
        <div class=" px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap mr-10">
          <img
            class="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end  relative"
            src="https://www.pngitem.com/pimgs/m/586-5864602_design-photography-logo-camera-png-transparent-png.png"
            alt="camera"
          ></img>
          <div></div>
          <div class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className=" rounded border text-left py-10 px-20">
              <div class="relative mb-4">
                <h2 class="text-blue-500 text-2xl mb-7 font-medium  text-center title-font">
                  Contact US
                </h2>
                <label for="name" class="leading-7 text-left text-gray-600 ">
                  Name
                </label>
                <input
                //  onChange={updateInput}
                //  value={formData.name || ''}
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text text-gray-600">
                  Contact Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="Select Area" class="leading-7 text text-gray-600">
                  Email
                </label>
                <input
                  // onChange={updateInput}
                  // value={formData.email || ''}
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  // onChange={updateInput}
                  // value={formData.email || ''}
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="text-center">
                <button class="text-white text bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* </form> */}
  </div>
  );
}

export default Contactus;

      // <section class="text-sky-600 body-font relative">
      // <div class="container px-5 py-24 mx-auto">
      //   <div class="flex flex-col text-center w-full mb-12">
      //     <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#4484CE]">CONTACT US</h1>
      //   </div>
      //   <div class="lg:w-1/2 md:w-2/3 mx-auto rounded-3xl border-2 p-8 border-[#4484CE]">
      // <div class="m-10">
      //   <div class="p-2 w-full">
      //     <div class="relative  mb-5">
      // Name <input placeholder='Name' type="text" id="name" name="name" class="w-full  bg-white-50 border-[#4484CE] border-b-2 bg-opacity-50  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-sky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      //     </div>
      //     </div>
      //   <div class="p-2 w-full">
      //     <div class="relative mb-5"> 
      // Email <input placeholder='Email' type="email" id="email" name="email" class="w-full bg-white-50 bg-opacity-50  border-[#4484CE] border-b-2 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-sky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      //     </div>
      //   </div>
      //   <div class="p-2 w-full">
      //     <div class="relative mb-5">
      // Phone <input placeholder='Mo.' type="" id="Mo" name="te" class="w-full bg-white-50 bg-opacity-50  border-[#4484CE] border-b-2 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-sky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      //     </div>
      //   </div>

      // <div class="p-2 w-full">
      //     <div class="relative mb-5 mt-5">
      //       <textarea placeholder='Message' id="message" name="message" class="w-full bg-white-50 bg-opacity-50  border-[#4484CE] border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-sky-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      //     </div>
      //   </div>
      //   <div class="p-2 w-full">
      //     <button class="flex mx-auto text-white bg-[#4484CE] border-0 py-2 px-8 focus:outline-none hover:bg-blue hover:text-[blue] rounded-xl  text-lg">Send</button>
      //   </div>
      //   </div>
      //    </div>
      //  </div> 
      //  </section> 
    
