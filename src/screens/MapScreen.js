import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PlacesInput from "react-native-places-input";
import * as Location from "expo-location";
import { Button } from "react-native-paper";
import { colorPalette } from "../utility/Constants";
import { PropertyLocationContext } from "../contexts/PropertyLocationContext.js";
import { UserLocationContext } from "../contexts/UserLocationContext";
export default function MapScreen({ navigation }) {
  const [myRegion, setMyRegion] = React.useState({
    region: {
      latitude: 12.9141,
      longitude: 74.856,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021,
    },
  });
  const [loading, setLoading] = useState(false);
  const [propAddress, setPropAddress] = useContext(PropertyLocationContext);
  const [address] = useContext(UserLocationContext);
  useEffect(() => {
    setMyRegion({
      region: {
        latitude: address.latitude,
        longitude: address.longitude,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },
    });
  }, []);
  const confirmLocation = async () => {
    setLoading(true);
    console.log("REG", myRegion);
    await Location.reverseGeocodeAsync({
      latitude: myRegion.latitude,
      longitude: myRegion.longitude,
    })
      .then((result) => {
        console.log("ADDRESS", result);
        setPropAddress({
          address: result[0],
          latitude: myRegion.latitude,
          longitude: myRegion.longitude,
        });
        setLoading(false);
        navigation.navigate("PostAd");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onRegionChange = (region) => {
    setMyRegion(region);
    console.log(myRegion);
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log("DETAILS LOCATION", data, details);
          setMyRegion({
            region: {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
          });
        }}
        query={{
          key: "AIzaSyA4quWpcCyEHq6QOM4xAbrwNJlGr2HEihE",
          language: "en",
          components: "country:in",
          types: "establishment",
          radius: 30000,
          location: `${myRegion.latitude}, ${myRegion.longitude}`,
        }}
        styles={{
          container: {
            height: 400,
            position: "absolute",
            width: "90%",
            zIndex: 1,
            marginTop: 20,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView
        region={myRegion.region}
        provider="google"
        onRegionChange={onRegionChange}
        style={styles.map}
      />
      <Image
        style={{
          position: "absolute",
          marginTop: Dimensions.get("window").height / 2.3,

          zIndex: 1,
          height: 40,
          width: 40,
        }}
        source={require("../assets/location-pin.png")}
      />
      <Button
        color={colorPalette.primaryColor}
        mode="contained"
        uppercase={false}
        dark={true}
        loading={loading}
        labelStyle={{ fontSize: 20, fontFamily: "Poppins_500Medium" }}
        onPress={confirmLocation}
        style={{
          height: 50,
          justifyContent: "center",
          bottom: 50,
          borderRadius: 60,
          position: "absolute",
          zIndex: 1,
          elevation: 15,
        }}
      >
        Confirm Location
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
