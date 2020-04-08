import React from "react";
import { setItemAsync } from "expo-secure-store";
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
  View,
  Picker,
} from "react-native";

import styles from "../../styles/styles";
import colors from "../../styles/colors";
import countries from "../../assets/strings/countries";
import jobs from "../../assets/strings/jobs";
import bridge from "../../helpers/bridge";

export default VolunteerSignUpScreen = () => {
  const [validateTerms, setValidateTerms] = React.useState(false);
  const [formData, setFormData] = React.useState({
    full_name: "",
    level_of_studies: "",
    profession: "",
    home: "NOT IN UI",
    phone: "",
    email: "",
    country: "Argentina",
    password: "",
    is_doctor: false,
    resume: "NOT IN UI",
    courses: "NOT IN UI",
    nationality: "Argentina",
    workspace: "NOT IN UI",
    dni: "NOT IN UI",
    position: "NOT IN UI",
    childs: "NOT IN UI",
    marital_status: "NOT IN UI",
    people_live_with_you: "NOT IN UI",
    dependents: "NOT IN UI",
  });

  const submit = () => {
    bridge.createUser(formData).then((response) => {
      if (response.status) {
        setItemAsync("user", JSON.stringify(response.User));
        setItemAsync("token", JSON.stringify(response.token));
      } else {
        console.log("error", response);
      }
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.smoke, flex: 1 }}>
      <StatusBar backgroundColor={colors.smoke} barStyle="dark-content" />

      <View
        style={{
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
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
            color: colors.lightGray,
          }}
        >
          Crea tu cuenta, ¡es fácil!
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
            flex: 1,
          }}
        >
          <ScrollView>
            <View style={{ alignItems: "center", flex: 1 }}>
              <TextInput
                placeholderTextColor={colors.darkWhite}
                style={[
                  styles.loginInput,
                  { marginTop: 80, backgroundColor: colors.smoke },
                ]}
                value={formData.full_name}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    full_name: event.nativeEvent.text,
                  })
                }
                placeholder="Nombre y Apellido"
              />

              <TextInput
                placeholderTextColor={colors.darkWhite}
                style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    email: event.nativeEvent.text,
                  })
                }
                keyboardType="email-address"
              />

              <TextInput
                placeholderTextColor={colors.darkWhite}
                style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                placeholder="Teléfono de contacto"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    phone: event.nativeEvent.text,
                  })
                }
                keyboardType="phone-pad"
              />

              <View
                style={{
                  marginTop: 20,
                  width: "90%",
                  justifyContent: "center",
                  height: 48,
                }}
              >
                <Text>Nacionalidad</Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  width: "90%",
                  justifyContent: "center",
                  backgroundColor: colors.smoke,
                  borderRadius: 10,
                  height: 48,
                }}
              >
                <Picker
                  selectedValue={formData.nationality}
                  onValueChange={(value) => {
                    setFormData({ ...formData, nationality: value });
                  }}
                >
                  {countries.map((country, index) => (
                    <Picker.Item
                      key={`nationality-item-${index}`}
                      label={country.label}
                      value={country.value}
                    />
                  ))}
                </Picker>
              </View>

              <View
                style={{
                  marginTop: 20,
                  width: "90%",
                  justifyContent: "center",
                  height: 48,
                }}
              >
                <Text>País actual de residencia</Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  width: "90%",
                  justifyContent: "center",
                  backgroundColor: colors.smoke,
                  borderRadius: 10,
                  height: 48,
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
                      key={`nationality-item-${index}`}
                      label={country.label}
                      value={country.value}
                    />
                  ))}
                </Picker>
              </View>

              <TextInput
                placeholderTextColor={colors.darkWhite}
                style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                placeholder="Nivel de estudio"
                value={formData.level_of_studies}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    level_of_studies: event.nativeEvent.text,
                  })
                }
              />

              <View
                style={{
                  marginTop: 20,
                  width: "90%",
                  justifyContent: "center",
                  height: 48,
                }}
              >
                <Text>Profesión</Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  width: "90%",
                  justifyContent: "center",
                  backgroundColor: colors.smoke,
                  borderRadius: 10,
                  height: 48,
                }}
              >
                <Picker
                  mode={Picker.MODE_DROPDOWN}
                  selectedValue={formData.profession}
                  onValueChange={(value) => {
                    setFormData({ ...formData, profession: value });
                  }}
                >
                  {jobs.map((country, index) => (
                    <Picker.Item
                      key={`nationality-item-${index}`}
                      label={country.label}
                      value={country.value}
                    />
                  ))}
                </Picker>
              </View>

              <TextInput
                placeholderTextColor={colors.darkWhite}
                secureTextEntry
                style={[styles.loginInput, { backgroundColor: colors.smoke }]}
                placeholder="Contraseña"
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
                onPress={() => setValidateTerms(!validateTerms)}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Bold",
                    color: colors.darkWhite,
                    marginTop: 30,
                  }}
                >
                  Acepto los{" "}
                  <Text style={{ color: colors.gray }}>
                    términos y condiciones
                  </Text>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  validateTerms
                    ? styles.signUpButton
                    : styles.diasbledSignUpButton,
                  { marginBottom: 30 },
                ]}
                onPress={submit}
                disabled={!validateTerms}
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
                  Crear cuenta
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
