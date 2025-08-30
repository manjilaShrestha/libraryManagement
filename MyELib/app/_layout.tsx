import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import "../global.css"; // Import Tailwind

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
