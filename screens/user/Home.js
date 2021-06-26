import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { colorPalette } from "../../utility/Constants";
import { Button, Searchbar, Avatar, Divider } from "react-native-paper";
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
          paddingHorizontal: 15,
        }}
      >
        <View style={styles.card}>
          <View style={styles.content}>
            <Image
              style={styles.cardImage}
              source={require("../../assets/pg1.jpg")}
            ></Image>
            <View>
              <Text style={styles.pgName}>Winston Ghar</Text>
              <Text style={styles.catName}>Boys or girls</Text>
            </View>
          </View>
          <Divider style={{ height: 2, marginTop: 4 }} />
          <View style={styles.price}>
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 18,
                color: colorPalette.black,
              }}
            >
              Daily: $200
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 18,
                color: colorPalette.black,
              }}
            >
              Monthly: $400
            </Text>
          </View>
        </View>
      </ScrollView>
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
  card: {
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  content: {
    height: "75%",
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    height: 120,
    width: 120,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 10,
    marginTop: 5,
  },
  pgName: {
    fontFamily: "Poppins_700Bold",
    color: colorPalette.black,
    fontSize: 20,
  },
  catName: {
    color: colorPalette.black,
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
  },
  price: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
