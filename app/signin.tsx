import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
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
import { doSignin } from "@/apis/auth";

const SignUp = () => {
  const [text, setText] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);

  const validateEmail = (input: string) => {
    // Regular expression for validating an email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Regular expression for validating a 10-digit phone number
    const phoneRegex = /^\d{10}$/;

    if (emailRegex.test(input) || phoneRegex.test(input)) {
      return true;
    }
    return false;
  };

  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FEBD2F",
      }}
    >
      {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}> */}
      <ScrollView keyboardShouldPersistTaps="handled">
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
              width: "30%",
              height: "50%",
              borderRadius: 30,
            }}
            resizeMode="cover"
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
              left={<TextInput.Icon icon="account" />}
              style={{
                marginVertical: 7,
                borderRadius: 15,
              }}
              label="Email"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              left={<TextInput.Icon icon="lock" />}
              style={{
                marginVertical: 7,
                borderRadius: 15,
              }}
              label="Password"
              value={password}
              secureTextEntry={secureTextEntry}
              onChangeText={(password) => setPassword(password)}
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye" : "eye-off"}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              }
            />

            <Button
              mode="text"
              onPress={() => {
                router.replace("/forgot_password");
              }}
            >
              Forgot Password?
            </Button>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onPress={() => {
                  if (!validateEmail(text)) {
                    alert("Invalid Email or Phone number");
                    return;
                  } else if (password.length < 6 || password.length > 12) {
                    alert(
                      "Invalid password length, it should be greater than 6 characters and max 12"
                    );
                  }else{
                    // doSignin
                    router.replace("/location");
                  }
                }}
                style={styles.buttons}
                buttonColor="#FEBD2F"
                textColor="black"
                mode="contained"
              >
                Sign In
              </Button>
              <Button
                mode="contained"
                style={styles.buttons}
                buttonColor="#FEBD2F"
                textColor="black"
                onPress={() => router.replace("/signup")}
              >
                Sign Up
              </Button>
            </View>

            <Text
              style={{
                textAlign: "center",
                color: "grey",
                margin: 20,
              }}
            >
              Or Continue with
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
});

export default SignUp;
