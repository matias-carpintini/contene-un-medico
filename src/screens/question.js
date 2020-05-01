import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";

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

const QuestionScreen = (props) => {
  const { navigation } = props;
  const [user, setUser] = React.useState({ token: "", data: {} });

  const signUpVolunteer = () => {
    navigation.navigate("VolunteerSignUp");
  };

  const welcomeUser = () => {
    navigation.navigate("UserWelcome");
  };

  React.useEffect(() => {
    const { data } = user;
    //deleteItemAsync("user").then(() => deleteItemAsync("token"));
    //console.log("question photo", data.is_health_professional);

    if (user.token) {
      if (data.is_health_professional) {
        props.navigation.navigate("UserFeed");
      } else {
        props.navigation.navigate("VolunteerFeed");
      }
    } else {
      getItemAsync("token").then((token) => {
        getItemAsync("user").then((user) => {
          setUser({ token: JSON.parse(token), data: JSON.parse(user) });
        });
      });
    }
  }, [user.token]);

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
          Hola, qué quieres hacer?
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
              Hablar con un voluntario
            </Text>
            <Icon
              name="ios-chatbubbles"
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
          onPress={() => signUpVolunteer()}
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
              Ser voluntario
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
