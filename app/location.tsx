import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Location = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: 120,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image style={{}} source={require("@/assets/images/location.png")} />
    </SafeAreaView>
  );
};

export default Location;
