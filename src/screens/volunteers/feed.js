import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import { getItemAsync } from "expo-secure-store";

import colors from "../../styles/colors";
import {
  AreaSafe,
  IconView,
  TitleBarMenuIcons,
  TitleBarPosition,
  IconIndicatorC,
  ProfileImg,
} from "../../styles/styled";

import styles from "../../styles/styles";
import bridge from "../../helpers/bridge";

const Empty = ({ text = "Aún no tienes ningún aliado 😞" }) => (
  <Text
    style={{
      marginHorizontal: 20,
      marginTop: 0,
      marginBottom: 20,
      fontFamily: "Kastelov--Axiforma-Medium",
      color: colors.red,
      fontSize: 14,
    }}
  >
    {text}
  </Text>
);

const Row = ({
  token = "",
  _id = "",
  onPress = () => null,
  resume = "",
  full_name = "",
  img = "",
}) => {
  const request = (id = "") => {
    bridge
      .voluntaryFriendRequestToMedic(token, id)
      .catch((error) => console.log("error", error));
  };
  return (
    <TouchableOpacity onPress={() => request(_id)}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <IconIndicatorC
          style={{ marginLeft: 20, backgroundColor: colors.smoke }}
        >
          <Image
            source={{ url: img }}
            style={{ width: 80, height: 80, borderRadius: 30 }}
          ></Image>
        </IconIndicatorC>
        <View style={{ width: 250 }}>
          <Text style={styles.iconItemRef}>{full_name}</Text>
          <Text style={styles.iconItemDesc}>{resume}</Text>
          <Text style={styles.iconItemDesc}>Presiona para hacer petición</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const VolunteerFeedScreen = (props) => {
  const [user, setUser] = React.useState({ token: "", data: {} });
  const [medics, setMedics] = React.useState([]);
  const [Heroes, setHeroes] = React.useState(() => Empty);
  const [MyHeroes, setMyHeroes] = React.useState(() => Empty);
  const meProfile = () => {
    props.navigation.navigate("VolunteerProfile");
  };

  const userProfile = () => {
    props.navigation.navigate("UserProfile");
  };

  React.useEffect(() => {
    getItemAsync("token").then((token) => {
      getItemAsync("user").then((user) => {
        setUser({ token: JSON.parse(token), data: JSON.parse(user) });
      });
    });
  }, [user.token]);

  React.useEffect(() => {
    bridge.getUsers(user.token).then((response) => {
      if (response.status) {
        setMedics(response.Medics);
      }
    });
  }, [user.token]);

  React.useEffect(() => {
    if (medics.length > 0) {
      const Rows = () => (
        <>
          {medics.map((medic) => (
            <Row {...medic} token={user.token} />
          ))}
        </>
      );
      setHeroes(() => Rows);
    }
  }, [medics]);

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
            <TouchableOpacity onPress={meProfile}>
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
          Tus aliados:
        </Text>

        <MyHeroes />

        <Text
          style={{
            margin: 24,
            fontFamily: "Kastelov--Axiforma-Bold",
            color: colors.blue,
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          #RedDeEmpatíaGlobal
        </Text>

        <Heroes text="" />

        <View style={{ marginTop: 20 }} />
      </ScrollView>
    </AreaSafe>
  );
};

export default VolunteerFeedScreen;
