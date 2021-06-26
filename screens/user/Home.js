import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { colorPalette } from "../../utility/Constants";
import { Button, Searchbar, Avatar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import BottomNavigationBar from "../../components/BottomNavigationBar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorPalette.primaryColor}
      />
      <View style={styles.topContainer}>
        <View style={styles.location}>
          <Entypo name="location" size={30} color={colorPalette.white} />
          <Text style={styles.locationText}>Sirsi</Text>
        </View>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search places"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ marginRight: 40 }}
          />
          <Avatar.Text size={46} label="NF" />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      ></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.white,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 28,
    fontFamily: "Poppins_700Bold",
    marginLeft: 10,
    marginTop: 14,
    color: colorPalette.white,
  },
  topContainer: {
    paddingBottom: 30,
    paddingHorizontal: 25,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    marginBottom: 10,
    backgroundColor: colorPalette.primaryColor,
  },
});
