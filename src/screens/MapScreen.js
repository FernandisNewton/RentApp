import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PlacesInput from "react-native-places-input";
import { Button } from "react-native-paper";
import { colorPalette } from "../utility/Constants";
export default function MapScreen() {
  const [myregion, setMyRegion] = React.useState({
    region: {
      latitude: 12.9141,
      longitude: 74.856,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021,
    },
  });

  const onRegionChange = (region) => {
    setMyRegion(region);
    console.log(myregion);
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
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyA4quWpcCyEHq6QOM4xAbrwNJlGr2HEihE",
          language: "en",
          components: "country:in",
          types: "establishment",
          radius: 30000,
          location: `${myregion.latitude}, ${myregion.longitude}`,
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
        region={myregion.region}
        provider="google"
        onRegionChange={onRegionChange}
        style={styles.map}
      ></MapView>
      <Image
        style={{
          position: "absolute",
          marginTop: Dimensions.get("window").height / 2.3,

          zIndex: 1,
          height: 50,
          width: 50,
        }}
        source={require("../assets/location-pin.png")}
      />
      <Button
        color={colorPalette.primaryColor}
        mode="contained"
        uppercase={false}
        dark={true}
        labelStyle={{ fontSize: 20, fontFamily: "Poppins_500Medium" }}
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
