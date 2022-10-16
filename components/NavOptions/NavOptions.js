import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
} from "react-native";
import React from "react";
import tw from "twrnc";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const data = [
  {
    id: "1",
    title: "Ride ",
    image: require("../../images/navigation/car.webp"),
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "  Food  ",
    image: require("../../images/navigation/eats.png"),
    screen: "EatsScreen",
  },
  {
    id: "3",
    title: "Reserve",
    image: require("../../images/navigation/calendarClock.png"),
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <View style={tw`p-5`}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={true}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: WIDTH * 0.12,
    height: HEIGHT * 0.06,
    resizeMode: "contain",
  },
  item: {
    backgroundColor: "#DCDCDC",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderRadius: 10,
  },
  text: {
    paddingTop: 3,
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default NavOptions;
