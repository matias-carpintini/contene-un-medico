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
import jobs from "../../assets/strings/jobs";
import languages from "../../assets/strings/languages";
import bridge from "../../helpers/bridge";
import colors from "../../styles/colors";
import styles from "../../styles/styles";

export default UserSignUpScreen = (props) => {
  const [buttonText, setButtonText] = React.useState("Crear cuenta");
  const [buttonStatus, setButtonStatus] = React.useState(true);
  const [validateTerms, setValidateTerms] = React.useState(false);
  const [formData, setFormData] = React.useState({
    full_name: " ",
    level_of_studies: " ",
    profession: " ",
    is_health_professional: true,
    phone: " ",
    email: " ",
    birthdate: " ",
    gender: "H",
    lang: " ",
    dni: " ",
    home: " ",
    country: "Argentina",
    nationality: "Argentina",
    help_reasson: " ",
    password: "",
    resume: " ",
    courses: " ",
    workspace: " ",
    position: " ",
    childs: " ",
    marital_status: " ",
    people_live_with_you: " ",
    dependents: " ",
  });

  const submit = () => {
    setButtonStatus(true);
    if(formData.password.length < 6) return alert('La contraseña debe tener mínimo 6 caracteres');
    setButtonText("Creando cuenta");
    bridge.createUser(formData).then((response) => {
      if (response.status) {
        setItemAsync("user", JSON.stringify(response.User))
          .then(() => setItemAsync("token", JSON.stringify(response.token)))
          .then(() => props.navigation.navigate("UserFeed"));
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
              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>Nombre y Apellido:</Text>
              </View>
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
                value={formData.full_name}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    full_name: event.nativeEvent.text,
                  })
                }
                placeholder="Matias Carpintini"
              />

              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>Correo electrónico:</Text>
              </View>
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
              <View style={{ flex: 1, flexDirection: "row", width: "90%" }}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.label]}>Sexo:</Text>
                  <View
                    style={{
                      marginTop: 10,
                      marginBottom: 20,
                      justifyContent: "center",
                      backgroundColor: colors.smoke,
                      borderRadius: 10,
                      height: 48,
                    }}
                  >
                    <Picker
                      mode={Picker.MODE_DROPDOWN}
                      selectedValue={formData.gender}
                      onValueChange={(value) => {
                        setFormData({ ...formData, gender: value });
                      }}
                    >
                      <Picker.Item label="Hombre" value="H" />
                      <Picker.Item label="Mujer" value="M" />
                    </Picker>
                  </View>
                </View>
              </View>
              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>Teléfono de contacto:</Text>
              </View>
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

              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>País actual de residencia:</Text>
              </View>
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
                  mode={Picker.MODE_DROPDOWN}
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
              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>Profesión:</Text>
              </View>
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
                  mode={Picker.MODE_DROPDOWN}
                  selectedValue={formData.profession}
                  onValueChange={(value) => {
                    setFormData({ ...formData, profession: value });
                  }}
                >
                  {jobs.map((job, index) => (
                    <Picker.Item
                      key={`job-item-${index}`}
                      label={job.label}
                      value={job.value}
                    />
                  ))}
                </Picker>
              </View>
              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>Contraseña:</Text>
              </View>
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
