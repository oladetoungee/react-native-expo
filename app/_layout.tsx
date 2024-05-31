
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "@/global.css"


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
const [fontsLoaded, error] = useFonts({
  'Poppins-Regular': require('../assets/fonts/Poppins-Black.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),

});
useEffect(() => {
  if (error) throw error;
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}
, [fontsLoaded, error]);
if (!fontsLoaded && !error) return null;
  return (
  
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
<Stack.Screen name="(auth)/sign-in" options={{ headerShown: false }} />
<Stack.Screen name="(auth)/sign-up" options={{ headerShown: false }} />
{/* <Stack.Screen name="(auth)/sign-up" options={{ headerShown: false }} /> */}
{/* <Stack.Screen name="(tabs)/home" options={{ headerShown: false }} />
<Stack.Screen name="(tabs)/profile" options={{ headerShown: false }} /> */}
      </Stack>

  );
}
