import React, { useEffect } from "react";
//----SCREENS----
import WelcomeScreen from "./screens/WelcomeScreen";
import UserLoginScreen from "./screens/UserLoginScreen";
import Home from "./screens/Home";
import RootNav from "./screens/RootNav";
import MapScreen from "./screens/MapScreen";
import PostAd from "./screens/PostAd";
import RentAds from "./screens/RentAds";
import PGInfo from "./screens/PGInfo";
import UserRegistration from "./screens/UserRegistration";
import LocationLoading from "./screens/LocationLoading";
import Completed from "./screens/Completed";
//----****----
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";
import Firebase from "./services/Firebase";
import { colorPalette } from "./utility/Constants";
import firebase from "firebase";
import { useDispatch, connect } from "react-redux";
import { SET_USER, IS_AUTHENTICATED } from "./redux/action/action.types";

const Stack = createStackNavigator();

const App = ({ authState }) => {
  const dispatch = useDispatch();

  const onAuthStateChanged = (user) => {
    try {
      if (user) {
        dispatch({
          type: IS_AUTHENTICATED,
          payload: true,
        });
        console.log("USER_UID IS..:--", user.uid);
        firebase
          .database()
          .ref(`/user/${user.uid}`)
          .on("value", (snapshot) => {
            console.log("USER Details", snapshot.val());
            dispatch({
              type: SET_USER,
              payload: snapshot.val(),
            });
          });
      } else {
        dispatch({
          type: IS_AUTHENTICATED,
          payload: false,
        });
      }
    } catch (error) {
      console.log("OnAuthChangeErr", error);
    }
  };
  useEffect(() => {
    try {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

      return subscriber;
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (authState.loading) {
    return (
      <ActivityIndicator
        color={colorPalette.primaryColor}
        size="large"
        style={{ marginTop: "100%" }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="PGInfo"
      >
        {authState.isAuthenticated ? (
          <>
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="RootNav" component={RootNav} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="PostAd" component={PostAd} />
            <Stack.Screen name="RentAds" component={RentAds} />
            <Stack.Screen name="LocationLoading" component={LocationLoading} />
            <Stack.Screen name="PGInfo" component={PGInfo} />
            <Stack.Screen name="Completed" component={Completed} />
          </>
        ) : (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
            <Stack.Screen
              name="UserRegistration"
              component={UserRegistration}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  authState: state.auth,
});
export default connect(mapStateToProps)(App);
