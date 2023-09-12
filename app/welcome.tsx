import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FEBD2F",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "40%",
        }}
      >
        <Image
          source={require("@/assets/images/icon.png")}
          width={20}
          height={20}
          style={{
            width: "27%",
            height: "27%",
            borderRadius: 30,
          }}
          resizeMode="contain"
        />
        <Text
          variant="displayMedium"
          style={{
            fontWeight: "bold",
            marginHorizontal: 10,
          }}
        >
          Oloha
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          margin: 15,
          borderRadius: 10,
          flex: 1,
          padding: 20,
        }}
      >
        <Text
          variant="displaySmall"
          style={{
            fontWeight: "bold",
          }}
        >
          Welcome to Oloha
        </Text>
        <Text variant="titleMedium">
          Live with no excuses and travel with no regrets
        </Text>

        <View
          style={{
            marginVertical: 20,
            justifyContent: "space-around",
            paddingHorizontal: 30,
          }}
        >
          <Button
            style={styles.buttons}
            buttonColor="black"
            icon={"apple"}
            mode="contained"
          >
            Sign in with Apple
          </Button>
          <Button
            style={styles.buttons}
            buttonColor="#c42b1a"
            icon={"google"}
            mode="contained"
          >
            Sign in with Google
          </Button>
          <Button
            style={styles.buttons}
            buttonColor="#095dca"
            icon={"facebook"}
            mode="contained"
          >
            Sign in with Facebook
          </Button>
          <Button>
            <Text
              variant="labelLarge"
              style={{
                textDecorationLine: "underline",
              }}
            >
              Continue as guest
            </Text>
          </Button>
          <Text
            style={{
              textAlign: "center",
              color: "grey",
            }}
          >
            Or
          </Text>
          <View
            style={{
              justifyContent: "space-around",
              paddingHorizontal: 30,
              flexDirection: "row",
            }}
          >
            <Button
              onPress={()=>router.replace("/signin")}
              style={styles.buttons}
              buttonColor="#FEBD2F"
              textColor="black"
              mode="contained"
            >
              Sign In
            </Button>
            <Button style={styles.buttons} buttonColor="black" mode="contained">
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
    paddingVertical: 5,
  },
});

export default Welcome;
