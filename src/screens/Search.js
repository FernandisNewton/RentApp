import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ marginHorizontal: 20, marginTop: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
