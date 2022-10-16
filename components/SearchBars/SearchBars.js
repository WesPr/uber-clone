import { StyleSheet, View, Text, TextInput } from "react-native";
import tw from "twrnc";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { getPlaces } from "../../slices/placesSlice";

const SearchBars = () => {
  const dispatch = useDispatch();

  const handleInputChange = (text) => {
    if (text.length >= 3) {
      dispatch(getPlaces(text));
    }
  };

  return (
    <View>
      {/* Backarrow */}
      <Icon
        style={tw`p-5 pb-1 mr-auto`}
        name="arrowleft"
        color="black"
        type="antdesign"
        size={25}
      />
      {/* Origin, Destination container */}
      <View style={tw`flex-row`}>
        {/* Icons container */}
        <View style={tw`pr-3`}>
          <Text style={styles.dot}>●</Text>
          <View style={styles.line}></View>
          <Text style={styles.square}>■</Text>
          <View />
        </View>
        {/* Input container */}
        <View style={tw`flex-1`}>
          <View
            style={[tw`flex-1`, { backgroundColor: "#DCDCDC", padding: 5 }]}
          >
            <TextInput
              onChangeText={(text) => handleInputChange(text)}
              placeholder="Where from?"
            />
          </View>
          <View style={[{ height: 3 }]} />
          <View
            style={[tw`flex-1`, { backgroundColor: "#DCDCDC", padding: 5 }]}
          >
            <TextInput placeholder="Where to?" />
          </View>
        </View>
        <View style={tw``}>
          {/* Plus Icon */}
          <View style={tw`p-5 pl-2 mr-auto`}>
            <Icon
              style={[tw`rounded-full`, { backgroundColor: "#DCDCDC" }]}
              name="plus"
              type="antdesign"
              size={25}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchBars;

const styles = StyleSheet.create({
  dot: {
    color: "gray",
    paddingLeft: 23,
    fontSize: 20,
  },
  line: {
    backgroundColor: "gray",
    width: 1,
    height: 25,
    marginLeft: 28.3,
  },
  square: {
    color: "black",
    paddingLeft: 24,
  },
});
