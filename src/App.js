// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Setting from "./Setting";
import Navigationmenu from "./Navigationmenu";
import Booking from "./Booking";
import Contactus from "./Contactus";
import Portfolio from "./Portfolio";
import PhotographerOverview from "./PhotographerOverview";
import Signin from "./Signin";
import Signup from './Signup';
import ForgetPassword from "./ForgetPassword";
import Footernav from './Footernav';


// import EXAMPLE from './EXAMPLE';
// import RegistrationForm from './RegistrationForm';
// import { LoginScreen } from "./LoginScreen";
// import { SignupScreen } from "./SignupScreen";
// import { HomeScreen } from "./HomeScreen";
// import { ForgotPasswordScreen } from "./ForgotPasswordScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route
            path="/PhotographerOverview"
            element={<PhotographerOverview />}
          />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          {/* <Route path="/Setting" 
          element={<Setting />} 
          />  */}
          {/* <Route path="/Upcoming" 
          element={<Upcoming />} 
          /> */}
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
        <Footernav />
      </Router>

      {/* <Signup /> */}
      {/* <Signin /> */}
      {/* <BootstrapDialogTitle /> */}
      {/* <ForgetPassword /> */}
      {/* <Contactus /> */}
      {/* <Navigationmenu /> */}

      {/* <EXAMPLE /> */}
      {/* <RegistrationForm /> */}
      {/* export {(LoginScreen, SignupScreen, HomeScreen, ForgotPasswordScreen)}; */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
