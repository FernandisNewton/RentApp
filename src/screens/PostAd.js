import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase";

import { connect } from "react-redux";
import propTypes from "prop-types";
import shortid from "shortid";
const PostAd = ({ navigation, userState }) => {
  const [image, setImage] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostAd;
