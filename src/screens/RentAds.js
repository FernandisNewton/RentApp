import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { FAB } from "react-native-paper";
import { colorPalette } from "../utility/Constants";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Card from "../components/Card";
import firebase from "firebase";
const RentAds = ({ userDetails }) => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        firebase
          .database()
          .ref("/posts/")
          .on("value", (snapshot) => {
            if (snapshot.val()) {
              Object.values(snapshot.val()).map((item) => {
                if (item.by == userDetails.uid) {
                  setData([item]);
                }
              });
            } else {
              setData([]);
            }
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={styles.title}>Your Rental Ads</Text>
      <FlatList
        style={{ width: "100%" }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index, separators }) => (
          <Card item={item} userDetails={userDetails} key={item.id} />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text>No post</Text>
          </View>
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        label="Add "
        onPress={() => navigation.navigate("MapScreen")}
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  userDetails: state.auth.user,
});

RentAds.propTypes = {
  userDetails: propTypes.object,
};
export default connect(mapStateToProps)(RentAds);
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 10,
    backgroundColor: colorPalette.secondaryColor,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
    marginLeft: 15,
    marginTop: 10,
    color: colorPalette.black,
  },
});
