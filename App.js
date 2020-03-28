import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Welcome from "./src/screens/welcome";
import SignUp from "./src/screens/auth/signup";
import SignIn from "./src/screens/auth/signin";
import Feed from "./src/screens/feed";
import UserProfile from "./src/screens/auth/profile";
import EditUser from "./src/screens/auth/edit";

import { AppLoading } from "expo";
import * as Font from "expo-font";

const Navigator = createStackNavigator(
  {
    Welcome: Welcome,
    SignIn: SignIn,
    SignUp: SignUp,
    Feed: Feed,
    UserProfile: UserProfile,
    EditUser: EditUser
  },
  {
    headerMode: "none"
  }
);

export default class App extends React.Component {
  state = { isLoading: true };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    await Font.loadAsync({
      "Kastelov--Axiforma-Black": require("./src/assets/fonts/Kastelov--Axiforma-Black.otf"),
      "Kastelov--Axiforma-Bold": require("./src/assets/fonts/Kastelov--Axiforma-Bold.otf"),
      "Kastelov--Axiforma-Book": require("./src/assets/fonts/Kastelov--Axiforma-Book.otf"),
      "Kastelov--Axiforma-Light": require("./src/assets/fonts/Kastelov--Axiforma-Light.otf"),
      "Kastelov--Axiforma-Medium": require("./src/assets/fonts/Kastelov--Axiforma-Medium.otf"),
      "Kastelov--Axiforma-Regular": require("./src/assets/fonts/Kastelov--Axiforma-Regular.otf"),
      "Kastelov--Axiforma-SemiBold": require("./src/assets/fonts/Kastelov--Axiforma-SemiBold.otf")
    });

    this.setState({ isLoading: false });
  };

  render() {
    const MainApp = !this.state.isLoading ? (
      createAppContainer(Navigator)
    ) : (
      <></>
    );
    return this.state.isLoading ? <AppLoading /> : <MainApp />;
  }
}