import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Picker,
  Image,
} from "react-native";
import { Button, TextInput, Chip, RadioButton } from "react-native-paper";
import * as Progress from "react-native-progress";

import { colorPalette } from "../utility/Constants";
import * as ImagePicker from "expo-image-picker";
import shortid from "shortid";
import { connect } from "react-redux";
import propTypes from "prop-types";
import firebase from "firebase";
const PGInfo = ({ route, navigation, userState }) => {
  const [adTitle, setAdTitle] = useState("");
  const [rentpm, setRentpm] = useState("");
  const [tenentBoys, setTenentBoys] = useState(false);
  const [tenentGirls, setTenentGirls] = useState(false);
  const [tenentFamily, setTenentFamily] = useState(false);
  const [roomType, setRoomType] = useState("Room type");
  const [value, setValue] = useState("fixed");
  const [deposit, setDeposit] = useState(null);
  const [phone, setPhone] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(0);

  const {
    addressLine1,
    addressLine2,
    city,
    landmark,
    district,
    state,
    country,
    pincode,
    latitude,
    longitude,
  } = route.params;

  const uploadImage = async (response) => {
    setImageUploading(true);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", response.uri, true);
      xhr.send(null);
    });

    const reference = firebase.storage().ref(shortid.generate());
    const task = reference.put(blob);

    task.on("state_changed", (taskSnapshot) => {
      const percentage =
        taskSnapshot.bytesTransferred / taskSnapshot.totalBytes;
      console.log(percentage);
      setUploadStatus(percentage);
    });
    task.then(async () => {
      await blob.close();
      const url = await reference.getDownloadURL();
      console.log(url);
      setImage(url);
      setImageUploading(false);
    });
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      uploadImage(result);
    }
  };
  if (imageUploading) {
    console.log(uploadStatus);
  }
  const addData = async () => {
    try {
      const uid = shortid.generate();
      await firebase.database().ref(`/posts/${uid}`).set({
        id: uid,
        addressLine1,
        addressLine2,
        city,
        landmark,
        district,
        state,
        country,
        pincode,
        latitude,
        longitude,
        adTitle,
        rentpm,
        roomType,
        tenentType: {
          tenentBoys,
          tenentGirls,
          tenentFamily,
        },
        depositType: value,
        deposit,
        phone,
        picture: image,
        date: Date.now(),
        by: userState.name,
      });

      navigation.navigate("Completed");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        marginHorizontal: 20,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={styles.title}>Enter PG Details</Text>
      {image && (
        <Image
          style={styles.tinyLogo}
          source={{
            uri: image,
          }}
        />
      )}
      {imageUploading ? (
        <Progress.Circle
          progress={uploadStatus}
          color={colorPalette.primaryColor}
          size={130}
          thickness={8}
          showsText={true}
          textStyle={{
            fontSize: 25,
            fontWeight: "bold",

            color: colorPalette.primaryColor,
          }}
          style={{ alignSelf: "center" }}
        />
      ) : (
        <Button
          color={colorPalette.primaryColor}
          mode="outlined"
          uppercase={true}
          loading={imageUploading}
          dark={true}
          labelStyle={{ fontSize: 20 }}
          style={{
            height: 55,
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 15,
          }}
          onPress={() => pickImage()}
        >
          upload photo
        </Button>
      )}
      <TextInput
        label="AD - Title"
        mode="outlined"
        style={{ marginBottom: 15 }}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={adTitle}
        onChangeText={(adTitle) => setAdTitle(adTitle)}
      />
      <Text style={styles.formStyle}>Tenent type:</Text>
      <View style={styles.tenent}>
        <Chip
          mode="outlined"
          selected={tenentBoys}
          textStyle={{ fontFamily: "Poppins_500Medium" }}
          onPress={() => setTenentBoys(!tenentBoys)}
        >
          Boys
        </Chip>
        <Chip
          mode="outlined"
          selected={tenentGirls}
          textStyle={{ fontFamily: "Poppins_500Medium" }}
          onPress={() => setTenentGirls(!tenentGirls)}
        >
          Girls
        </Chip>
        <Chip
          mode="outlined"
          selected={tenentFamily}
          textStyle={{ fontFamily: "Poppins_500Medium" }}
          onPress={() => setTenentFamily(!tenentFamily)}
        >
          Family
        </Chip>
      </View>
      <Text style={styles.formStyle}>Select Room Type</Text>
      <Picker
        selectedValue={roomType}
        style={{ height: 50 }}
        prompt="Select room type"
        onValueChange={(itemValue, itemIndex) => setRoomType(itemValue)}
      >
        <Picker.Item label="1BHK" value="1bhk" />
        <Picker.Item label="2BHK" value="2bhk" />
        <Picker.Item label="3BHK" value="3bhk" />
      </Picker>
      <Text style={styles.formStyle}>Security Deposit Type:</Text>

      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <View style={styles.radio}>
          <RadioButton.Item label="Fixed" value="fixed" position="leading" />
          <RadioButton.Item
            label="Monthly"
            value="monthly"
            position="leading"
          />
        </View>
      </RadioButton.Group>
      <TextInput
        label="Security Deposit"
        mode="outlined"
        keyboardType="phone-pad"
        style={{ marginBottom: 15 }}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={deposit}
        onChangeText={(deposit) => setDeposit(deposit)}
      />

      <TextInput
        label="Contact Number"
        mode="outlined"
        keyboardType="phone-pad"
        style={{ marginBottom: 15 }}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
      />
      <TextInput
        label="Expected rent per month (INR)"
        mode="outlined"
        keyboardType="phone-pad"
        style={{ marginBottom: 15 }}
        outlineColor={colorPalette.primaryColor}
        theme={{
          colors: { primary: "#04BFBF", underlineColor: "transparent" },
        }}
        value={rentpm}
        onChangeText={(rentpm) => setRentpm(rentpm)}
      />

      <Button
        color={colorPalette.primaryColor}
        mode="contained"
        uppercase={true}
        dark={true}
        labelStyle={{ fontSize: 20 }}
        style={{
          height: 55,
          justifyContent: "center",
          marginTop: 15,
          marginBottom: 15,
        }}
        onPress={() => addData()}
      >
        Create Rental ad
      </Button>
    </ScrollView>
  );
};
const mapStateToProps = (state) => ({
  userState: state.auth.user,
});

PGInfo.propTypes = {
  userState: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(PGInfo);

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
    textAlign: "center",

    color: colorPalette.black,
  },
  tinyLogo: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 15,
  },
  tenent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  formStyle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    marginBottom: 3,
  },
  radio: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
