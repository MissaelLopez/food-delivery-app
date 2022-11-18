import { useEffect, useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurant } from "../../store/slices/restaurant/thunks";
import { ScreenStyles as styles } from "../../styles";
import { MaterialIcons, Feather } from "react-native-vector-icons";
import MapView, { Marker } from "react-native-maps";
import { Loader } from "../../components";
import YoutubeIframe from "react-native-youtube-iframe";

const dimensions = Dimensions.get("screen");

export const RestauranDetail = (props) => {
  const { restaurant, isLoading } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  const restaurantId = props.route.params.restaurantId;
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    dispatch(getRestaurant(restaurantId));
  }, []);

  return !isLoading ? (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textInput}>
          <Feather name="map-pin" size={24} color="#f16667" />
          <Text style={styles.subtitle2}>Ubicacion</Text>
        </View>
        <View style={styles.card}>
          <MapView
            initialRegion={{
              latitude: restaurant.latitude,
              longitude: restaurant.longitude,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04,
            }}
            style={{ width: 320, height: 500 }}
          >
            <Marker
              coordinate={{
                latitude: restaurant.latitude,
                longitude: restaurant.longitude,
              }}
            />
          </MapView>
        </View>
      </View>
      <View style={styles.textInput}>
        <Feather name="play" size={24} color="#f16667" />
        <Text style={styles.subtitle2}>Nuestros Videos</Text>
      </View>
      <YoutubeIframe
        play={playing}
        videoId={restaurant.video1}
        width={dimensions.width}
        height={300}
      />
    </ScrollView>
  ) : (
    <Loader />
  );
};
