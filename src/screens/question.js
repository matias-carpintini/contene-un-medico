import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";
import styles from "../styles/styles";

export default class QuestionScreen extends React.Component {
  welcome = () => {
    this.props.navigation.navigate("Welcome");
  };

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: colors.dark,
          flexDirection: "column",
          flex: 1
        }}
      >
        <StatusBar backgroundColor={colors.dark} barStyle="white-content" />
        <View
          style={{
            width: "100%",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../assets/images/aquiestoy.png")}
            style={{
              resizeMode: "contain",
              width: 150
            }}
          />
          <Text
            style={[
              styles.description,
              { color: colors.white, fontSize: 17, marginTop: 0 }
            ]}
          >
            Cómo quieres usar la app?
          </Text>
          <TouchableOpacity
            style={[
              styles.loginButton,
              { backgroundColor: colors.blue, marginBottom: 10 }
            ]}
            onPress={this.welcome}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 20
              }}
            >
              <Text
                style={{
                  fontFamily: "Kastelov--Axiforma-Bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 15
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
                  textAlign: "center"
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.loginButton]} onPress={this.welcome}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 20
              }}
            >
              <Text
                style={{
                  fontFamily: "Kastelov--Axiforma-Bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 15
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
                  textAlign: "center"
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
