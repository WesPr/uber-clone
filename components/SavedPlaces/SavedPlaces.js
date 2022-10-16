import { StyleSheet, View, Text } from "react-native";
import tw from "twrnc";
import React from "react";
import { Icon } from "@rneui/themed";

const SavedPlaces = () => {
  return (
    <View style={tw`flex-row pb-1 bg-gray-200`}>
      <View style={tw`flex-row bg-gray-100`}>
        <View style={tw`p-5 pr-4 py-1`}>
          <Icon
            style={tw`p-2 rounded-full bg-blue-400`}
            name="briefcase"
            color="white"
            type="entypo"
            size={20}
          />
        </View>
        <View style={tw`pt-4 pr-5 py-1`}>
          <Text>Work</Text>
          <Text style={tw`text-gray-400`}>CLIQ Digital</Text>
        </View>
      </View>
      <View style={tw`bg-gray-100 py-1`}>
        <View style={[tw`bg-gray-200 `, { width: 2, flex: 1 }]} />
      </View>
      <View style={tw`flex-row flex-1 bg-gray-100`}>
        <View style={tw`p-5 pr-4 py-1`}>
          <Icon
            style={tw`p-2 rounded-full bg-gray-400 `}
            name="star"
            color="white"
            type="entypo"
            size={20}
          />
        </View>
        <Text style={tw`pt-3`}>Saved places</Text>
      </View>
    </View>
  );
};

export default SavedPlaces;

const styles = StyleSheet.create({});
