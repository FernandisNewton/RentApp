import auth from "firebase/auth";
import database from "firebase/database";
import Snackbar from "react-native-snackbar";

export const signUp = (data) => async (dispatch) => {
  const { name, email, phone, password } = data;

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(data);
      console.log("User creation was success");

      database()
        .ref("/user/" + data.user.uid)
        .set({
          name,
          email,
          phone,
          password,
          uid: data.user.uid,
        })
        .then(() => console.log("data set!!!"));
      Snackbar.show({
        text: "account created",
        textColor: "#fff",
        backgroundColor: "#000",
      });
    })
    .catch((err) => {
      Snackbar.show({
        text: "Signup Failed",
        textColor: "#fff",
        backgroundColor: "#000",
      });
    });
};

export const signIn = (data) => async (dispatch) => {
  console.log(data);
  const { email, password } = data;
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      console.log("SignIn succ");
      Snackbar.show({
        text: "Signed In!!!",
        textColor: "#fff",
        backgroundColor: "#000",
      });
    })
    .catch((err) => {
      console.err(err);
      Snackbar.show({
        text: "Signed in failed",
        textColor: "#fff",
        backgroundColor: "#000",
      });
    });
};

export const signOut = () => async (dispatch) => {
  auth()
    .signOut()
    .then((data) => {
      console.log("SignOut succ");
    })
    .catch((err) => {
      Snackbar.show({
        text: "SigOut  failed",
        textColor: "#fff",
        backgroundColor: "#000",
      });
    });
};
