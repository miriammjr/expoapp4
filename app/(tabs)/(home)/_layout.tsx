import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


import { Fab, FabLabel } from '@/components/ui/fab';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
 


  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="auto" />
      <Fab onPress={() => router.navigate('/add-animal')}>
        <FabLabel>Add</FabLabel>     
      </Fab>
    </>
  );
}