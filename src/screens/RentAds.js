import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { FAB } from "react-native-paper";
import { colorPalette } from "../utility/Constants";
import { useNavigation } from "@react-navigation/native";

export default function RentAds() {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <Text style={styles.title}>Your Rental Ads</Text>
      <FAB
        style={styles.fab}
        icon="plus"
        label="Add "
        onPress={() => navigation.navigate("MapScreen")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 10,
    backgroundColor: colorPalette.secondaryColor,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
    marginLeft: 15,
    marginTop: 10,
    color: colorPalette.black,
  },
});
