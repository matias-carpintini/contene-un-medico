import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import colors from "../../styles/colors";
import { ProfileImg, TitleBar } from "../../styles/styled";
import styles from "../../styles/styles";

export default class VolunteerProfileScreen extends React.Component {
  createForgetMeAlert = () => {
    Alert.alert(
      "Estás seguro?",
      "Esta acción no puede ser revertida",
      [
        {
          text: "No, cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sí, olvídame", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
  
  back = () => {
    this.props.navigation.navigate("VolunteerFeed");
  };

  edit = () => {
    this.props.navigation.navigate("VolunteerEdit");
  };

  logout = () => {
    this.props.navigation.navigate("Welcome");
  };

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: colors.white,
          flexDirection: "column",
          flex: 1
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
                height: 150
              }}
            >
              <Image
                source={require("../../assets/images/matias.png")}
                style={{ width: 150, height: 150 }}
              />
            </ProfileImg>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.cardDetailsTitle}>Matias Carpintini</Text>
            </View>
            <View
              style={{
                alignItems: "flex-start",
                marginVertical: 10,
                paddingHorizontal: 22
              }}
            >
              <Text style={styles.dateReference}>Número de teléfono</Text>
              <Text style={styles.dateDetails}>+54 11-22544456</Text>

              <Text style={styles.dateReference}>Correo electrónico</Text>
              <Text style={styles.dateDetails}>carpintinimatias@gmail.com</Text>

              <Text style={styles.dateReference}>Domicilio</Text>
              <Text style={styles.dateDetails}>
                Bolivar 1054, San Telmo, Buenos Aires, Argentina.
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

              <Text style={styles.dateReference}>Nivel de estudio</Text>
              <Text style={styles.dateDetails}>
                Eduación secundaria completa
              </Text>

              <Text style={styles.dateReference}>Profesión</Text>
              <Text style={styles.dateDetails}>Fullstack web dev.</Text>

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

              <Text style={styles.dateReference}>DNI</Text>
              <Text style={styles.dateDetails}>43.589.435</Text>

              <TouchableOpacity
                style={[
                  styles.signUpButton,
                  {
                    backgroundColor: colors.green,
                    width: "100%",
                    paddingHorizontal: 20,
                    marginTop: 20
                  }
                ]}
                onPress={this.logout}
              >
                <Text
                  style={{
                    fontFamily: "Kastelov--Axiforma-Medium",
                    textAlign: "center",
                    fontSize: 12,
                    color: colors.white
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
                textAlign: "center"
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
