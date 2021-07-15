import React from "react";

import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Store";
import AppLoading from "expo-app-loading";
import { UserLocationProvider } from "./contexts/UserLocationContext";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
const rootApp = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <UserLocationProvider>
        <App />
      </UserLocationProvider>
    </Provider>
  );
};

registerRootComponent(rootApp);

export default rootApp;
