import { View, useWindowDimensions, ImageProps } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { router } from "expo-router";

interface OnboardingProps {
  title: string;
  subtitle: string;
  image: any;
}

const Onboarding1 = ({ title, subtitle, image }: OnboardingProps) => {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        justifyContent: "space-between",
        // borderWidth: 1,
        height: "87%",
        width: "95%",
      }}
    >
      {image}
      <View
        style={{
          height: height * 0.25,
          backgroundColor: "#e6e6e6",
          width: "auto",
          borderRadius: 10,
          margin: 10,
          justifyContent: "space-around",
        }}
      >
        <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            margin: 10,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            margin: 10,
          }}
        >
          {subtitle}
        </Text>
        <Button
          onPress={() => router.replace("/login")}
          mode="contained"
          buttonColor="black"
          style={{
            marginHorizontal: 50,
            marginBottom: 20,
          }}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
};

export default Onboarding1;
