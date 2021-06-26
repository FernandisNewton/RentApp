import React from "react";

import WelcomeScreen from "./screens/user/WelcomeScreen";
import UserLoginScreen from "./screens/user/UserLoginScreen";
import Home from "./screens/user/Home";
import RootNav from "./screens/user/RootNav";
import LocationLoading from "./screens/user/LocationLoading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteComponent="LocationLoading"
      >
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="RootNav" component={RootNav} /> */}
        <Stack.Screen name="LocationLoading" component={LocationLoading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
