import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View
} from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import colors from "../styles/colors";
import {
  AreaSafe,
  IconView,
  TitleBarMenuIcons,
  TitleBarPosition
} from "../styles/styled";

export default class FeedScreen extends React.Component {
  notifications = () => {
    this.props.navigation.navigate("Notifications");
  };

  userProfile = () => {
    this.props.navigation.navigate("UserProfile");
  };

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
                source={require("../assets/images/aquiestoy.png")}
                style={{ resizeMode: "contain", width: 130, height: 40 }}
              />
            </View>
          </TouchableOpacity>

          <TitleBarMenuIcons>
            <IconView>
              <TouchableOpacity onPress={this.notifications}>
                <SimpleLineIcon
                  name="bell"
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
        ></ScrollView>
      </AreaSafe>
    );
  }
}
