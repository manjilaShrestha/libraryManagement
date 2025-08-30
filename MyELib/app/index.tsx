// // // // // // // // // // // import { Image } from 'expo-image';
// // // // // // // // // // // import { Platform, StyleSheet } from 'react-native';

// // // // // // // // // // // import { HelloWave } from '@/components/HelloWave';
// // // // // // // // // // // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // // // // // // // // // // import { ThemedText } from '@/components/ThemedText';
// // // // // // // // // // // import { ThemedView } from '@/components/ThemedView';

// // // // // // // // // // // export default function HomeScreen() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <ParallaxScrollView
// // // // // // // // // // //       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
// // // // // // // // // // //       headerImage={
// // // // // // // // // // //         <Image
// // // // // // // // // // //           source={require('@/assets/images/partial-react-logo.png')}
// // // // // // // // // // //           style={styles.reactLogo}
// // // // // // // // // // //         />
// // // // // // // // // // //       }>
// // // // // // // // // // //       <ThemedView style={styles.titleContainer}>
// // // // // // // // // // //         <ThemedText type="title">Welcome!</ThemedText>
// // // // // // // // // // //         <HelloWave />
// // // // // // // // // // //       </ThemedView>
// // // // // // // // // // //       <ThemedView style={styles.stepContainer}>
// // // // // // // // // // //         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
// // // // // // // // // // //         <ThemedText>
// // // // // // // // // // //           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
// // // // // // // // // // //           Press{' '}
// // // // // // // // // // //           <ThemedText type="defaultSemiBold">
// // // // // // // // // // //             {Platform.select({
// // // // // // // // // // //               ios: 'cmd + d',
// // // // // // // // // // //               android: 'cmd + m',
// // // // // // // // // // //               web: 'F12',
// // // // // // // // // // //             })}
// // // // // // // // // // //           </ThemedText>{' '}
// // // // // // // // // // //           to open developer tools.
// // // // // // // // // // //         </ThemedText>
// // // // // // // // // // //       </ThemedView>
// // // // // // // // // // //       <ThemedView style={styles.stepContainer}>
// // // // // // // // // // //         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
// // // // // // // // // // //         <ThemedText>
// // // // // // // // // // //           {`Tap the Explore tab to learn more about what's included in this starter app.`}
// // // // // // // // // // //         </ThemedText>
// // // // // // // // // // //       </ThemedView>
// // // // // // // // // // //       <ThemedView style={styles.stepContainer}>
// // // // // // // // // // //         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
// // // // // // // // // // //         <ThemedText>
// // // // // // // // // // //           {`When you're ready, run `}
// // // // // // // // // // //           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
// // // // // // // // // // //           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
// // // // // // // // // // //           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
// // // // // // // // // // //           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
// // // // // // // // // // //         </ThemedText>
// // // // // // // // // // //       </ThemedView>
// // // // // // // // // // //     </ParallaxScrollView>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // //   titleContainer: {
// // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // //     gap: 8,
// // // // // // // // // // //   },
// // // // // // // // // // //   stepContainer: {
// // // // // // // // // // //     gap: 8,
// // // // // // // // // // //     marginBottom: 8,
// // // // // // // // // // //   },
// // // // // // // // // // //   reactLogo: {
// // // // // // // // // // //     height: 178,
// // // // // // // // // // //     width: 290,
// // // // // // // // // // //     bottom: 0,
// // // // // // // // // // //     left: 0,
// // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // //   },
// // // // // // // // // // // });



// // // // // // // // // // import "../../global.css";

// // // // // // // // // import { Text, View } from "react-native";

// // // // // // // // // export default function Index() {
// // // // // // // // //   return (
// // // // // // // // //     <View className="flex-1 items-center justify-center bg-white">
// // // // // // // // //       <Text className="text-xl font-bold text-blue-500">
// // // // // // // // //         Welcome to Nativewind!
// // // // // // // // //       </Text>
// // // // // // // // //     </View>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // // import { Redirect } from "expo-router";
// // // // // // // // // // import React from "react";
// // // // // // // // // // import { StyleSheet } from "react-native";

// // // // // // // // // // const index = () => {
// // // // // // // // // //   return <Redirect href="/(tabs)/" />;
// // // // // // // // // // };

// // // // // // // // // // export default index;

// // // // // // // // // // const styles = StyleSheet.create({});




// // // // // // // // import React from "react";
// // // // // // // // import { NavigationContainer } from "@react-navigation/native";
// // // // // // // // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // // // // // // // import LoginScreen from "./login";
// // // // // // // // import HomeScreen from "./home";

// // // // // // // // const Stack = createNativeStackNavigator();

// // // // // // // // export default function App() {
// // // // // // // //   return (
// // // // // // // //     <NavigationContainer>
// // // // // // // //       <Stack.Navigator initialRouteName="Login">
// // // // // // // //         <Stack.Screen name="Login" component={LoginScreen} />
// // // // // // // //         <Stack.Screen name="Home" component={HomeScreen} />
// // // // // // // //       </Stack.Navigator>
// // // // // // // //     </NavigationContainer>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import { Redirect } from "expo-router";

// // // // // // // export default function Index() {
// // // // // // //   // Always redirect to login first
// // // // // // //   return <Redirect href="/login" />;
// // // // // // // }


// // // // // // import { NavigationContainer } from "@react-navigation/native";
// // // // // // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // // // // // import Login from "./login";
// // // // // // import Dashboard from "./Dashboard";

// // // // // // type RootStackParamList = {
// // // // // //   Login: undefined;
// // // // // //   Dashboard: undefined;
// // // // // //   Home: undefined;
// // // // // // };

// // // // // // const Stack = createNativeStackNavigator<RootStackParamList>();

// // // // // // export default function App() {
// // // // // //   return (
// // // // // //     <NavigationContainer>
// // // // // //       <Stack.Navigator screenOptions={{ headerShown: false }}>
// // // // // //         <Stack.Screen name="Login" component={Login} />
// // // // // //         <Stack.Screen name="Dashboard" component={Dashboard} />
// // // // // //       </Stack.Navigator>
// // // // // //     </NavigationContainer>
// // // // // //   );
// // // // // // }


// // // // // import React from "react";
// // // // // import { NavigationContainer } from "@react-navigation/native";
// // // // // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // // // // import Login from "./login";         // Your Login folder
// // // // // import Dashboard from "./Dashboard"; // Dashboard inside same folder



// // // // // type RootStackParamList = {
// // // // //   Login: undefined;
// // // // //   Dashboard: undefined;
// // // // // };

// // // // // const Stack = createNativeStackNavigator<RootStackParamList>();

// // // // // export default function App() {
// // // // //   return (
// // // // //     <NavigationContainer>
// // // // //       <Stack.Navigator screenOptions={{ headerShown: false }}>
// // // // //         <Stack.Screen name="Login" component={Login} />
// // // // //         <Stack.Screen name="Dashboard" component={Dashboard} />
// // // // //       </Stack.Navigator>
// // // // //     </NavigationContainer>
// // // // //   );
// // // // // }


// // // // import { Redirect } from "expo-router";

// // // // export default function Index() {
// // // //   return <Redirect href="/login" />;
// // // // }


// // // import { useEffect } from "react";
// // // import { useRouter } from "expo-router";

// // // export default function Index() {
// // //   const router = useRouter();

// // //   useEffect(() => {
// // //     // Redirect to login page immediately
// // //     router.replace("/login");
// // //   }, []);

// // //   return null; // blank while redirecting
// // // }

// // import { View, Text, TextInput, TouchableOpacity } from "react-native";
// // import { useState } from "react";
// // import "../global.css"; // Tailwind

// // export default function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = () => {
// //     alert(`Logged in as ${email}`);
// //   };

// //   return (
// //     <View className="flex-1 justify-center items-center bg-white px-6">
// //       <Text className="text-4xl font-bold mb-10">Login</Text>

// //       <TextInput
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         className="w-full border border-gray-300 rounded-xl p-4 mb-5"
// //       />

// //       <TextInput
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //         className="w-full border border-gray-300 rounded-xl p-4 mb-8"
// //       />

// //       <TouchableOpacity
// //         onPress={handleLogin}
// //         className="bg-blue-500 w-full py-4 rounded-xl"
// //       >
// //         <Text className="text-white text-center text-lg font-semibold">
// //           Login
// //         </Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }


// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import { useState } from "react";
// import { useRouter } from "expo-router";
// import "../global.css";

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Navigate to dummy dashboard
//     router.replace("/Dashboard");
//   };

//   return (
//     <View className="flex-1 justify-center items-center bg-white px-6">
//       <Text className="text-4xl font-bold mb-10">Login</Text>

//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         className="w-full border border-gray-300 rounded-xl p-4 mb-5"
//       />

//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         className="w-full border border-gray-300 rounded-xl p-4 mb-8"
//       />

//       <TouchableOpacity
//         onPress={handleLogin}
//         className="bg-blue-500 w-full py-4 rounded-xl"
//       >
//         <Text className="text-white text-center text-lg font-semibold">
//           Login
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import "../global.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        // Save token + user info in local storage
        await AsyncStorage.setItem("token", res.data.token);
        await AsyncStorage.setItem("user", JSON.stringify(res.data.user));

        // Navigate to dashboard
        router.replace("/Dashboard");
      } else {
        Alert.alert("Login Failed", "Invalid credentials");
      }
    } catch (err: any) {
      console.error(err);
      Alert.alert("Error", err.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-4xl font-bold mb-10">Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="w-full border border-gray-300 rounded-xl p-4 mb-5"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full border border-gray-300 rounded-xl p-4 mb-8"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-500 w-full py-4 rounded-xl"
        disabled={loading}
      >
        <Text className="text-white text-center text-lg font-semibold">
          {loading ? "Logging in..." : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
