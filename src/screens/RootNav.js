import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { colorPalette } from "../utility/Constants";

import Home from "./Home";
import RentAds from "./RentAds";

const HomeRoute = () => <Home />;

const AdRoute = () => <RentAds />;

const AdsRoute = () => <Text>Recents</Text>;

export default function RootNav() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    {
      key: "post",
      title: "Post Rent Ad",
      icon: "plus-circle",
    },
    // { key: "favorites", title: "Notifications", icon: "message", badge: "1" },
    { key: "ads", title: "Your Ads", icon: "heart" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    post: AdRoute,
    // favorites: RecentsRoute,
    ads: AdsRoute,
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
