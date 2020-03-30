import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import colors from "../../styles/colors";
import styles from "../../styles/styles";

export default class VolunteerSignInScreen extends React.Component {
  submit = () => {
    this.props.navigation.navigate("VolunteerFeed");
  };

  volunteerSignUp = () => {
    this.props.navigation.navigate("VolunteerSignUp");
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: colors.smoke, flex: 1 }}>
        <StatusBar backgroundColor={colors.smoke} barStyle="dark-content" />

        <View
          style={{
            height: "20%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../assets/images/aquiestoy.png")}
            style={{ resizeMode: "contain", width: 130, height: 130 }}
          />

          <Text
            style={{
              alignSelf: "center",
              fontFamily: "Kastelov--Axiforma-Bold",
              fontSize: 13,
              marginTop: -40,
              color: colors.lightGray
            }}
          >
            el mundo necesita de nuestra empatía
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.select({ android: "height", ios: "padding" })}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.white,
              margin: 0,
              marginBottom: 0,
              borderTopStartRadius: 80,
              borderTopEndRadius: 80,
              flex: 1
            }}
          >
            <ScrollView horizontal={false}>
              <Image
                source={require("../../assets/images/welcome.png")}
                style={{
                  resizeMode: "contain",
                  width: "100%",
                  height: 300,
                  marginHorizontal: 20
                }}
              />
              <View style={{ alignItems: "center", flex: 1, marginTop: 40 }}>
                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Correo electrónico"
                ></TextInput>

                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  secureTextEntry={true}
                  style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                  placeholder="Contraseña"
                  collapsable={true}
                ></TextInput>

                <TouchableOpacity
                  style={{ width: "90%", flex: 1, marginTop: 10 }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "Kastelov--Axiforma-Bold",
                      color: colors.lightGray
                    }}
                  >
                    Olvidaste tu contraseña?
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.signUpButton,
                    { marginTop: 40, backgroundColor: colors.green }
                  ]}
                  onPress={this.submit}
                >
                  <Text
                    style={{
                      fontFamily: "Kastelov--Axiforma-Bold",
                      color: "white",
                      textAlign: "center",
                      fontSize: 15,
                      color: colors.white
                    }}
                  >
                    Iniciar sesión
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
