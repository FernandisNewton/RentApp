import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { colorPalette } from "../utility/Constants";

const Completed = ({ navigation }) => {
  useEffect(() => {
    setTimeout(function () {
      navigation.navigate("RootNav");
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animation/completed.json")}
        autoPlay
        loop
      />
      <Text style={styles.text}></Text>
    </View>
  );
};

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

export default Completed;
