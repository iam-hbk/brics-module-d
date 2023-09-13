import FontAwesome from "@expo/vector-icons/FontAwesome";
import firebase from "firebase/app";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import "@/apis/firebaseConfig";
import {
  PaperProvider,
  MD3LightTheme as Default_theme,
} from "react-native-paper";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
import CustomTheme from "@/constants/CustomTheme";
import TravelHeader from "@/components/TravelHeader";

const theme = {
  ...DefaultTheme,
  colors: CustomTheme.colors, // Copy it from the color codes scheme and then use it here
};

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen
          name="location"
          options={{ headerShown: true, title: "Location" }}
        />
        <Stack.Screen
          name="forgot_password"
          options={{ headerShown: true, title: "Forgot Password" }}
        />
        <Stack.Screen
          name="travel"
          options={{
            headerShown: true,
            header: (props) => <TravelHeader headerProps={props} />,
          }}
        />
      </Stack>
    </PaperProvider>
    // </ThemeProvider>
  );
}
