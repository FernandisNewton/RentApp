import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Linking,
} from "react-native";
import { Divider, Button } from "react-native-paper";
import { colorPalette } from "../utility/Constants";
import { useNavigation } from "@react-navigation/native";
const Details = ({ route }) => {
  const { item, tenent } = route.params;
  const navigation = useNavigation();

  const dialCall = () => {
    let phoneNumber = "tel:${item.phone}";

    Linking.openURL(phoneNumber);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.detailImage}
        source={{
          uri: item.picture,
        }}
      ></Image>
      <View style={styles.imageContainer}></View>
      <View style={styles.details}>
        <Text style={styles.title}>{item.adTitle}</Text>
        <Text style={styles.tenent}>{tenent}</Text>
        <Text style={styles.title}>Information</Text>
        <View style={styles.Information}>
          <Text style={styles.info}>Room Type: {item.roomType}</Text>
          <Text style={styles.info}>Deposit Type: {item.depositType}</Text>
          <Text style={styles.info}>Deposit Amount: {item.deposit}</Text>
          <Text style={styles.info}>Rent: {item.rentpm}</Text>
        </View>
        <Divider style={{ height: 2 }} />

        <Text style={styles.title}>Address</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{item.addressLine1}</Text>
          <Text style={styles.address}>{item.addressLine2}</Text>
          <Text style={styles.address}>{item.landmark}</Text>
          <Text style={styles.address}>{item.city}</Text>
          <Text style={styles.address}>{item.district}</Text>
          <Text style={styles.address}>{item.state}</Text>
          <Text style={styles.address}>{item.country}</Text>
          <Text style={styles.address}>{item.pincode}</Text>
        </View>
        <Divider style={{ height: 2 }} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            color={colorPalette.primaryColor}
            mode="contained"
            uppercase={true}
            dark={true}
            labelStyle={{ fontSize: 15 }}
            style={{
              height: 50,
              justifyContent: "center",
              marginTop: 15,

              width: "48%",
            }}
            onPress={() => dialCall()}
          >
            Contact
          </Button>
          <Button
            color={colorPalette.primaryColor}
            mode="contained"
            uppercase={true}
            dark={true}
            labelStyle={{ fontSize: 15 }}
            style={{
              height: 50,
              justifyContent: "center",
              marginTop: 15,

              width: "48%",
            }}
            onPress={() => navigation.navigate("Direction")}
          >
            Get Direction
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  detailImage: {
    height: 260,
    width: "100%",
  },
  details: {
    height: 530,
    width: "100%",
    elevation: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colorPalette.white,
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    marginTop: 10,

    color: colorPalette.black,
  },
  tenent: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,

    color: colorPalette.black,
  },
  info: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,

    color: colorPalette.black,
  },
  address: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    lineHeight: 18,
    color: colorPalette.black,
  },
  addressContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Details;
