import React from "react";

import { Text, TouchableOpacity } from "react-native";

import colors from "../../styles/colors";
import styles from "../../styles/styles";

const Button = (props) => {
  const { children = "Button", disabled = false, onPress = () => null } = props;
  const buttonStyles = disabled
    ? styles.diasbledSignUpButton
    : styles.signUpButton;
  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          fontFamily: "Kastelov--Axiforma-Bold",
          color: "white",
          textAlign: "center",
          fontSize: 15,
          color: colors.white,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
