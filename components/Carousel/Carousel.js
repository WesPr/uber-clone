import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: require("../../images/carousel/c2.jpg"),
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Get a ride",
    image: require("../../images/carousel/c3.jpg"),
    screen: "MapScreen",
  },
  {
    id: "3",
    title: "Get a ride",
    image: require("../../images/carousel/c4.jpg"),
    screen: "MapScreen",
  },
];

const Carousel = () => {
  const [imageActive, setImageActive] = useState(0);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imageActive) {
        setImageActive(slide);
      }
    }
  };

  return (
    <View style={{ width: WIDTH }}>
      <ScrollView
        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
      >
        {data.map((d) => (
          <TouchableOpacity key={d.id}>
            <View key={d.id} style={styles.imageContainer}>
              <Image key={d.id} style={styles.image} source={d.image} />
              <View style={styles.wrapDot}>
                {data.map((d, index) => (
                  <Text
                    key={d.id}
                    style={imageActive == index ? styles.dotActive : styles.dot}
                  >
                    ●
                  </Text>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imageContainer: {
    width: WIDTH,
    justifyContent: "center",
    paddingLeft: 19,
    position: "relative",
  },
  image: {
    height: Math.round(HEIGHT * 0.15),
    width: Math.round(WIDTH * 0.9),
    resizeMode: "cover",
    borderRadius: 10,
  },
  wrapDot: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    bottom: -20,
  },
  dotActive: {
    margin: 3,
    color: "white",
  },
  dot: {
    margin: 3,
    color: "#888",
    paddingBottom: 25,
  },
});
