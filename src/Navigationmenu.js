import React from "react";
import { Link } from "react-router-dom";
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
// import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
import EventClick from "./Images/EventClick.png";

function Navigationmenu() {
  return (
    <div className="navigation-main">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-500">
          <img height="400px" width="250px" src={EventClick} alt="logo"></img>

          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link class="mr-5 hover:text-gray-900" to="/">
              HOME
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/PhotographerOverview">
              PHOTOGRAPHER
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/Portfolio">
              ABOUT US
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/Photographer">
              PHOTOGRAPHERS
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/Setting">
              SETTINGS
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/Contactus">
              CONTACT US
            </Link>

            <p class="border-l-2 border-gray-600 flex p-3"></p>
            {/* <div class="flex flex-wrap">
      <div class="mr-2 hover:text-gray-900"><AssignmentOutlinedIcon/></div>
      <div class="mr-2 hover:text-gray-900"> <PortraitRoundedIcon/></div>
      <div class="mr-2 hover:text-gray-900"><SettingsOutlinedIcon/></div>
      
      </div> */}
            <Link to="/Signin">
              <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mr-3 mt-4 md:mt-0">
                Signin
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navigationmenu;
