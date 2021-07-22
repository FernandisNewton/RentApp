import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import firebase from "firebase";
import { Button, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import propTypes from "prop-types";
import shortid from "shortid";
import { colorPalette } from "../utility/Constants";
import { PropertyLocationContext } from "../contexts/PropertyLocationContext";
const PostAd = ({ navigation, userState }) => {
  const [image, setImage] = useState(null);
  const [propAddress] = useContext(PropertyLocationContext);
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState(propAddress.address.city);
  const [district, setDistrict] = useState(propAddress.address.subregion);
  const [state, setState] = useState(propAddress.address.region);
  const [country, setCountry] = useState(propAddress.address.country);
  const [pincode, setPincode] = useState(propAddress.address.postalCode);

  const onSubmit = () => {
    navigation.navigate("PGInfo", {
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      landmark: landmark,
      district: district,
      state: state,
      country: country,
      pincode: pincode,
      latitude: propAddress.latitude,
      longitude: propAddress.longitude,
    });
  };
  return (
    <ScrollView
      contentContainerStyle={{
        marginHorizontal: 20,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={styles.title}>Confirm Location</Text>
      <TextInput
        label="Address Line 1"
        mode="outlined"
        style={{ marginBottom: 15 }}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={addressLine1}
        onChangeText={(addressLine1) => setAddressLine1(addressLine1)}
      />
      <TextInput
        label="Address Line 2"
        mode="outlined"
        style={{ marginBottom: 15 }}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={addressLine2}
        onChangeText={(addressLine2) => setAddressLine2(addressLine2)}
      />
      <TextInput
        label="Landmark"
        mode="outlined"
        style={{ marginBottom: 15 }}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={landmark}
        onChangeText={(landmark) => setLandmark(landmark)}
      />
      <TextInput
        label="City"
        mode="outlined"
        style={{ marginBottom: 15 }}
        disabled={city ? true : false}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={city}
        onChangeText={(city) => setCity(city)}
      />
      <TextInput
        label="District"
        mode="outlined"
        style={{ marginBottom: 15 }}
        disabled={district ? true : false}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={district}
        onChangeText={(district) => setDistrict(district)}
      />
      <TextInput
        label="State"
        mode="outlined"
        style={{ marginBottom: 15 }}
        disabled={state ? true : false}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={state}
        onChangeText={(state) => setState(state)}
      />
      <TextInput
        label="Country"
        mode="outlined"
        style={{ marginBottom: 15 }}
        disabled={country ? true : false}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={country}
        onChangeText={(country) => setCountry(country)}
      />
      <TextInput
        label="Pincode"
        mode="outlined"
        style={{ marginBottom: 15 }}
        disabled={pincode ? true : false}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={pincode}
        onChangeText={(pincode) => setPincode(pincode)}
      />
      <Button
        color={colorPalette.primaryColor}
        mode="contained"
        uppercase={true}
        dark={true}
        labelStyle={{ fontSize: 20 }}
        style={{ height: 55, justifyContent: "center", marginTop: 10 }}
        onPress={() => onSubmit()}
      >
        Next
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
    textAlign: "center",

    color: colorPalette.black,
  },
});

export default PostAd;
