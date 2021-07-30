import React, { useEffect, useState } from "react";
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
  const [tenent, setTenent] = useState("loading");
  const nav = () => {
    navigation.navigate("Details", { item, tenent });
  };
  useEffect(() => {
    if (
      item.tenentType.tenentBoys == true &&
      item.tenentType.tenentGirls == true
    ) {
      setTenent("Boys/Girls");
    } else if (item.tenentType.tenentBoys == true) {
      setTenent("Boys");
    } else if (item.tenentType.tenentGirls == true) {
      setTenent("Girls");
    } else {
      setTenent("Family");
    }
  }, []);
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
            <Text style={styles.catName}>{tenent}</Text>
          </View>
        </View>
        <Divider style={{ height: 2, marginTop: 4 }} />
        <View style={styles.price}>
          {/* <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 18,
              color: colorPalette.black,
            }}
          ></Text> */}
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 18,
              color: colorPalette.black,
            }}
          >
            Rent Per Month: Rs.{item.rentpm}
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
    justifyContent: "flex-end",
    marginRight: 15,
  },
});
