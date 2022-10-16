import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { paddingBottom: 5 },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name == "HomeScreen") {
            return (
              <Icon
                name="home-filled"
                type="materialdesign"
                color={focused ? "black" : "gray"}
              />
            );
          } else if (route.name == "ActivityScreen") {
            return (
              <Icon
                name="text-document"
                type="entypo"
                color={focused ? "black" : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ActivityScreen" component={ActivityScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
