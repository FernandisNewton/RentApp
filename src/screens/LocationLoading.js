import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { colorPalette } from "../utility/Constants";
export default function LocationLoading() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animation/Location.json")}
        autoPlay
        loop
      />
      <Text style={styles.text}>Finding Location...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    marginTop: 190,
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
    color: colorPalette.black,
  },
});
