import { AnimalProvider } from "@/components/ui/ContextProvider";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { supabase } from "@/utils/supabase";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { AppState } from "react-native";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loaded] = useFonts({});

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <AnimalProvider>
            <Stack>
              <Stack.Screen
                name="(home)"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="index"
                options={{ headerShown: false }}
              />
            </Stack>
            <StatusBar style="auto" />
          </AnimalProvider>
        </ThemeProvider>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
