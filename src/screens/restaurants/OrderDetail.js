import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenStyles as styles } from "../../styles";
import { MaterialIcons } from "react-native-vector-icons";
import config from "../../../config.json";
import carImage from "../../assets/car.png";

const OrderDetail = (props) => {
  const order = props.route.params.order;
  const [foods, setFoods] = useState(Object.values(order.foods));

  const [origin, setOrigin] = useState({
    latitude: 16.907405,
    longitude: -92.100216,
  });

  const [destination, setDestination] = useState({
    latitude: 16.920532,
    longitude: -92.1079,
  });

  const [status, setStatus] = useState({
    duration: "0 min.",
    distance: "0 km",
  });

  const getLocationPermission = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied");
      return;
    }
    const location = await getCurrentPositionAsync({});

    const currentLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setDestination(currentLocation);
  };

  useEffect(() => {
    setInterval(() => {
      getLocationPermission();
    }, 10000);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textInput}>
          <MaterialIcons name="fastfood" size={24} color="#f16667" />
          <Text style={styles.subtitle2}>Platillos</Text>
        </View>
        <View style={styles.card}>
          {foods.map((food, i) => (
            <View key={i} style={styles.textInput}>
              <Image
                source={{ uri: food.picture }}
                style={styles.orderCardImage}
              />
              <Text style={styles.subtitle2}>{food.name}</Text>
              <Text style={styles.subtitle2}>
                {food.quantity} x ${food.price}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.textInput}>
          <MaterialIcons name="fastfood" size={24} color="#f16667" />
          <Text style={styles.subtitle2}>Detalles de Entrega</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.textInput}>
            <Text style={styles.subtitle2}>Distancia:</Text>
            <Text style={styles.subtitle2}>{status.distance} km</Text>
          </View>
          <View style={styles.textInput}>
            <Text style={styles.subtitle2}>Tiempo estimado:</Text>
            <Text style={styles.subtitle2}>{status.duration} min</Text>
          </View>
          <View style={styles.textInput}>
            <Text style={styles.subtitle2}>Costo de envio:</Text>
            <Text style={styles.subtitle2}>$25</Text>
          </View>
        </View>

        <View style={styles.textInput}>
          <Text style={styles.subtitle2}></Text>
          <Text style={styles.subtitle2}></Text>
          <Text style={{ fontSize: 20, color: "#000", flex: 1, marginLeft: 5, fontWeight: "bold" }}>
            Total: ${parseFloat(order.total) + 25}
          </Text>
        </View>

        <View style={styles.card}>
          <MapView
            initialRegion={{
              ...origin,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04,
            }}
            style={{ width: 320, height: 500 }}
          >
            <Marker coordinate={origin} image={carImage} />
            <Marker
              draggable={true}
              onDragEnd={(direction) =>
                setDestination(direction.nativeEvent.coordinate)
              }
              coordinate={destination}
            />
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={config.googleApiKey}
              strokeColor="blue"
              strokeWidth={3}
              language="es"
              mode="DRIVING"
              onReady={(result) => {
                setStatus({
                  duration: result.duration,
                  distance: result.distance,
                });
              }}
            />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;
