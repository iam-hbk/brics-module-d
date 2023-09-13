import { Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Text, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location_ from "expo-location";
import { router } from "expo-router";

interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

const API_KEY = "f9b5b2261f3c25424aa5607dfad29c1b";
const TravelHeader = ({ props }: any) => {
  const locationData = {
    coords: {
      accuracy: 1414,
      altitude: 1726.4539794921875,
      altitudeAccuracy: 1.23417329788208,
      heading: -1,
      latitude: -26.242437967889927,
      longitude: 27.982794492597975,
      speed: -1,
    },
    timestamp: 1694597734810.716,
  };
  const theme = useTheme();
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData>(
    {} as WeatherData
  );
  // const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [locationString, setLocationString] = useState<string>("");

  // const getLocation = async () => {
  //   setLoading(true);
  //   let { status } = await Location_.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     setLoading(false);

  //     setErrorMsg("Permission to access location was denied");
  //     return;
  //   }

  //   let location: Location_.LocationObject =
  //     await Location_.getCurrentPositionAsync({});

  //   const { latitude, longitude } = location.coords;

  //   // Perform reverse geocoding
  //   const result = await Location_.reverseGeocodeAsync({ latitude, longitude });
  //   if (result.length > 0) {
  //     const { city, country } = result[0];
  //     setLocationString(`${city},${country}`);
  //   }
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getLocation();
  // }, []);
  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.coords.latitude}&lon=${locationData.coords.longitude}&appid=${API_KEY}`
    );
    const data: WeatherData = await response.json();
    setWeatherData(data);
    console.log("DATA", data);
  };

  useEffect(() => {
    getWeather();
    (async () => {
      // setLoading(true);
      let { status } = await Location_.requestForegroundPermissionsAsync();
      console.log("STATUS", status);
      if (status !== "granted") {
        // setLoading(false);
        setErrorMsg("Permission to access location was denied");
        console.log("ERROR", errorMsg);
        return;
      }
      // let location = await Location_.getCurrentPositionAsync({});
      console.log("LOCATION", await Location_.getCurrentPositionAsync({}));
      // const { latitude, longitude } = location.coords;
      // Perform reverse geocoding
      // const result = await Location_.reverseGeocodeAsync({
      //   latitude,
      //   longitude,
      // });
      // if (result.length > 0) {
      //   const { city, country } = result[0];
      //   console.log("RESS", `${city},${country}`);
      //   setLocationString(`${city},${country}`);
      // }
      // setLoading(false);
    })();
  }, []);

  //Update the weather after some time
  setInterval(() => {
    getWeather();
  }, 1000 * 60 * 60);

  return (
    <SafeAreaView
      style={{
        paddingTop: 10,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          variant="titleMedium"
          style={{
            fontWeight: "bold",
          }}
        >
          {/* {loading && "Loading..."} */}
          {/* {!loading && locationString} */}
          Johannesburg South, South Africa
        </Text>
        <IconButton
          style={{
            margin: 0,
          }}
          icon="magnify"
          size={30}
          onPress={() => console.log("Pressed")}
        ></IconButton>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton
          style={{
            margin: 0,
          }}
          icon={"apple-icloud"}
          iconColor="#dcdcdc"
          size={30}
        />
        <Text>
          {
            // format weatherData.main?.temp - 273.15 for Celcius
            (weatherData.main?.temp - 273.15).toFixed(1) + "°C"
          }
        </Text>
      </View>
      
    </SafeAreaView>
  );
};

export default TravelHeader;
