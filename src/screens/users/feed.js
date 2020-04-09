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
  IconIndicatorC
} from "../../styles/styled";
import styles from "../../styles/styles";
import bridge from "../../helpers/bridge";

export default class UserFeedScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount(){
    const { token } = this.state;
    bridge
      .getUsers(token)
      .then((users) => this.setState({ users }))
      .catch((error) => console.error(error));
  }

  myProfile = () => {
    this.props.navigation.navigate("UserProfile");
  };

  userProfile = () => {
    this.props.navigation.navigate("UserProfile");
  };

  volunteerProfile = () => {
    this.props.navigation.navigate("VolunteerProfile");
  };

  render() {
    return (
      <AreaSafe>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <TitleBarPosition
          style={{
            backgroundColor: colors.white,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                margin: 0,
                justifyContent: "center",
                alignItems: "center",
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
              <TouchableOpacity onPress={this.myProfile}>
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
              fontSize: 18,
            }}
          >
            Tu aliado:
          </Text>

          {/* If any: */}
          <TouchableOpacity onPress={this.userProfile}>
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
              marginBottom: 10,
            }}
          >
            #EmpatiaParaHeroes
          </Text>
          {this.state.users.map((user, id) => (
            <TouchableOpacity onPress={() => this.userProfile(user)} key={id}>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <IconIndicatorC
                  style={{ marginLeft: 20, backgroundColor: colors.smoke }}
                >
                  {user.img ? (
                    <Image
                      resizeMethod="scale"
                      source={{ uri: user.img }}
                      style={{ width: 150, height: 150 }}
                    />
                  ) : null}
                </IconIndicatorC>
                <View style={{ width: 250 }}>
                  <Text style={styles.iconItemRef}>{user.full_name}</Text>
                  <Text style={styles.iconItemDesc}>
                    {user.resume
                      ? user.resume > 45
                        ? user.resume.substring(0, 45) + "..."
                        : user.resume
                      : "Sin biografía."}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View style={{ marginTop: 20 }} />
        </ScrollView>
      </AreaSafe>
    );
  }
}
