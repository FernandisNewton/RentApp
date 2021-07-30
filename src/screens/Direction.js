import React from "react";
import { View, StyleSheet } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker, Callout } from "react-native-maps";
const Direction = () => {
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const GOOGLE_MAPS_APIKEY = "AIzaSyA4quWpcCyEHq6QOM4xAbrwNJlGr2HEihE";
  return (
    <MapView>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({});

export default Direction;
