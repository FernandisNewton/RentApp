import React from "react";

import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Store";
import AppLoading from "expo-app-loading";
import { UserLocationProvider } from "./contexts/UserLocationContext";
import { PropertyLocationProvider } from "./contexts/PropertyLocationContext";
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
      <PropertyLocationProvider>
        <UserLocationProvider>
          <App />
        </UserLocationProvider>
      </PropertyLocationProvider>
    </Provider>
  );
};

registerRootComponent(rootApp);

export default rootApp;
