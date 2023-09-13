import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
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

const SignIn = () => {
  const [text, setText] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [checked, setChecked] = React.useState<Boolean>(false);
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
            label="Your name"
            value={name}
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            style={{
              marginVertical: 7,
              borderRadius: 15,
            }}
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            right={<TextInput.Icon icon="eye" />}
          />
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
            label="Phone number"
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
          />

          <Checkbox.Item
            // mode={Platform.OS === "ios" ? "ios" : "android"}
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
          <Button
            onPress={() => router.replace("/location")}
            style={styles.buttons}
            buttonColor="#FEBD2F"
            textColor="black"
            mode="contained"
          >
            Sign Up
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
              Already have an account?
            </Text>
            <Button mode="text" onPress={() => router.replace("/signin")}>
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
