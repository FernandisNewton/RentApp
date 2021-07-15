import { React, useState, useContext } from "react";
import * as Location from "expo-location";
import { UserLocationContext } from "../contexts/UserLocationContext";

export const FetchLocation = () => {
  console.log("USERLOCATION");
  const [location, setLocation] = useState(null);
  const [setAddress, setErrorMsg, setLoading] = useContext(UserLocationContext);
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    setLoading(true);
    let currlocation = await Location.getCurrentPositionAsync({});
    setLocation(currlocation);
    let curraddress = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  })();

  if (errorMsg) {
    console.error(errorMsg);
  } else if (curraddress) {
    setAddress({
      city: JSON.stringify(curraddress[0].city),
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    console.log("USERLOCATION", address);

    setLoading(false);
  }
};
