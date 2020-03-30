import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import colors from "../styles/colors";
import { IconIndicatorC, TitleBar } from "../styles/styled";
import styles from "../styles/styles";

export default class FeedbackScreen extends React.Component {
  back = () => {
    this.props.navigation.navigate("Feed");
  };

  submit = () => {
    this.props.navigation.navigate("Feed");
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
        <KeyboardAvoidingView
          behavior={Platform.select({ android: "height", ios: "padding" })}
          style={{ flex: 1 }}
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
            <Text style={styles.pageTitle}>Feedback</Text>
            <SimpleLineIcon
              name="user-unfollow"
              size={20}
              color={colors.gray}
            />
          </TitleBar>

          <ScrollView>
            <Text
              style={{
                marginHorizontal: 20,
                marginTop: 24,
                marginBottom: 10,
                fontFamily: "Kastelov--Axiforma-Bold",
                color: colors.red,
                fontSize: 18
              }}
            >
              Terminar relación con:
            </Text>

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

            <View style={styles.cardDetails}>
              <View
                style={{
                  alignItems: "flex-start",
                  marginVertical: 10,
                  paddingHorizontal: 22
                }}
              >
                <TextInput
                  placeholderTextColor={colors.darkWhite}
                  style={[
                    styles.loginInput,
                    {
                      backgroundColor: colors.white,
                      textAlignVertical: "top",
                      width: "100%"
                    }
                  ]}
                  placeholder="Por qué quieres terminar esta relación?"
                  collapsable={true}
                  multiline
                  numberOfLines={10}
                ></TextInput>

                <View>
                  <TouchableOpacity
                    style={[
                      styles.signUpButton,
                      {
                        backgroundColor: colors.green,
                        width: "auto",
                        paddingHorizontal: 20,
                        marginTop: 20
                      }
                    ]}
                    onPress={this.submit}
                  >
                    <Text
                      style={{
                        fontFamily: "Kastelov--Axiforma-Bold",
                        textAlign: "center",
                        fontSize: 15,
                        color: colors.white
                      }}
                    >
                      Enviar feedback
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
