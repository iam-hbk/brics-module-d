import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import {
  Button,
  IconButton,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SignIn = () => {
  const [text, setText] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const theme = useTheme();

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
          Welcome Back
        </Text>
        <Text variant="titleMedium">Please log in to your account</Text>

        <KeyboardAvoidingView
          // behavior="position"
          style={{
            marginVertical: 20,
            justifyContent: "space-around",
            paddingHorizontal: 30,
          }}
        >
          <TextInput
            style={{
              marginVertical: 7,
              borderRadius: 15,
            }}
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={{
              marginVertical: 7,
              borderRadius: 15,
            }}
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            right={<TextInput.Icon icon="eye" />}
          />

          <Button
            mode="text"
            onPress={() => {
              console.log("pressed");
            }}
          >
            Forgot Password?
          </Button>

          <Button
            onPress={() => console.log("pressed")}
            style={styles.buttons}
            buttonColor="#FEBD2F"
            textColor="black"
            mode="contained"
          >
            Sign In
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "grey",
                margin: 10,
              }}
            >
              Don't have an account?
            </Text>
            <Button mode="text" onPress={() => router.replace("/signin")}>
              Sign Up
            </Button>
          </View>

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
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              style={{
                marginHorizontal: 7,
              }}
              icon="apple"
              mode="contained"
              iconColor={"white"}
              size={20}
              containerColor="#000000"
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              style={{
                marginHorizontal: 7,
              }}
              icon="google"
              mode="contained"
              iconColor={"white"}
              size={20}
              containerColor={theme.colors.secondary}
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              style={{
                marginHorizontal: 7,
              }}
              icon="facebook"
              mode="contained"
              iconColor={"white"}
              size={20}
              containerColor={"#095dca"}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </KeyboardAvoidingView>
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

export default SignIn;
