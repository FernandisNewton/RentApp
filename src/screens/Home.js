import React, { useState, useEffect, useContext } from "react";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colorPalette } from "../utility/Constants";
import { Button, Searchbar, Avatar, Divider } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { signOut } from "../redux/action/auth";
import Card from "../components/Card";
import LocationLoading from "../screens/LocationLoading";
import * as Location from "expo-location";
import { UserLocationContext } from "../contexts/UserLocationContext";
const Home = ({ navigation, signOut }) => {
  const [address, setAddress, loading, setLoading] =
    useContext(UserLocationContext);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      setLoading(true);

      let location = await Location.getCurrentPositionAsync({});

      console.log("LOC", location);
      let curraddress = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })
        .then((result) => {
          console.log("ADDRESS", result);
          setAddress({
            city: result[0].city,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      setLoading(false);
    })();
  }, []);
  const doSignOut = () => {
    signOut();
  };
  if (loading) {
    return <LocationLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorPalette.primaryColor}
      />

      <View style={styles.topContainer}>
        <View style={styles.location}>
          <Entypo name="location" size={24} color={colorPalette.white} />
          <Text style={styles.locationText}>{address.city}</Text>
        </View>
        <TouchableOpacity onPress={() => doSignOut()}>
          <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapDispatchToProps = {
  signOut,
};
Home.propTypes = {
  signOut: propTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Home);
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
    fontSize: 22,
    fontFamily: "Poppins_700Bold",
    marginLeft: 10,
    marginTop: 10,
    color: colorPalette.white,
  },
  logOutText: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    marginLeft: 10,
    marginTop: 10,
    color: colorPalette.white,
  },
  topContainer: {
    paddingBottom: 10,
    paddingHorizontal: 25,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: colorPalette.primaryColor,
  },
});
