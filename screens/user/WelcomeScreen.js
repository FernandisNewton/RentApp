import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

import AppButton from "../../components/Button1";
import { colorPalette } from "../../utility/Constants";
export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#fff"
      />
      <View style={styles.txtContainer}>
        <Text style={styles.name}>RentiGO</Text>
        <Text style={styles.subtitle}>
          Search PG,Hostel and Rental houses near you.
        </Text>
        <Image source={require("../../assets/house.png")} />
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          onPress={() => navigation.navigate("UserLoginScreen")}
          title="User Login"
          size=""
          backgroundColor="#F2F2F2"
          textColor="#000"
        />
        <AppButton
          title="Owner Login"
          size=""
          backgroundColor="#F2F2F2"
          textColor="#000"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  txtContainer: {
    flex: 1.4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnContainer: {
    flex: 1,
    backgroundColor: "#04BFBF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: "5%",
  },
  name: {
    fontSize: 36,
    fontFamily: "Poppins_700Bold",
    color: colorPalette.black,
  },
  subtitle: {
    fontSize: 24,

    textAlign: "center",
    color: colorPalette.black,
    fontFamily: "Poppins_400Regular",
  },
});
