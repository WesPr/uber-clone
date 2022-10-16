import { StyleSheet, View } from "react-native";
import React from "react";
import SavedPlaces from "../SavedPlaces/SavedPlaces";
import AutoPlaces from "../AutoPlaces/AutoPlaces";

const searching = false;

const SearchArea = () => {
  return (
    <View>
      <View
        style={{ flex: 0, height: 3, backgroundColor: "#E0E0E0", marginTop: 6 }}
      />
      {!searching && <SavedPlaces />}
      <AutoPlaces />
    </View>
  );
};

export default SearchArea;

const styles = StyleSheet.create({});
