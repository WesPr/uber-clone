import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectAddresses } from "../../slices/placesSlice";

const ItemSeparator = () => (
  <View style={[tw`flex-1 bg-gray-200`, { height: 1.4 }]} />
);

const AutoPlaces = () => {
  const places = useSelector(selectAddresses);

  return (
    <FlatList
      style={{ marginTop: -0.5 }}
      data={places.results}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.index}
      renderItem={({ item }) => (
        <View style={tw`flex-row pl-5 py-2`}>
          <Icon
            style={styles.clock}
            name="clockcircle"
            color="gray"
            type="antdesign"
            size={35}
          />
          <View style={tw`pl-5`}>
            <Text numberOfLines={1} style={tw``}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={tw`text-gray-400`}>
              {item.formatted_address}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default AutoPlaces;

const styles = StyleSheet.create({});
