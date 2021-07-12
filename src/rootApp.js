import React from "react";

import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Store";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
const rootApp = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

registerRootComponent(rootApp);

export default rootApp;
