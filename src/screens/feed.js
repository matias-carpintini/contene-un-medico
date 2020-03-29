import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import colors from "../styles/colors";
import {
  AreaSafe,
  IconView,
  TitleBarMenuIcons,
  TitleBarPosition,
  IconIndicatorC,
  ProfileImg
} from "../styles/styled";
import styles from "../styles/styles";

export default class FeedScreen extends React.Component {
  medicProfile = () => {
    this.props.navigation.navigate("MedicProfile");
  };

  userProfile = () => {
    this.props.navigation.navigate("UserProfile");
  }

  render() {
    const user = (
      <View>
        <Text
          style={{
            marginHorizontal: 20,
            marginTop: 24,
            marginBottom: 10,
            fontFamily: "Kastelov--Axiforma-Bold",
            color: colors.green,
            fontSize: 18
          }}
        >
          Tus adopciones:
        </Text>

        {/* If any: */}
        <TouchableOpacity onPress={this.medicProfile}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <IconIndicatorC
                style={{ marginLeft: 20, backgroundColor: colors.smoke }}
              >
                <Image
                  source={require("../assets/images/gary.jpg")}
                  style={{ width: 80, height: 80, borderRadius: 30 }}
                ></Image>
              </IconIndicatorC>
              <View style={{ width: 250 }}>
                <Text style={styles.iconItemRef}>Gary Vee</Text>
                <Text style={styles.iconItemDesc}>
                  Suspendisse ullamcorper nisi a ultrices porta.
                </Text>
              </View>
            </View>
          </TouchableOpacity>

        {/* Else */}
        {/* <Text
          style={{
            marginHorizontal: 20,
            marginTop: 0,
            marginBottom: 20,
            fontFamily: "Kastelov--Axiforma-Medium",
            color: colors.red,
            fontSize: 14
          }}
        >
          No tienes a nadie en adopción 😞
        </Text> */}

        <Text
          style={{
            margin: 24,
            fontFamily: "Kastelov--Axiforma-Bold",
            color: colors.blue,
            fontSize: 18,
            marginBottom: 10
          }}
        >
          #EmpatiaParaHeroes
        </Text>
        <TouchableOpacity onPress={this.medicProfile}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <IconIndicatorC
              style={{ marginLeft: 20, backgroundColor: colors.smoke }}
            >
              <Image
                source={require("../assets/images/jp.jpeg")}
                style={{ width: 80, height: 80, borderRadius: 30 }}
              ></Image>
            </IconIndicatorC>
            <View style={{ width: 250 }}>
              <Text style={styles.iconItemRef}>Juan Pablo Villani</Text>
              <Text style={styles.iconItemDesc}>
                Suspendisse ullamcorper nisi a ultrices porta.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.medicProfile}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <IconIndicatorC
              style={{ marginLeft: 20, backgroundColor: colors.smoke }}
            >
              <Image
                source={require("../assets/images/juan.jpeg")}
                style={{ width: 80, height: 80, borderRadius: 30 }}
              ></Image>
            </IconIndicatorC>
            <View style={{ width: 250 }}>
              <Text style={styles.iconItemRef}>Juan</Text>
              <Text style={styles.iconItemDesc}>
                Suspendisse ullamcorper nisi a ultrices porta.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.medicProfile}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <IconIndicatorC
              style={{ marginLeft: 20, backgroundColor: colors.smoke }}
            >
              <Image
                source={require("../assets/images/matias.png")}
                style={{ width: 80, height: 80, borderRadius: 30 }}
              ></Image>
            </IconIndicatorC>
            <View style={{ width: 250 }}>
              <Text style={styles.iconItemRef}>Matias Carpintini</Text>
              <Text style={styles.iconItemDesc}>
                Suspendisse ullamcorper nisi a ultrices porta.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.medicProfile}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <IconIndicatorC
              style={{ marginLeft: 20, backgroundColor: colors.smoke }}
            >
              <Image
                source={require("../assets/images/facu.jpg")}
                style={{ width: 80, height: 80, borderRadius: 30 }}
              ></Image>
            </IconIndicatorC>
            <View style={{ width: 250 }}>
              <Text style={styles.iconItemRef}>Facundo Momigliano</Text>
              <Text style={styles.iconItemDesc}>
                Suspendisse ullamcorper nisi a ultrices porta.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.medicProfile}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <IconIndicatorC
              style={{ marginLeft: 20, backgroundColor: colors.smoke }}
            >
              <Image
                source={require("../assets/images/saul.jpeg")}
                style={{ width: 80, height: 80, borderRadius: 30 }}
              ></Image>
            </IconIndicatorC>
            <View style={{ width: 250 }}>
              <Text style={styles.iconItemRef}>Saul Israel</Text>
              <Text style={styles.iconItemDesc}>
                Suspendisse ullamcorper nisi a ultrices porta.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );

    const medic = (
      <View>
        {/* If contained: */}
        {/* <View style={styles.cardDetails}>
          <ProfileImg
            style={{
              marginTop: 30,
              backgroundColor: colors.lightBlue,
              width: 150,
              height: 150
            }}
          >
            <Image
              source={require("../assets/images/jp.jpeg")}
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
              paddingHorizontal: 22
            }}
          >
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

            <Text style={styles.dateReference}>Nivel de estudio</Text>
            <Text style={styles.dateDetails}>Eduación secundaria completa</Text>

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
            
            <TouchableOpacity
              style={[
                styles.signUpButton,
                {
                  backgroundColor: colors.blue,
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
                  marginTop: 10
                }
              ]}
            >
              <Text
                style={{
                  fontFamily: "Kastelov--Axiforma-Medium",
                  textAlign: "center",
                  fontSize: 12,
                  color: colors.white
                }}
              >
                Hablar por WhatsApp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.signUpButton,
            {
              alignItems: "center",
              backgroundColor: "transparent",
              width: "100%",
              paddingHorizontal: 20,
              marginTop: 0,
              marginBottom: 20
            }
          ]}
        >
          <Text
            style={{
              fontFamily: "Kastelov--Axiforma-Medium",
              textAlign: "center",
              fontSize: 12,
              color: colors.darkRed
            }}
          >
            Romper relación
          </Text>
        </TouchableOpacity> */}
        {/* else */}
        <View style={styles.cardDetails}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/images/space-discovery.png")}
              style={{ height: 400, width: "100%" }}
            />
            <Text
              style={{
                marginBottom: -60,
                marginTop: 40,
                fontFamily: "Kastelov--Axiforma-Bold",
                fontSize: 18,
                color: colors.green
              }}
            >
              #EmpatiaParaHeroes
            </Text>
            <Text style={styles.description}>
              Una app donde conectamos a héroes modernos con voluntarios de la
              escucha.
            </Text>
            {/* <TouchableOpacity
              style={[styles.loginButton]}
            >
              <Text
                style={{
                  fontFamily: "Kastelov--Axiforma-Bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 15
                }}
              >
                Buscar empatía
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={[styles.loginButton, { backgroundColor: colors.gray }]}
              disabled
            >
              <Text
                style={{
                  fontFamily: "Kastelov--Axiforma-Bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 15
                }}
              >
                Buscando empatía...
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

    return (
      <AreaSafe>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <TitleBarPosition
          style={{
            backgroundColor: colors.white
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                margin: 0,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../assets/images/aquiestoy.png")}
                style={{ resizeMode: "contain", width: 130, height: 40 }}
              />
            </View>
          </TouchableOpacity>

          <TitleBarMenuIcons>
            <IconView>
              <TouchableOpacity>
                <SimpleLineIcon
                  name="support"
                  size={20}
                  style={{ marginTop: 7, color: colors.gray }}
                />
              </TouchableOpacity>
            </IconView>
            <IconView>
              <TouchableOpacity onPress={this.userProfile}>
                <SimpleLineIcon
                  name="user"
                  size={20}
                  style={{ marginTop: 7, color: colors.gray }}
                />
              </TouchableOpacity>
            </IconView>
          </TitleBarMenuIcons>
        </TitleBarPosition>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {user}
          {/* {medic} */}
          <View style={{marginTop: 20}}/>
        </ScrollView>
      </AreaSafe>
    );
  }
}
