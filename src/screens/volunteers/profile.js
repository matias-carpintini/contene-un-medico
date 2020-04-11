import React from "react";
import { getItemAsync, deleteItemAsync } from "expo-secure-store";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import colors from "../../styles/colors";
import { ProfileImg, TitleBar } from "../../styles/styled";
import styles from "../../styles/styles";
import bridge from "../../helpers/bridge";

export default class VolunteerProfileScreen extends React.Component {
  state = {
    token: "",
    user: {
      state: 0,
      img: "",
      key: "",
      id_medics: [],
      is_health_professional: false,
      user_role: "",
      _id: "",
      full_name: "",
      level_of_studies: "",
      profession: "",
      home: "",
      gender: "",
      email: "",
      phone: "",
      country: "",
      nationality: "",
      birthdate: "",
      resume: "",
      courses: "",
      workspace: "",
      position: "",
      childs: 0,
      marital_status: "",
      people_you_live_with: 0,
      dependents: "",
      __v: 0,
    },
  };

  createForgetMeAlert = () => {
    const { token } = this.state;
    Alert.alert(
      "Estás seguro?",
      "Esta acción no puede ser revertida",
      [
        {
          text: "No, cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Sí, olvídame",
          onPress: () => {
            bridge
              .deleteUser(token)
              .then((response) => {
                deleteItemAsync(token);
              })
              .then(() => deleteItemAsync("user"))
              .then(() => this.props.navigation.navigate("VolunteerWelcome"));
          },
        },
      ],
      { cancelable: false }
    );
  };

  back = () => {
    this.props.navigation.navigate("VolunteerFeed");
  };

  edit = () => {
    this.props.navigation.navigate("VolunteerEdit");
  };

  logout = () => {
    deleteItemAsync("user")
      .then(() => deleteItemAsync("token"))
      .then(this.props.navigation.navigate("VolunteerWelcome"));
  };

  componentDidMount() {
    const { user } = this.state;
    if (!user.email) {
      getItemAsync("user").then((userData) =>
        this.setState({ user: JSON.parse(userData) })
      );
    }
    if (!user.token) {
      getItemAsync("token").then((savedToken) =>
        this.setState({ token: savedToken })
      );
    }
  }

  render() {
    const { user, token } = this.state;
    return (
      <SafeAreaView
        style={{
          backgroundColor: colors.white,
          flexDirection: "column",
          flex: 1,
        }}
      >
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <TitleBar style={{ marginBottom: 10, alignItems: "center" }}>
          <TouchableOpacity onPress={this.back}>
            <SimpleLineIcon
              name="arrow-left-circle"
              size={20}
              color={colors.gray}
            />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Perfil</Text>
          <TouchableOpacity onPress={this.edit}>
            <SimpleLineIcon name="magic-wand" size={20} color={colors.gray} />
          </TouchableOpacity>
        </TitleBar>

        <ScrollView>
          <View style={styles.cardDetails}>
            <ProfileImg
              style={{
                marginTop: 30,
                backgroundColor: colors.lightBlue,
                width: 150,
                height: 150,
              }}
            >
              {user.img ? (
                <Image
                  resizeMethod="scale"
                  source={{ uri: user.img }}
                  style={{ width: 150, height: 150 }}
                />
              ) : null}
            </ProfileImg>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.cardDetailsTitle}>{user.full_name}</Text>
            </View>
            <View
              style={{
                alignItems: "flex-start",
                marginVertical: 10,
                paddingHorizontal: 22,
              }}
            >
              <Text style={styles.dateReference}>Número de teléfono</Text>
              <Text style={styles.dateDetails}>{user.phone}</Text>

              <Text style={styles.dateReference}>Correo electrónico</Text>
              <Text style={styles.dateDetails}>{user.email}</Text>

              <Text style={styles.dateReference}>Domicilio</Text>
              <Text style={styles.dateDetails}>{user.home}</Text>

              <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Nacionalidad</Text>
                  <Text style={styles.dateDetails}>{user.nationality}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Idioma</Text>
                  <Text style={styles.dateDetails}>{user.lang}</Text>
                </View>
              </View>

              <Text style={styles.dateReference}>Nivel de estudio</Text>
              <Text style={styles.dateDetails}>{user.level_of_studies}</Text>

              <Text style={styles.dateReference}>Profesión</Text>
              <Text style={styles.dateDetails}>{user.profession}</Text>

              <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Nacimiento</Text>
                  <Text style={styles.dateDetails}>{user.birthday}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Género</Text>
                  <Text style={styles.dateDetails}>{user.gender}</Text>
                </View>
              </View>

              <Text style={styles.dateReference}>DNI</Text>
              <Text style={styles.dateDetails}>{user.dni}</Text>

              <TouchableOpacity
                style={[
                  styles.signUpButton,
                  {
                    backgroundColor: colors.green,
                    width: "100%",
                    paddingHorizontal: 20,
                    marginTop: 20,
                  },
                ]}
                onPress={this.logout}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Medium",
                    textAlign: "center",
                    fontSize: 12,
                    color: colors.white,
                  }}
                >
                  Cerrar sesión
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={this.createForgetMeAlert}>
            <Text
              style={{
                marginTop: 0,
                fontFamily: "Kastelov--Axiforma-Medium",
                fontSize: 14,
                color: colors.darkRed,
                textAlign: "center",
              }}
            >
              Eliminar mi cuenta
            </Text>
          </TouchableOpacity>
          <View style={{ marginVertical: 20 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
