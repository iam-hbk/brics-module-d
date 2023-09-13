import { View } from "react-native";
import React from "react";
import { Button, Checkbox, Text, useTheme } from "react-native-paper";
import { router } from "expo-router";

const ForgotPassword = () => {
  const [checked, setChecked] = React.useState<Boolean>(false);
  const [checked2, setChecked2] = React.useState<Boolean>(false);
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
      }}
    >
      <Text variant="titleLarge">
        Please select options to send the link to reset password
      </Text>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: theme.colors.primaryContainer,
          width: "100%",
          marginVertical: 50,
        }}
      >
        <Checkbox.Item
          // mode={Platform.OS === "ios" ? "ios" : "android"}
          mode="android"
          labelStyle={{
            textAlign: "left",
          }}
          labelVariant="labelLarge"
          position="leading"
          label="Send to your email"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Checkbox.Item
          // mode={Platform.OS === "ios" ? "ios" : "android"}
          mode="android"
          labelStyle={{
            textAlign: "left",
          }}
          labelVariant="labelLarge"
          position="leading"
          label="Send to your phone number"
          status={checked2 ? "checked" : "unchecked"}
          onPress={() => {
            setChecked2(!checked2);
          }}
        />
      </View>
      <Button onPress={()=>router.replace("/verification")} mode="contained">Send Link</Button>
    </View>
  );
};

export default ForgotPassword;
