import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { colorPalette } from "../utility/Constants";
import { Divider } from "react-native-paper";
export default function Card() {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image
          style={styles.cardImage}
          source={require("../assets/pg1.jpg")}
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
  );
}

const styles = StyleSheet.create({
  card: {
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 8,
    marginTop: 10,
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
