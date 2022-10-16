import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const ReserveRide = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.item}>
        <Icon
          style={styles.clock}
          name="clockcircle"
          color="black"
          type="antdesign"
          size={20}
        />
        <Text style={styles.text}>Now</Text>
        <Icon
          style={styles.arrow}
          name="down"
          color="black"
          type="antdesign"
          size={15}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ReserveRide;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 30,
  },
  container: {
    padding: 10,
    paddingRight: 15,
  },
  clock: { margin: 5 },
  text: { margin: 5 },
  arrow: { margin: 5, paddingTop: 2 },
});
