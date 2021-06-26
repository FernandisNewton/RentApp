import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { colorPalette } from "../../utility/Constants";
import Home from "./Home";
const HomeRoute = () => <Home />;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default function RootNav() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "albums", title: "Albums", icon: "album" },
    { key: "recents", title: "Recents", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
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
