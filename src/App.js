// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Footer from './Footernav';
// import Signin from "./Signin";
// import Signup from './Signup';
// import BootstrapDialogTitle from "./CustomerAccountSetting";
import ForgetPassword from "./ForgetPassword";
// import EXAMPLE from './EXAMPLE';
// import RegistrationForm from './RegistrationForm';
// import { LoginScreen } from "./LoginScreen";
// import { SignupScreen } from "./SignupScreen";
// import { HomeScreen } from "./HomeScreen";
// import { ForgotPasswordScreen } from "./ForgotPasswordScreen";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <Routes> */}
          {/* <Navbar /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/aboutus" element={<Aboutus />} /> */}
          {/* <Route path="/service" element={<Services />} /> */}
          {/* <Route path="/Signin" element={<Signin />} /> */}
          {/* <Route path="/Signup" element={<Signup />} /> */}
          {/* <Footer /> */}
        {/* </Routes> */}
      {/* </Router> */}

      {/* <Signup /> */}
      {/* <Signin /> */}
      {/* <BootstrapDialogTitle /> */}
      <ForgetPassword />

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
