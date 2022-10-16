import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import ReserveRide from "../ReserveRide/ReserveRide";
import { useNavigation } from "@react-navigation/native";

const WhereTo = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`px-5`}>
      <View
        style={{
          backgroundColor: "#DCDCDC",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchScreen")}
          style={tw`flex-2 p-3`}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Where to?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#D4D4D4",
            width: 1,
          }}
        />
        <ReserveRide />
      </View>
    </View>
  );
};

export default WhereTo;

const styles = StyleSheet.create({});
