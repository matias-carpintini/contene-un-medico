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
  ActivityIndicator
} from "react-native";
import countries from "../../assets/strings/countries";
import jobs from "../../assets/strings/jobs";
import languages from "../../assets/strings/languages";
import bridge from "../../helpers/bridge";
import colors from "../../styles/colors";
import styles from "../../styles/styles";
import help_reassons from "../../assets/strings/help_reassons";

export default VolunteerSignUpScreen = (props) => {
  const [validateTerms, setValidateTerms] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    full_name: "",
    level_of_studies: "",
    profession: "",
    phone: "",
    email: "",
    birthdate: "",
    gender: "",
    lang: "Ingles",
    dni: "",
    home: "",
    country: "Argentina",
    nationality: "Argentina",
    resume: "",
    password: "",
    is_health_professional: false,
    help_reasson: "",
    network: ""
  });

  const submit = () => {
    if(formData.password.length < 6) return alert('La contraseña debe tener mínimo 6 caracteres');
    setLoading(true);
    bridge.createUser(formData).then((response) => {
      if (response.status) {
        setItemAsync("user", JSON.stringify(response.User))
          .then(() => setItemAsync("token", JSON.stringify(response.token)))
          .then(() => props.navigation.navigate("VolunteerFeed"));
      } else {
        console.log("error", response);
        setLoading(false);
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

              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>Dirección:</Text>
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
                placeholder="Calle siempre viva 123"
                value={formData.home}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    home: event.nativeEvent.text,
                  })
                }
              />

              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>Documento de identidad:</Text>
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
                placeholder="12.345.678"
                value={formData.dni}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    dni: event.nativeEvent.text,
                  })
                }
                keyboardType="number-pad"
              />

              <View style={{ flex: 1, flexDirection: "row", width: "90%" }}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.label]}>Nacimiento:</Text>
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
                    placeholder="12/10/2001"
                    value={formData.birthday}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        birthday: event.nativeEvent.text,
                      })
                    }
                  ></TextInput>
                </View>

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
                      style={{width: '100%', height: 48}} itemStyle={{height: 48}}
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
                <Text style={[styles.label]}>Idioma:</Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  justifyContent: "center",
                  backgroundColor: colors.smoke,
                  borderRadius: 10,
                  height: 48,
                  width: "90%",
                }}
              >
                <Picker
                  style={{width: '100%', height: 48}} itemStyle={{height: 48}}
                  selectedValue={formData.lang}
                  onValueChange={(value) => {
                    setFormData({ ...formData, lang: value });
                  }}
                >
                  {languages.map((lang, index) => (
                    <Picker.Item
                      key={`lang-item-${index}`}
                      label={lang.label}
                      value={lang.value}
                    />
                  ))}
                </Picker>
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
                <Text style={[styles.label]}>Nacionalidad:</Text>
              </View>
              <View
                style={{
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
                  style={{width: '100%', height: 48}} itemStyle={{height: 48}}
                  selectedValue={formData.nationality}
                  onValueChange={(value) => {
                    setFormData({ ...formData, nationality: value });
                  }}
                >
                  {countries.map((nationality, index) => (
                    <Picker.Item
                      key={`nationality-item-${index}`}
                      label={nationality.label}
                      value={nationality.value}
                    />
                  ))}
                </Picker>
              </View>

              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>País actual de residencia:</Text>
              </View>
              <View
                style={{
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
                  style={{width: '100%', height: 48}} itemStyle={{height: 48}}
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
                <Text style={[styles.label]}>Nivel de estudios:</Text>
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
                placeholder="Secundario completo"
                value={formData.level_of_studies}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    level_of_studies: event.nativeEvent.text,
                  })
                }
              />

              <View style={{ width: "90%" }}>
                <Text style={[styles.label]}>Profesión:</Text>
              </View>
              <View
                style={{
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
                  style={{width: '100%', height: 48}} itemStyle={{height: 48}}
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
                    <Text style={[styles.label]}>Razon de ayuda:</Text>
                </View>
                <View
                    style={{
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
                        style={{width: '100%', height: 48}} itemStyle={{height: 48}}
                        selectedValue={formData.help_reasson}
                        onValueChange={(value) => {
                            setFormData({ ...formData, help_reasson: value });
                        }}
                    >
                        {help_reassons.map((job, index) => (
                            <Picker.Item
                                key={`job-item-${index}`}
                                label={job.label}
                                value={job.value}
                            />
                        ))}
                    </Picker>
                </View>

                <View style={{ width: "90%" }}>
                    <Text style={[styles.label]}>Network:</Text>
                </View>
                <TextInput
                    placeholderTextColor={colors.darkWhite}
                    style={[
                        styles.loginInput,
                        { backgroundColor: colors.smoke, marginTop: 10, marginBottom: 20, },
                    ]}
                    placeholder="Twitter, Facebook, etc"
                    collapsable={true}
                    value={formData.network}
                    onChange={(event) =>
                        setFormData({
                            ...formData,
                            network: event.nativeEvent.text,
                        })
                    }
                />

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
                  { marginBottom: 30, marginTop: 10 },
                ]}
                onPress={submit}
                disabled={!validateTerms}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Bold",
                    textAlign: "center",
                    fontSize: 15,
                    color: colors.white,
                  }}
                >
                  Crear cuenta
                </Text>
              </TouchableOpacity>
            </View>
              {loading ?
                      <View style={styles.loading}>
                          <ActivityIndicator size="large" color="#000000" />
                      </View>
                : null
              }

          </View>
          <View style={{ marginVertical: 10 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
