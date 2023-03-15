// import logo from './logo.svg';
import './App.css';
import Signin from "./Signin";
import Registration from './Registration';
// import RegistrationForm from './RegistrationForm';
// import { LoginScreen } from "./LoginScreen";
// import { SignupScreen } from "./SignupScreen";
// import { HomeScreen } from "./HomeScreen";
// import { ForgotPasswordScreen } from "./ForgotPasswordScreen";

function App() {
  return (
    <div className="App">
      <Signin />
      <Registration />
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
