import React from "react";
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

export default class UserProfileScreen extends React.Component {
  createForgetMeAlert = () => {
    Alert.alert(
      "Estás seguro?",
      "Esta acción no puede ser revertida",
      [
        {
          text: "No, cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sí, olvídame", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  back = () => {
    this.props.navigation.navigate("UserFeed");
  };

  edit = () => {
    this.props.navigation.navigate("UserEdit");
  };

  feedback = () => {
    this.props.navigation.navigate("Feedback");
  };

  render() {
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

          {/* For unfollow: (remove onPress if are not contained, change for edit) */}
          <TouchableOpacity onPress={this.feedback}>
            <SimpleLineIcon
              name="user-unfollow"
              size={20}
              color={colors.gray}
            />
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
              <Image
                source={require("../../assets/images/jp.jpeg")}
                style={{ width: 150, height: 150 }}
              />
            </ProfileImg>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.cardDetailsTitle}>Juan Pablo Villani</Text>
            </View>
            <View
              style={{
                alignItems: "flex-start",
                marginVertical: 10,
                paddingHorizontal: 22,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Edad</Text>
                  <Text style={styles.dateDetails}>18 Años</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Sexo</Text>
                  <Text style={styles.dateDetails}>Hombre</Text>
                </View>
              </View>

              <Text style={styles.dateReference}>Lugar de trabajo</Text>
              <Text style={styles.dateDetails}>
                Hospital Naval "Dr. Pedro Mallo"
              </Text>

              <Text style={styles.dateReference}>Puesto/rol</Text>
              <Text style={styles.dateDetails}>
                Administrador de lavandería de hospital
              </Text>

              <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Nacionalidad</Text>
                  <Text style={styles.dateDetails}>Argentina</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Idioma</Text>
                  <Text style={styles.dateDetails}>Español</Text>
                </View>
              </View>

              <Text style={styles.dateReference}>Profesión</Text>
              <Text style={styles.dateDetails}>Fullstack web dev.</Text>

              <Text style={styles.dateReference}>Nivel de estudio</Text>
              <Text style={styles.dateDetails}>
                Eduación secundaria completa
              </Text>

              <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Estado civil</Text>
                  <Text style={styles.dateDetails}>Casado</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.dateReference}>Hijos</Text>
                  <Text style={styles.dateDetails}>3</Text>
                </View>
              </View>

              <Text style={styles.dateReference}>DNI</Text>
              <Text style={styles.dateDetails}>43.589.435</Text>

              <Text style={styles.dateReference}>Motivo de contención</Text>
              <Text style={styles.dateDetails}>
                Pariatur ea laboris consectetur minim commodo officia nulla eu.
              </Text>

              {/* If !contained */}
              {/* <TouchableOpacity
                style={[
                  styles.signUpButton,
                  {
                    backgroundColor: colors.green,
                    width: "100%",
                    paddingHorizontal: 20,
                    marginTop: 20
                  }
                ]}
                onPress={this.contain}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Medium",
                    textAlign: "center",
                    fontSize: 12,
                    color: colors.white
                  }}
                >
                  Contener
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={[
                  styles.signUpButton,
                  {
                    backgroundColor: colors.blue,
                    width: "100%",
                    paddingHorizontal: 20,
                    marginTop: 20,
                  },
                ]}
                onPress={this.contain}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Medium",
                    textAlign: "center",
                    fontSize: 12,
                    color: colors.white,
                  }}
                >
                  Llamar por teléfono
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.signUpButton,
                  {
                    backgroundColor: colors.green,
                    width: "100%",
                    paddingHorizontal: 20,
                    marginTop: 10,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Medium",
                    textAlign: "center",
                    fontSize: 12,
                    color: colors.white,
                  }}
                >
                  Hablar por WhatsApp
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
