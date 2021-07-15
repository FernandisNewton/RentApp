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
import { colorPalette } from "../utility/Constants";
import { connect } from "react-redux";
import { signIn } from "../redux/action/auth";
import propTypes from "prop-types";

const UserLoginScreen = ({ navigation, signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doSignIn = () => {
    signIn({ email, password });
  };
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
            style={{ height: 60, justifyContent: "center", marginTop: 30 }}
            onPress={() => doSignIn()}
          >
            Sign In
          </Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const mapDispatchToProps = {
  signIn: (data) => signIn(data),
};
UserLoginScreen.propTypes = {
  signIn: propTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(UserLoginScreen);

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
