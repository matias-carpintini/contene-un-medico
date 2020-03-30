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
import MedicSignUp from "./src/screens/volunteers/signup";
import MedicSignIn from "./src/screens/volunteers/signin";
import MedicFeed from "./src/screens/volunteers/feed";
import MedicProfile from "./src/screens/medics/profile";
import MedicEdit from "./src/screens/volunteers/edit";

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
    MedicSignUp: MedicSignUp,
    MedicSignIn: MedicSignIn,
    MedicFeed: MedicFeed,
    MedicProfile: MedicProfile,
    MedicEdit: MedicEdit
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