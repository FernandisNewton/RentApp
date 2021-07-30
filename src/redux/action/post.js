import firebase from "firebase";
import { SET_POST, ERROR_POST } from "./action.types";

export const getPosts = (place) => async (dispatch) => {
  try {
    firebase
      .database()
      .ref("/posts/")
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          var newArr = [];

          Object.values(snapshot.val()).map((item) => {
            if (item.city == place) {
              newArr.push(item);
            }
          });
          console.log("USER_DATA:----", newArr);
          dispatch({
            type: SET_POST,
            payload: newArr,
          });
        } else {
          dispatch({
            type: SET_POST,
            payload: [],
          });
        }
      });
  } catch (error) {
    dispatch({
      type: ERROR_POST,
    });
  }
};
