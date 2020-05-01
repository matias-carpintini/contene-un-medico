import { setItemAsync } from "expo-secure-store";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Picker,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import countries from "../../assets/strings/countries";
import help_reassons from "../../assets/strings/help_reassons";
import bridge from "../../helpers/bridge";
import colors from "../../styles/colors";
import styles from "../../styles/styles";

export default UserSignUpScreen = (props) => {
  const [buttonText, setButtonText] = React.useState("Crear cuenta");
  const [buttonStatus, setButtonStatus] = React.useState(true);
  const [validateTerms, setValidateTerms] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    phone: "",
    country: "Argentina",
    help_reasson: "",
    password: "",
  });

  const submit = () => {
    setButtonStatus(true);
    setButtonText("Creando cuenta");
    bridge.createUser(formData).then((response) => {
      if (response.status) {
        setItemAsync("user", JSON.stringify(response.User))
          .then(() => setItemAsync("token", JSON.stringify(response.token)))
          .then(() => props.navigation.navigate("VolunteerFeed"));
      } else {
        setButtonText("Crear cuenta");
        setButtonStatus(!validateTerms);
        console.log("error", response);
      }
    });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.smoke,
        flexDirection: "column",
        flex: 1,
      }}
    >
      <KeyboardAvoidingView>
        <StatusBar backgroundColor={colors.smoke} barStyle="dark-content" />
        <ScrollView>
          <View
            style={{
              backgroundColor: colors.white,
              margin: 20,
              marginBottom: 0,
              borderRadius: 50,
              flex: 1,
              paddingBottom: 0,
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
              Crea tu cuenta, ¡es fácil!
            </Text>

            <View style={{ alignItems: "center" }}>
              <Text style={[styles.label]}>Correo electrónico</Text>
              <TextInput
                placeholderTextColor={colors.darkWhite}
                style={[
                  styles.loginInput,
                  {
                    backgroundColor: colors.smoke,
                    marginTop: 10,
                    marginBottom: 20,
                  },
                ]}
                placeholder="carpintinimatias@gmail.com"
                value={formData.email}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    email: event.nativeEvent.text,
                  })
                }
                keyboardType="email-address"
              />

              <Text style={[styles.label]}>WhatsApp</Text>
              <TextInput
                placeholderTextColor={colors.darkWhite}
                style={[
                  styles.loginInput,
                  {
                    backgroundColor: colors.smoke,
                    marginTop: 10,
                    marginBottom: 20,
                  },
                ]}
                placeholder="+54 11-12345678"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    phone: event.nativeEvent.text,
                  })
                }
                keyboardType="phone-pad"
              />

              <Text style={[styles.label]}>País actual de residencia:</Text>
              <View
                style={{
                  marginTop: 20,
                  width: "90%",
                  justifyContent: "center",
                  backgroundColor: colors.smoke,
                  borderRadius: 10,
                  height: 48,
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                <Picker
                  selectedValue={formData.country}
                  onValueChange={(value) => {
                    setFormData({ ...formData, country: value });
                  }}
                >
                  {countries.map((country, index) => (
                    <Picker.Item
                      key={`country-item-${index}`}
                      label={country.label}
                      value={country.value}
                    />
                  ))}
                </Picker>
              </View>

              <Text style={[styles.label]}>Motivo</Text>
              <View
                style={{
                  marginTop: 20,
                  width: "90%",
                  justifyContent: "center",
                  backgroundColor: colors.smoke,
                  borderRadius: 10,
                  height: 48,
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                <Picker
                  selectedValue={formData.help_reasson}
                  onValueChange={(value) => {
                    setFormData({ ...formData, help_reasson: value });
                  }}
                >
                  {help_reassons.map((reasson, index) => (
                    <Picker.Item
                      key={`reasson-item-${index}`}
                      label={reasson.label}
                      value={reasson.value}
                    />
                  ))}
                </Picker>
              </View>

              <Text style={[styles.label]}>Contraseña</Text>
              <TextInput
                placeholderTextColor={colors.darkWhite}
                secureTextEntry
                style={[
                  styles.loginInput,
                  { backgroundColor: colors.smoke, marginTop: 10 },
                ]}
                placeholder="********"
                collapsable={true}
                value={formData.password}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    password: event.nativeEvent.text,
                  })
                }
              />
              <TouchableOpacity
                onPress={() => {
                  setValidateTerms((previous) => {
                    setValidateTerms(!previous);
                    setButtonStatus(previous);
                  });
                }}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Bold",
                    color: colors.darkWhite,
                    marginTop: 30,
                  }}
                >
                  Acepto los{" "}
                  <Text
                    style={
                      validateTerms
                        ? {
                            color: colors.green,
                            textDecorationLine: "underline",
                          }
                        : {
                            color: colors.gray,
                          }
                    }
                  >
                    términos y condiciones
                  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  validateTerms && !buttonStatus
                    ? styles.signUpButton
                    : styles.diasbledSignUpButton,
                  { marginBottom: 30, marginTop: 10 },
                ]}
                onPress={submit}
                disabled={buttonStatus}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Bold",
                    color: "white",
                    textAlign: "center",
                    fontSize: 15,
                    color: colors.white,
                  }}
                >
                  {buttonText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginVertical: 10 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
