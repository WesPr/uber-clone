import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import tw from "twrnc";

const data = [
  {
    id: 1,
    location: "Dirienkliniek De Wetering",
    destination: "Weteringschans 141, Amsterdam",
  },
  {
    id: 2,
    location: "Amsterdam Airport Schipol",
    destination: "Evert van de Beekstraat 202, Schipol",
  },
  {
    id: 3,
    location: "Spar",
    destination: "48 Hobbemakade, Amsterdam",
  },
];
const NavRecent = () => {
  return (
    <View>
      {data.map((d) => (
        <View key={d.id}>
          <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              type="entypo"
              name="location-pin"
              color="black"
              size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{d.location}</Text>
              <Text style={tw`text-gray-500`}>{d.destination}</Text>
            </View>
            <View style={tw`ml-auto`}>
              <Icon type="entypo" name="chevron-right" color="gray" size={22} />
            </View>
          </TouchableOpacity>
          <View style={[tw`bg-gray-200`, { height: 1, marginLeft: 80 }]} />
        </View>
      ))}
    </View>
  );
};

export default NavRecent;
