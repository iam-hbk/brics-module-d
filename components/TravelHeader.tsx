import { Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Text, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TravelHeader = ({ props }: any) => {
  const theme = useTheme();
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    try {
      const value = await AsyncStorage.getItem("location-string");

      if (value !== null) {
        setCurrentLocation(value);
      }
    } catch (e) {
      alert("An error occured while getting your location");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
          {!loading && currentLocation}
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
        <Text>17°C</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",
            borderRadius: 100,
          }}
          source={require("@/assets/images/Ellipse1.png")}
        />
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",

            borderRadius: 100,
          }}
          source={require("@/assets/images/Ellipse2.png")}
        />
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",

            borderRadius: 100,
          }}
          source={require("@/assets/images/Ellipse3.png")}
        />
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",

            borderRadius: 100,
          }}
          source={require("@/assets/images/Ellipse4.png")}
        />
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",

            borderRadius: 100,
          }}
          source={require("@/assets/images/Ellipse5.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default TravelHeader;
