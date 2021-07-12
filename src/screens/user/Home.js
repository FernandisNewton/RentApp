import React, { useState } from "react";
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
import { colorPalette } from "../../utility/Constants";
import { Button, Searchbar, Avatar, Divider } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { signOut } from "../../redux/action/auth";
import Card from "../../components/Card";

const Home = ({ navigation, signOut }) => {
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
          <Entypo name="location" size={24} color={colorPalette.white} />
          <Text style={styles.locationText}>Sirsi</Text>
        </View>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search places"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ marginRight: 35 }}
          />

          <MaterialCommunityIcons
            name="logout-variant"
            size={45}
            color="white"
          />
        </View>
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
  topContainer: {
    paddingBottom: 20,
    paddingHorizontal: 25,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    elevation: 10,

    backgroundColor: colorPalette.primaryColor,
  },
});
