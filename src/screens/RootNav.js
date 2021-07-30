import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { colorPalette } from "../utility/Constants";
import { FontAwesome } from "@expo/vector-icons";

import Home from "./Home";
import RentAds from "./RentAds";
import Search from "./Search";

const HomeRoute = () => <Home />;

const AdRoute = () => <RentAds />;

const AdsRoute = () => <Search />;

export default function RootNav() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },

    // { key: "favorites", title: "Notifications", icon: "message", badge: "1" },
    {
      key: "search",
      title: "Search",
      icon: () => <FontAwesome name="search" size={24} color="black" />,
    },
    {
      key: "post",
      title: "Post Rent Ad",
      icon: "plus-circle",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    post: AdRoute,
    // favorites: RecentsRoute,
    search: AdsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: colorPalette.primaryColor }}
      activeColor={colorPalette.white}
    />
  );
}
