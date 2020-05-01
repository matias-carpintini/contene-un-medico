import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/styles";
import colors from "../../styles/colors";

import { getItemAsync, setItemAsync } from "expo-secure-store";

export default class UserWelcomeScreen extends React.Component {
  userSignIn = () => {
    this.props.navigation.navigate("UserSignIn");
  };

  userSignUp = () => {
    this.props.navigation.navigate("UserSignUp");
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: colors.smoke,
          flexDirection: "column",
          flex: 1,
        }}
      >
        <StatusBar backgroundColor={colors.smoke} barStyle="dark-content" />
        <ScrollView>
          <View
            style={{
              backgroundColor: colors.white,
              margin: 20,
              top: 40,
              marginBottom: 0,
              borderRadius: 50,
              flex: 1,
              paddingBottom: 30,
            }}
            overflow="hidden"
          >
            <View
              style={{
                height: 90,
                flexDirection: "row",
                margin: 0,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/images/aquiestoy.png")}
                style={{
                  resizeMode: "contain",
                  width: 150,
                  marginLeft: 20,
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: "Kastelov--Axiforma-Medium",
                margin: 20,
                marginTop: -25,
                color: colors.lightGray,
              }}
            >
              el mundo necesita de nuestra empatía
            </Text>

            <Image
              source={require("../../assets/images/contact-me.png")}
              style={{
                resizeMode: "contain",
                width: "100%",
                height: 300,
                marginHorizontal: 20,
              }}
            />

            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  marginBottom: -60,
                  marginTop: 40,
                  fontFamily: "Kastelov--Axiforma-Bold",
                  fontSize: 18,
                  color: colors.green,
                }}
              >
                #RedDeEmpatíaGlobal
              </Text>
              <Text style={styles.description}>
                Somos muchas personas con ganas de escucharte, de conectar, de
                hablar. Aquí estamos. Aquí estoy.
              </Text>
              <TouchableOpacity
                style={[styles.loginButton]}
                onPress={this.userSignIn}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Bold",
                    color: "white",
                    textAlign: "center",
                    fontSize: 15,
                  }}
                >
                  Iniciar sesión
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 115,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginTop: 50,
                fontFamily: "Kastelov--Axiforma-Medium",
                color: colors.lightGray,
              }}
            >
              ó
            </Text>
            <TouchableOpacity onPress={this.userSignUp}>
              <Text
                style={{
                  marginTop: 0,
                  fontFamily: "Kastelov--Axiforma-Bold",
                  fontSize: 18,
                  color: colors.green,
                }}
              >
                Crear una cuenta
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
