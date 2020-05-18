import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Common
import Question from "./src/screens/question";
import Terms from "./src/screens/terms";
import Feedback from "./src/screens/feedback";

// Volunteers
import VolunteerWelcome from "./src/screens/volunteers/welcome";
import VolunteerSignUp from "./src/screens/volunteers/signup";
import VolunteerSignIn from "./src/screens/volunteers/signin";
import VolunteerFeed from "./src/screens/volunteers/feed";
import VolunteerProfile from "./src/screens/volunteers/profile";
import VolunteerEdit from "./src/screens/volunteers/edit";

// Medic
import UserWelcome from "./src/screens/users/welcome";
import UserSignUp from "./src/screens/users/signup";
import UserSignIn from "./src/screens/users/signin";
import UserFeed from "./src/screens/users/feed";
import UserProfile from "./src/screens/users/profile";
import UserEdit from "./src/screens/users/edit";

// notifications
import { Notifications } from 'expo';

import { AppLoading } from "expo";
import * as Font from "expo-font";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions"

import { Vibration } from "react-native";

const Navigator = createStackNavigator(
  {
    Question: Question,
    Terms: Terms,
    Feedback: Feedback,
    VolunteerWelcome: VolunteerWelcome,
    VolunteerSignUp: VolunteerSignUp,
    VolunteerSignIn: VolunteerSignIn,
    VolunteerFeed: VolunteerFeed,
    VolunteerProfile: VolunteerProfile,
    VolunteerEdit: VolunteerEdit,
    UserWelcome: UserWelcome,
    UserSignUp: UserSignUp,
    UserSignIn: UserSignIn,
    UserFeed: UserFeed,
    UserProfile: UserProfile,
    UserEdit: UserEdit,
  },
  {
    initialRouteName: "Question",
    headerMode: "none",
  }
);

export default class App extends React.Component {
  state = { isLoading: true, expoPushToken: null };
  _notificationSubscription = null;

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    await Font.loadAsync({
      "Kastelov--Axiforma-Black": require("./src/assets/fonts/Kastelov--Axiforma-Black.otf"),
      "Kastelov--Axiforma-Bold": require("./src/assets/fonts/Kastelov--Axiforma-Bold.otf"),
      "Kastelov--Axiforma-Book": require("./src/assets/fonts/Kastelov--Axiforma-Book.otf"),
      "Kastelov--Axiforma-Light": require("./src/assets/fonts/Kastelov--Axiforma-Light.otf"),
      "Kastelov--Axiforma-Medium": require("./src/assets/fonts/Kastelov--Axiforma-Medium.otf"),
      "Kastelov--Axiforma-Regular": require("./src/assets/fonts/Kastelov--Axiforma-Regular.otf"),
      "Kastelov--Axiforma-SemiBold": require("./src/assets/fonts/Kastelov--Axiforma-SemiBold.otf"),
    });

    this.setState({ isLoading: false });
    await this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  };

  registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            let token = await Notifications.getExpoPushTokenAsync();
            console.log(token);
            this.setState({ expoPushToken: token });
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            await Notifications.createChannelAndroidAsync('default', {
                name: 'default',
                sound: true,
                priority: 'max',
                vibrate: [0, 250, 250, 250],
            });
        }
  };

  _handleNotification = notification => {
        Vibration.vibrate();
        console.log(notification);
        this.setState({ notification: notification });
  };

   /*
   sendPushNotification = async () => {
        const message = {
            to: this.state.expoPushToken,
            sound: 'default',
            title: 'Original Title',
            body: 'And here is the body!',
            data: { data: 'goes here' },
            _displayInForeground: true,
        };
        const response = await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
   };*/

  render() {
    /*
        const MainApp = !this.state.isLoading ? (
      createAppContainer(Navigator)
    ) : (
      <></>
    );
    */

    const MainApp = createAppContainer(Navigator);
    return this.state.isLoading ? <AppLoading /> : <MainApp />;
  }
}
