import { View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";
import { router } from "expo-router";
import * as Location_ from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Location = () => {
  const { width, height } = Dimensions.get("window");
  const [location, setLocation] = useState<Location_.LocationObject>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [locationString, setLocationString] = useState<string>("");

  const getLocation = async () => {
    setLoading(true);
    let { status } = await Location_.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setLoading(true);

      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location_.getCurrentPositionAsync({});

    const { latitude, longitude } = location.coords;

    // Perform reverse geocoding
    const result = await Location_.reverseGeocodeAsync({ latitude, longitude });
    if (result.length > 0) {
      const { city, country } = result[0];
      // console.log("RESS", result[0]);
      setLocation(location);
      setLocationString(`${city},${country}`);
    }
    await AsyncStorage.setItem("location-string", locationString);
    setLoading(false);
    router.replace("/travel");
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: 80,
        flex: 1,
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -height / 1.35,
          height: height,
          width: width * 1.5,
          borderBottomLeftRadius: 500,
          borderBottomRightRadius: 500,
          backgroundColor: "#000",
        }}
      ></View>
      <Image
        style={{
          width: width * 0.7,
          height: width * 0.7,
        }}
        source={require("@/assets/images/location.png")}
      />
      <Text
        variant="titleLarge"
        style={{
          fontWeight: "bold",
          marginVertical: 50,
        }}
      >
        Location Services
      </Text>
      <Text
        variant="bodyMedium"
        style={{
          textAlign: "center",
          marginHorizontal: 50,
        }}
      >
        Get the best recommendations of things to do near you ! Oloha will need
        to enable location services to this.
      </Text>

      <Button
        disabled={loading}
        loading={loading}
        mode="contained"
        buttonColor="black"
        style={{
          marginVertical: 50,
        }}
        onPress={() => {
          getLocation();
        }}
      >
        Turn On Location
      </Button>
    </SafeAreaView>
  );
};

export default Location;
