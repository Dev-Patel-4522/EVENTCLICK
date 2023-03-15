import { createStackNavigator } from "react-navigation-stack";
import RegistrationForm from "../screens/RegistrationForm";
import ForgotPassword from "../screens/ForgotPassword";

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: RegistrationForm },
    ForgotPassword: { screen: ForgotPassword },
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
  }
);

export default AuthNavigation;
