import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Common
import Question from "./src/screens/question";
import Welcome from "./src/screens/welcome";
import Feedback from "./src/screens/feedback";

// Volunteers
import VolunteerSignUp from "./src/screens/volunteers/signup";
import VolunteerSignIn from "./src/screens/volunteers/signin";
import VolunteerFeed from "./src/screens/volunteers/feed";
import VolunteerProfile from "./src/screens/volunteers/profile";
import VolunteerEdit from "./src/screens/volunteers/edit";

// Medic
import UserSignUp from "./src/screens/users/signup";
import UserSignIn from "./src/screens/users/signin";
import UserFeed from "./src/screens/users/feed";
import UserProfile from "./src/screens/users/profile";
import UserEdit from "./src/screens/users/edit";

import { AppLoading } from "expo";
import * as Font from "expo-font";

const Navigator = createStackNavigator(
  {
    Question: Question,
    Welcome: Welcome,
    Feedback: Feedback,
    VolunteerSignUp: VolunteerSignUp,
    VolunteerSignIn: VolunteerSignIn,
    VolunteerFeed: VolunteerFeed,
    VolunteerProfile: VolunteerProfile,
    VolunteerEdit: VolunteerEdit,
    UserSignUp: UserSignUp,
    UserSignIn: UserSignIn,
    UserFeed: UserFeed,
    UserProfile: UserProfile,
    UserEdit: UserEdit
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