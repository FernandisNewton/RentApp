import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { colorPalette } from "../utility/Constants";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export default function Card({ item, userDetails }) {
  const navigation = useNavigation();
  const nav = () => {
    navigation.navigate("Details", { item });
  };
  return (
    <TouchableOpacity onPress={nav}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Image
            style={styles.cardImage}
            source={{
              uri: item.picture,
            }}
          ></Image>
          <View>
            <Text style={styles.pgName}>{item.adTitle}</Text>
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
            Rent
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 18,
              color: colorPalette.black,
            }}
          >
            Monthly: Rs.{item.rentpm}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 8,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    width: "95%",
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
