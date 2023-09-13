import { View, Image } from "react-native";
import React, { useRef } from "react";
import Onboarding from "react-native-onboarding-swiper";
import Onboarding1 from "../components/Onboarding1";
import { router } from "expo-router";
const Onboarding_ = () => {
  const onboardingRef = useRef(null);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 80,
        backgroundColor: "white",
      }}
    >
      <Onboarding
        DotComponent={({ selected }: any) => (
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              marginHorizontal: 3,
              backgroundColor: selected ? "#FEBD2F" : "#C4C4C4",
            }}
          />
        )}
        onSkip={() => router.replace("/welcome")}
        onDone={() => router.replace("/welcome")}
        ref={onboardingRef}
        bottomBarHighlight={false}
        pages={[
          {
            title: "",
            subtitle: "",
            backgroundColor: "#fff",
            image: (
              <Onboarding1
                isLast={false}
                title="Discover Amazing Places"
                subtitle="Plan Your Trip, choose your destination. Pick the best local guides for
            your holiday"
                image={
                  <Image source={require("@/assets/images/onboarding1.png")} />
                }
              />
            ),
          },
          {
            title: "",
            subtitle: "",
            backgroundColor: "#fff",
            image: (
              <Onboarding1
                isLast={false}
                title="Book a Local"
                subtitle="You can book private city tours with locals on-the-go and experience a new place like never before"
                image={
                  <Image source={require("@/assets/images/onboarding2.png")} />
                }
              />
            ),
          },
          {
            title: "",
            subtitle: "",
            backgroundColor: "#fff",
            image: (
              <Onboarding1
                isLast
                title="Share Your Adventures"
                subtitle="Enjoy your holiday ! Don't forget to take a phot and share it with the world"
                image={
                  <Image source={require("@/assets/images/onboarding3.png")} />
                }
              />
            ),
          },
        ]}
      />
    </View>
  );
};

export default Onboarding_;
