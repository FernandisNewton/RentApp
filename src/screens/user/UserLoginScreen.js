import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import AppButton from "../../components/Button1";
import { colorPalette } from "../../utility/Constants";
import GetLocation from "react-native-get-location";
export default function UserLoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorPalette.primaryColor}
      />
      <Text style={styles.welcome}>Welcome</Text>
      <View style={styles.container2}>
        <ScrollView style={styles.inputContainer}>
          <TextInput
            label="Email"
            style={{ marginVertical: 20 }}
            mode="outlined"
            keyboardType="email-address"
            outlineColor={colorPalette.primaryColor}
            theme={{
              colors: { primary: "#04BFBF", underlineColor: "transparent" },
            }}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            label="Password"
            textContentType="password"
            style={{ marginVertical: 20 }}
            secureTextEntry={true}
            mode="outlined"
            outlineColor={colorPalette.primaryColor}
            theme={{
              colors: { primary: "#04BFBF", underlineColor: "transparent" },
            }}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <Button
            color={colorPalette.primaryColor}
            mode="contained"
            uppercase={false}
            dark={true}
            labelStyle={{ fontSize: 20 }}
            style={{ height: 60, justifyContent: "center", marginTop: 10 }}
            onPress={() => console.log("hhh")}
          >
            Sign In
          </Button>
          <Button
            color={colorPalette.primaryColor}
            mode="outlined"
            uppercase={false}
            labelStyle={{ fontSize: 20 }}
            style={{ height: 60, justifyContent: "center", marginVertical: 20 }}
            onPress={() => console.log("shdh")}
          >
            Sign Up
          </Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.primaryColor,
    justifyContent: "flex-end",
  },
  container2: {
    backgroundColor: "#fff",
    height: 500,
    paddingHorizontal: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#fff",
    padding: 20,
  },
  inputContainer: {
    marginTop: 80,
    height: 300,
  },
});
