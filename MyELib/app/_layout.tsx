// // // // // // import { Tabs } from 'expo-router';
// // // // // // import React from 'react';
// // // // // // import { Platform } from 'react-native';

// // // // // // import { HapticTab } from '@/components/HapticTab';
// // // // // // import { IconSymbol } from '@/components/ui/IconSymbol';
// // // // // // import TabBarBackground from '@/components/ui/TabBarBackground';
// // // // // // import { Colors } from '@/constants/Colors';
// // // // // // import { useColorScheme } from '@/hooks/useColorScheme';

// // // // // // export default function TabLayout() {
// // // // // //   const colorScheme = useColorScheme();

// // // // // //   return (
// // // // // //     <Tabs
// // // // // //       screenOptions={{
// // // // // //         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
// // // // // //         headerShown: false,
// // // // // //         tabBarButton: HapticTab,
// // // // // //         tabBarBackground: TabBarBackground,
// // // // // //         tabBarStyle: Platform.select({
// // // // // //           ios: {
// // // // // //             // Use a transparent background on iOS to show the blur effect
// // // // // //             position: 'absolute',
// // // // // //           },
// // // // // //           default: {},
// // // // // //         }),
// // // // // //       }}>
// // // // // //       <Tabs.Screen
// // // // // //         name="index"
// // // // // //         options={{
// // // // // //           title: 'Home',
// // // // // //           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
// // // // // //         }}
// // // // // //       />
// // // // // //       <Tabs.Screen
// // // // // //         name="explore"
// // // // // //         options={{
// // // // // //           title: 'Explore',
// // // // // //           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
// // // // // //         }}
// // // // // //       />
// // // // // //     </Tabs>
// // // // // //   );
// // // // // // }


// // // // // import "../global.css";
// // // // // import { Drawer } from "expo-router/drawer";

// // // // // export default function RootLayout() {
// // // // //   return (
// // // // //     <Drawer screenOptions={{ headerShown: false }}>
// // // // //       {/* Drawer will contain tabs as one screen */}
// // // // //       <Drawer.Screen name="(tabs)" options={{ drawerLabel: "Home" }} />
// // // // //       <Drawer.Screen name="login" options={{ drawerLabel: "Login" }} />
// // // // //     </Drawer>
// // // // //   );
// // // // // }

// // // // import { SafeAreaProvider } from "react-native-safe-area-context";
// // // // import { Stack } from "expo-router";
// // // // import "../../global.css"; // Import Tailwind

// // // // export default function RootLayout() {
// // // //   return (
// // // //     <SafeAreaProvider>
// // // //       <Stack screenOptions={{ headerShown: false }} />
// // // //     </SafeAreaProvider>
// // // //   );
// // // // }

// // // import { SafeAreaProvider } from "react-native-safe-area-context";
// // // import { Stack } from "expo-router";
// // // import "../global.css"; // Import Tailwind global CSS

// // // export default function RootLayout() {
// // //   return (
// // //     <SafeAreaProvider>
// // //       <Stack screenOptions={{ headerShown: false }} />
// // //     </SafeAreaProvider>
// // //   );
// // // }


// // // import { Stack } from "expo-router";
// // // import "nativewind";




// // // export default function RootLayout() {
// // //   return <Stack />;
// // // }


// // // app/_layout.tsx (or RootLayout.tsx)
// // import { Stack } from "expo-router";
// // import "nativewind"; // only needs to be imported once

// // export default function RootLayout() {
// //   return (
// //     <Stack
// //       screenOptions={{
// //         headerShown: false, // hide headers globally
// //       }}
// //     />
// //   );
// // }


// import { Stack } from "expo-router";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// export default function RootLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Stack screenOptions={{ headerShown: false }}>
//         {/* Register screens for navigation */}
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         <Stack.Screen name="login" options={{ headerShown: false }} />
//         <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
//       </Stack>
//     </GestureHandlerRootView>
//   );
// }

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
