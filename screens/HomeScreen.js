import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import Carousel from "../components/Carousel/Carousel";
import NavOptions from "../components/NavOptions/NavOptions";
import NavRecent from "../components/NavFavourites/NavRecent";
import Map from "../components/Map/Map";
import { useNavigation } from "@react-navigation/native";
import WhereTo from "../components/WhereTo/WhereTo";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <TouchableOpacity style={tw`ml-auto p-3 pr-5`}>
        <Icon
          style={tw`bg-gray-100 p-2 rounded-full w-10 border-gray-200 border `}
          name="user"
          color="#D3D3D3"
          type="font-awesome"
        />
      </TouchableOpacity>
      <ScrollView>
        <Carousel />
        <NavOptions />
        <WhereTo />
        <NavRecent />
        <Map />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
