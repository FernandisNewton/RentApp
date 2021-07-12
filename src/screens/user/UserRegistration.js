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
import propTypes from "prop-types";
import { signUp } from "../../redux/action/auth";
import { connect } from "react-redux";
import Firebase from "../../services/Firebase";
const UserRegistration = ({ signUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const doSignUp = async () => {
    signUp({ name, email, phone, password });
    console.log(name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorPalette.primaryColor}
      />
      <Text style={styles.welcome}>Register</Text>
      <View style={styles.container2}>
        <ScrollView style={styles.inputContainer}>
          <TextInput
            label="Name"
            style={{ marginVertical: 10 }}
            mode="outlined"
            outlineColor={colorPalette.primaryColor}
            theme={{
              colors: { primary: "#04BFBF", underlineColor: "transparent" },
            }}
            value={name}
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            label="Email"
            style={{ marginVertical: 10 }}
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
            label="Phone"
            style={{ marginVertical: 10 }}
            mode="outlined"
            keyboardType="phone-pad"
            outlineColor={colorPalette.primaryColor}
            theme={{
              colors: { primary: "#04BFBF", underlineColor: "transparent" },
            }}
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
          />
          <TextInput
            label="Password"
            textContentType="password"
            style={{ marginVertical: 10 }}
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
            loading={loading}
            labelStyle={{ fontSize: 20, fontFamily: "Poppins_700Bold" }}
            style={{
              height: 60,
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 10,
              borderRadius: 10,
            }}
            onPress={() => doSignUp()}
          >
            Create Account
          </Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const mapDispatchToProps = {
  signUp: (data) => signUp(data),
};
UserRegistration.propTypes = {
  signUp: propTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(UserRegistration);

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
    marginTop: 50,
    height: 300,
  },
});
