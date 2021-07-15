import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

import AppButton from "../components/Button1";
import { colorPalette } from "../utility/Constants";
import { Button } from "react-native-paper";
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

        <Image style={styles.image} source={require("../assets/Group.png")} />
      </View>
      <View style={styles.btnContainer}>
        <Button
          color={colorPalette.white}
          mode="contained"
          uppercase={false}
          labelStyle={{ fontSize: 23, fontFamily: "Poppins_700Bold" }}
          style={{
            height: 60,
            width: "80%",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("UserLoginScreen")}
        >
          Sign In
        </Button>
        <Button
          color={colorPalette.white}
          mode="contained"
          uppercase={false}
          labelStyle={{ fontSize: 20, fontFamily: "Poppins_700Bold" }}
          style={{
            height: 60,
            width: "80%",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("UserRegistration")}
        >
          Create an account
        </Button>
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
    backgroundColor: colorPalette.primaryColor,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
    justifyContent: "space-evenly",
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
