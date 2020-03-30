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
import colors from "../../styles/colors";
import {
  AreaSafe,
  IconView,
  TitleBarMenuIcons,
  TitleBarPosition,
  IconIndicatorC,
  ProfileImg
} from "../../styles/styled";
import styles from "../../styles/styles";

export default class VolunteerFeedScreen extends React.Component {
  medicProfile = () => {
    this.props.navigation.navigate("MedicProfile");
  };

  userProfile = () => {
    this.props.navigation.navigate("UserProfile");
  }

  render() {
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
                source={require("../../assets/images/aquiestoy.png")}
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
            Tus héroes:
          </Text>

          {/* If any: */}
          <TouchableOpacity onPress={this.medicProfile}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <IconIndicatorC
                style={{ marginLeft: 20, backgroundColor: colors.smoke }}
              >
                <Image
                  source={require("../../assets/images/gary.jpg")}
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
                  source={require("../../assets/images/jp.jpeg")}
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
                  source={require("../../assets/images/juan.jpeg")}
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
                  source={require("../../assets/images/matias.png")}
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
                  source={require("../../assets/images/facu.jpg")}
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
                  source={require("../../assets/images/saul.jpeg")}
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
          <View style={{ marginTop: 20 }} />
        </ScrollView>
      </AreaSafe>
    );
  }
}
