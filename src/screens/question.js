import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { getItemAsync } from "expo-secure-store";

import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import colors from "../styles/colors";
import styles from "../styles/styles";
import store from "../redux/store";

const QuestionScreen = (props) => {
  const { navigation } = props;
  const [user, setUser] = React.useState({});

  store.subscribe(() => {
    setUser(store.getState().user);
  });

  const welcomeUser = () => {
    navigation.navigate("UserWelcome");
  };

  const welcomeVolunteer = () => {
    navigation.navigate("VolunteerWelcome");
  };

  React.useEffect(() => {
    if (user.token) {
      props.navigation.navigate("VolunteerFeed");
    } else {
      getItemAsync("token").then((token) => {
        getItemAsync("user").then((user) => {
          setUser({ token: JSON.parse(token), data: JSON.parse(user) });
        });
      });
    }
  }, [user]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.dark,
        flexDirection: "column",
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={colors.dark} barStyle="white-content" />
      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/aquiestoy.png")}
          style={{
            resizeMode: "contain",
            width: 150,
          }}
        />
        <Text
          style={[
            styles.description,
            { color: colors.white, fontSize: 17, marginTop: 0 },
          ]}
        >
          Cómo quieres usar la app?
        </Text>
        <TouchableOpacity
          style={[
            styles.loginButton,
            { backgroundColor: colors.blue, marginBottom: 10 },
          ]}
          onPress={() => welcomeUser()}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Kastelov--Axiforma-Bold",
                color: "white",
                textAlign: "center",
                fontSize: 15,
              }}
            >
              Personal de la salud
            </Text>
            <Icon
              name="ios-medkit"
              size={20}
              style={{
                fontFamily: "Kastelov--Axiforma-Bold",
                color: "white",
                textAlign: "center",
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButton]}
          onPress={() => welcomeVolunteer()}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Kastelov--Axiforma-Bold",
                color: "white",
                textAlign: "center",
                fontSize: 15,
              }}
            >
              Voluntario de la escucha
            </Text>
            <Icon
              name="ios-heart"
              size={20}
              style={{
                fontFamily: "Kastelov--Axiforma-Bold",
                color: "white",
                textAlign: "center",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QuestionScreen;
