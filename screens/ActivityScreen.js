import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const tempData = [
  {
    id: 1,
    location: "Loevesteinse Randweg 100 343433",
    dateTime: "3 Oct ● 6:18 PM",
    amount: "€0.00 Cancelled",
  },
  {
    id: 2,
    location: "Evert van Beekstraat 202",
    dateTime: "3 Oct ● 6:18 PM",
    amount: "€25.00",
  },
  {
    id: 3,
    location: "Uber X",
    dateTime: "3 Oct ● 6:18 PM",
    amount: "€0.00 Cancelled",
  },
  {
    id: 4,
    location: "Uber X",
    dateTime: "3 Oct ● 6:18 PM",
    amount: "€0.00 Cancelled",
  },
  {
    id: 5,
    location: "Uber X",
    dateTime: "3 Oct ● 6:18 PM",
    amount: "€0.00 Cancelled",
  },
  {
    id: 6,
    location: "Uber X",
    dateTime: "3 Oct ● 6:18 PM",
    amount: "€0.00 Cancelled",
  },
  {
    id: 7,
    location: "Uber X",
    dateTime: "3 Oct ● 6:18 PM",
    amount: "€0.00 Cancelled",
  },
  {
    id: 8,
    location: "Uber X",
    dateTime: "3 Oct ● 6:18 PM",
    amount: "€0.00 Cancelled",
  },
];

const ActivityScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={tw`text-3xl font-bold p-5`}>Activity</Text>
      <Text style={tw`font-medium text-lg px-5`}>Past</Text>
      <View style={tw`flex-row p-5`}>
        <TouchableOpacity style={tw`bg-black mr-2 py-2 px-5 rounded-full`}>
          <Text style={tw`text-white`}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw` mr-5 py-2 px-5 rounded-full`}>
          <Text style={tw`text-black`}>Food</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tempData}
        keyExtractor={(item) => item.id}
        style={tw`grow-0`}
        ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`flex-row pl-10 pr-5`}>
            <Image
              style={styles.image}
              source={require("../images/navigation/car.webp")}
            />
            <View style={tw`px-5 flex-1`}>
              <Text numberOfLines={1} style={tw`font-medium text-lg`}>
                {item.location}
              </Text>
              <Text numberOfLines={1} style={tw`text-gray-500`}>
                {item.dateTime}
              </Text>
              <Text numberOfLines={1} style={tw`text-gray-500`}>
                {item.amount}
              </Text>
            </View>
            <View style={tw`justify-center ml-auto`}>
              <Icon name="right" color="gray" type="antdesign" size={20} />
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style={tw`font-medium text-lg p-5`}>More Options</Text>
      <TouchableOpacity style={tw`flex-row pb-5 px-5`}>
        <View>
          <Icon
            style={styles.clock}
            name="clockcircle"
            color="black"
            type="antdesign"
            size={30}
          />
        </View>
        <View style={tw`justify-center px-5`}>
          <Text style={tw`font-medium text-base`}>See all past activity</Text>
        </View>
        <View style={tw`justify-center ml-auto`}>
          <Icon name="right" color="gray" type="antdesign" size={20} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  image: {
    width: WIDTH * 0.12165450121,
    height: HEIGHT * 0.06038647343,
    resizeMode: "contain",
  },
});
