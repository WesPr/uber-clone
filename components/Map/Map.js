import MapView, { Marker } from "react-native-maps";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import tw from "twrnc";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Map = () => {
  return (
    <View>
      <View>
        <Text style={tw`text-lg p-5`}>Around you</Text>
      </View>
      <View style={styles.mapContainer}>
        <TouchableOpacity>
          <View style={styles.container}>
            <MapView
              style={[
                {
                  width: WIDTH * 0.9,
                  height: HEIGHT * 0.2,
                },
              ]}
              mapType="mutedStandard"
              initialRegion={{
                latitude: 52.3543242,
                longitude: 4.8862663,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={{
                  latitude: 52.3543242,
                  longitude: 4.8862663,
                }}
              />
            </MapView>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    padding: 20,
    paddingTop: 0,
  },
  container: {
    borderRadius: 20,
    overflow: "hidden",
  },
});

export default Map;
