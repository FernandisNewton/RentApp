import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title, size, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      size === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6,
      },
      backgroundColor && { backgroundColor },
    ]}
  >
    <Text
      style={[
        styles.appButtonText,
        { color: textColor },
        size === "sm" && { fontSize: 14 },
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 17,
    paddingHorizontal: 12,
    width: "100%",
  },
  appButtonText: {
    fontSize: 20,
    color: "#565656",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AppButton;
