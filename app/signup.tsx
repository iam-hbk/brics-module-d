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
  Checkbox,
  IconButton,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { doSignup } from "@/apis/auth";

const SignUp = () => {
  const [text, setText] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [checked, setChecked] = React.useState<Boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const theme = useTheme();

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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FEBD2F",
      }}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "20%",
          }}
        >
          <Image
            source={require("@/assets/images/icon.png")}
            //   width={20}
            //   height={20}
            style={{
              width: "30%",
              height: "75%",
              borderRadius: 25,
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
            Register new account
          </Text>
          <Text variant="titleMedium">
            Please fill in this form to create a new account
          </Text>

          <View
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
              label="Your name"
              value={name}
              onChangeText={(name) => setName(name)}
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
            <TextInput
              left={<TextInput.Icon icon="email" />}
              style={{
                marginVertical: 7,
                borderRadius: 15,
              }}
              inputMode="email"
              label="Email"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              left={<TextInput.Icon icon="phone" />}
              style={{
                marginVertical: 7,
                borderRadius: 15,
              }}
              label="Phone number"
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
            />

            <Checkbox.Item
              mode="android"
              labelStyle={{
                textAlign: "left",
              }}
              labelVariant="labelMedium"
              position="leading"
              label="By creating an account, you agree to our Terms and Conditions"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                loading={loading}
                disabled={loading}
                onPress={async () => {
                  setLoading(true);
                  if (!validateEmail(text)) {
                    alert("Invalid Email or Phone number");
                    return;
                  } else if (password.length < 6 || password.length > 12) {
                    alert(
                      "Invalid password length, it should be greater than 6 characters and max 12"
                    );
                    return;
                  } else if (
                    name.length == 0 ||
                    phone.length == 0 ||
                    text.length == 0 ||
                    password.length == 0
                  ) {
                    alert("Please complete all the fields");
                    return;
                  } else {
                    router.replace("/location");
                    // doSignup({
                    //   name: "ronny",
                    //   phone: "1234567890",
                    //   email: "test@user.com",
                    //   password: "123456789",
                    // }).then((res) => {
                    //   console.log("USER\n", res);
                    //   setLoading(false);
                    // });
                  }
                }}
                style={styles.buttons}
                buttonColor="#FEBD2F"
                textColor="black"
                mode="contained"
              >
                Sign Up
              </Button>
              <Button
                mode="text"
                style={styles.buttons}
                buttonColor="#FEBD2F"
                textColor="black"
                onPress={() => router.replace("/signin")}
              >
                Sign In
              </Button>
            </View>

            <Text
              style={{
                textAlign: "center",
                color: "grey",
                marginVertical: 10,
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
          </View>
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
    width: "40%",
  },
});

export default SignUp;
