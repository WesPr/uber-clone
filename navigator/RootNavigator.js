import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import SearchScreen from "../screens/SearchScreen";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="SearchScreen" component={SearchScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
