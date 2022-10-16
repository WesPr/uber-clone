import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import React, { useLayoutEffect } from "react";
import SearchBars from "../components/SearchBars/SearchBars";
import SearchArea from "../components/SearchArea/SearchArea";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <SearchBars />
      <SearchArea />
    </SafeAreaView>
  );
};

export default SearchScreen;
