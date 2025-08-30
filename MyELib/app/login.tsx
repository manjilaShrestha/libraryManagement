// // // // // // // // // // // // // import { View, Text, TextInput, TouchableOpacity } from "react-native";
// // // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // // import { useRouter } from "expo-router";
// // // // // // // // // // // // // import "../global.css";

// // // // // // // // // // // // // export default function Login() {
// // // // // // // // // // // // //   const router = useRouter();
// // // // // // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // // // // // //   const [password, setPassword] = useState("");

// // // // // // // // // // // // //   const handleLogin = () => {
// // // // // // // // // // // // //     router.replace("/home"); // Navigate to Home page
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <View className="flex-1 justify-center items-center bg-white px-6">
// // // // // // // // // // // // //       <Text className="text-4xl font-bold mb-10">Login</Text>

// // // // // // // // // // // // //       <TextInput
// // // // // // // // // // // // //         placeholder="Email"
// // // // // // // // // // // // //         value={email}
// // // // // // // // // // // // //         onChangeText={setEmail}
// // // // // // // // // // // // //         className="w-full border border-gray-300 rounded-xl p-4 mb-5"
// // // // // // // // // // // // //       />

// // // // // // // // // // // // //       <TextInput
// // // // // // // // // // // // //         placeholder="Password"
// // // // // // // // // // // // //         value={password}
// // // // // // // // // // // // //         onChangeText={setPassword}
// // // // // // // // // // // // //         secureTextEntry
// // // // // // // // // // // // //         className="w-full border border-gray-300 rounded-xl p-4 mb-8"
// // // // // // // // // // // // //       />

// // // // // // // // // // // // //       <TouchableOpacity
// // // // // // // // // // // // //         onPress={handleLogin}
// // // // // // // // // // // // //         className="bg-blue-500 w-full py-4 rounded-xl"
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <Text className="text-white text-center text-lg font-semibold">
// // // // // // // // // // // // //           Login
// // // // // // // // // // // // //         </Text>
// // // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // // //     </View>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }


// // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // import { View, Text, TextInput, TouchableOpacity } from "react-native";

// // // // // // // // // // // // export default function LoginScreen({ navigation }) {
// // // // // // // // // // // //   const [username, setUsername] = useState("");
// // // // // // // // // // // //   const [password, setPassword] = useState("");

// // // // // // // // // // // //   const handleLogin = () => {
// // // // // // // // // // // //     // simple dummy login (always succeeds)
// // // // // // // // // // // //     navigation.navigate("Home");
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <View className="flex-1 items-center justify-center bg-white p-5">
// // // // // // // // // // // //       <Text className="text-2xl font-bold mb-6">Login</Text>

// // // // // // // // // // // //       <TextInput
// // // // // // // // // // // //         placeholder="Username"
// // // // // // // // // // // //         value={username}
// // // // // // // // // // // //         onChangeText={setUsername}
// // // // // // // // // // // //         className="border border-gray-300 rounded w-full p-3 mb-4"
// // // // // // // // // // // //       />

// // // // // // // // // // // //       <TextInput
// // // // // // // // // // // //         placeholder="Password"
// // // // // // // // // // // //         value={password}
// // // // // // // // // // // //         onChangeText={setPassword}
// // // // // // // // // // // //         secureTextEntry
// // // // // // // // // // // //         className="border border-gray-300 rounded w-full p-3 mb-6"
// // // // // // // // // // // //       />

// // // // // // // // // // // //       <TouchableOpacity
// // // // // // // // // // // //         onPress={handleLogin}
// // // // // // // // // // // //         className="bg-blue-500 rounded p-3 w-full"
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <Text className="text-center text-white font-bold">Login</Text>
// // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // //     </View>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }


// // // // // // // // // // // import { Redirect } from "expo-router";

// // // // // // // // // // // export default function Index() {
// // // // // // // // // // //   // Always redirect to login screen
// // // // // // // // // // //   return <Redirect href="/login" />;
// // // // // // // // // // // }

// // // // // // // // // // import { View, Text, TouchableOpacity } from "react-native";
// // // // // // // // // // import { router } from "expo-router";

// // // // // // // // // // export default function LoginScreen() {
// // // // // // // // // //   return (
// // // // // // // // // //     <View className="flex-1 items-center justify-center bg-white">
// // // // // // // // // //       <Text className="text-2xl font-bold mb-6">Login Page</Text>

// // // // // // // // // //       <TouchableOpacity
// // // // // // // // // //         onPress={() => router.push("/home")}
// // // // // // // // // //         className="bg-blue-500 rounded p-3 w-40"
// // // // // // // // // //       >
// // // // // // // // // //         <Text className="text-center text-white font-bold">Login</Text>
// // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // //     </View>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // import { useRouter } from "expo-router";
// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { Text, TextInput, TouchableOpacity, View } from "react-native";

// // // // // // // // // export default function Login() {
// // // // // // // // //   const router = useRouter();
// // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // //   const [password, setPassword] = useState("");

// // // // // // // // //   function handleLogin() {
// // // // // // // // //     // simple check for filled values
// // // // // // // // //     if (email.trim() && password.trim()) {
// // // // // // // // //       router.push("/home"); // ✅ your Home page route
// // // // // // // // //     } else {
// // // // // // // // //       alert("Please enter both email and password");
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <View className="flex-1 justify-center px-6 bg-white">
// // // // // // // // //       <Text className="text-3xl font-bold text-center text-blue-700 mb-8">
// // // // // // // // //         Welcome Back
// // // // // // // // //       </Text>

// // // // // // // // //       <TextInput
// // // // // // // // //         placeholder="Email"
// // // // // // // // //         value={email}
// // // // // // // // //         onChangeText={setEmail}
// // // // // // // // //         keyboardType="email-address"
// // // // // // // // //         autoCapitalize="none"
// // // // // // // // //         className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
// // // // // // // // //         placeholderTextColor="#888"
// // // // // // // // //       />

// // // // // // // // //       <TextInput
// // // // // // // // //         placeholder="Password"
// // // // // // // // //         value={password}
// // // // // // // // //         onChangeText={setPassword}
// // // // // // // // //         secureTextEntry
// // // // // // // // //         className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
// // // // // // // // //         placeholderTextColor="#888"
// // // // // // // // //       />

// // // // // // // // //       <TouchableOpacity
// // // // // // // // //         onPress={handleLogin}
// // // // // // // // //         className="bg-blue-600 py-3 rounded-xl"
// // // // // // // // //       >
// // // // // // // // //         <Text className="text-white text-center font-semibold text-lg">
// // // // // // // // //           Login
// // // // // // // // //         </Text>
// // // // // // // // //       </TouchableOpacity>

// // // // // // // // //       <Text className="text-sm text-gray-500 text-center mt-6">
// // // // // // // // //         Don’t have an account?{" "}
// // // // // // // // //         <Text className="text-blue-600 font-medium">Sign up</Text>
// // // // // // // // //       </Text>
// // // // // // // // //     </View>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import { useRouter } from "expo-router";
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { Text, TextInput, TouchableOpacity, View } from "react-native";

// // // // // // // // export default function Login() {
// // // // // // // //   const router = useRouter();
// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [password, setPassword] = useState("");

// // // // // // // //   function handleLogin() {
// // // // // // // //     if (email.trim() && password.trim()) {
// // // // // // // //       router.push("/home"); // go to home page
// // // // // // // //     } else {
// // // // // // // //       alert("Please enter both email and password");
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <View className="flex-1 justify-center px-6 bg-white">
// // // // // // // //       <Text className="text-3xl font-bold text-center text-blue-700 mb-8">
// // // // // // // //         Welcome Back
// // // // // // // //       </Text>

// // // // // // // //       <TextInput
// // // // // // // //         placeholder="Email"
// // // // // // // //         value={email}
// // // // // // // //         onChangeText={setEmail}
// // // // // // // //         keyboardType="email-address"
// // // // // // // //         autoCapitalize="none"
// // // // // // // //         className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
// // // // // // // //         placeholderTextColor="#888"
// // // // // // // //       />

// // // // // // // //       <TextInput
// // // // // // // //         placeholder="Password"
// // // // // // // //         value={password}
// // // // // // // //         onChangeText={setPassword}
// // // // // // // //         secureTextEntry
// // // // // // // //         className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
// // // // // // // //         placeholderTextColor="#888"
// // // // // // // //       />

// // // // // // // //       <TouchableOpacity
// // // // // // // //         onPress={handleLogin}
// // // // // // // //         className="bg-blue-600 py-3 rounded-xl"
// // // // // // // //       >
// // // // // // // //         <Text className="text-white text-center font-semibold text-lg">
// // // // // // // //           Login
// // // // // // // //         </Text>
// // // // // // // //       </TouchableOpacity>

// // // // // // // //       <Text className="text-sm text-gray-500 text-center mt-6">
// // // // // // // //         Don’t have an account?{" "}
// // // // // // // //         <Text className="text-blue-600 font-medium">Sign up</Text>
// // // // // // // //       </Text>
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import { useRouter } from "expo-router";
// // // // // // // import React, { useState } from "react";
// // // // // // // import { Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";
// // // // // // // import AsyncStorage from "@react-native-async-storage/async-storage";

// // // // // // // export default function Login() {
// // // // // // //   const router = useRouter();
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   async function handleLogin() {
// // // // // // //     if (!email.trim() || !password.trim()) {
// // // // // // //       Alert.alert("Error", "Please enter both email and password");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setLoading(true);

// // // // // // //     try {
// // // // // // //       const res = await fetch("https://YOUR_BACKEND_URL/login", {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({ email, password }),
// // // // // // //       });

// // // // // // //       const data = await res.json();

// // // // // // //       if (data.success) {
// // // // // // //         // Save token to AsyncStorage
// // // // // // //         await AsyncStorage.setItem("token", data.token);
// // // // // // //         router.push("/home");
// // // // // // //       } else {
// // // // // // //         Alert.alert("Login Failed", data.message || "Invalid credentials");
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       Alert.alert("Network Error", "Could not connect to server");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <View style={{ flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#fff" }}>
// // // // // // //       <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center", color: "#1D4ED8", marginBottom: 32 }}>
// // // // // // //         Welcome Back
// // // // // // //       </Text>

// // // // // // //       <TextInput
// // // // // // //         placeholder="Email"
// // // // // // //         value={email}
// // // // // // //         onChangeText={setEmail}
// // // // // // //         keyboardType="email-address"
// // // // // // //         autoCapitalize="none"
// // // // // // //         style={{
// // // // // // //           borderWidth: 1,
// // // // // // //           borderColor: "#ccc",
// // // // // // //           borderRadius: 12,
// // // // // // //           padding: 12,
// // // // // // //           marginBottom: 16,
// // // // // // //           fontSize: 16,
// // // // // // //         }}
// // // // // // //       />

// // // // // // //       <TextInput
// // // // // // //         placeholder="Password"
// // // // // // //         value={password}
// // // // // // //         onChangeText={setPassword}
// // // // // // //         secureTextEntry
// // // // // // //         style={{
// // // // // // //           borderWidth: 1,
// // // // // // //           borderColor: "#ccc",
// // // // // // //           borderRadius: 12,
// // // // // // //           padding: 12,
// // // // // // //           marginBottom: 24,
// // // // // // //           fontSize: 16,
// // // // // // //         }}
// // // // // // //       />

// // // // // // //       <TouchableOpacity
// // // // // // //         onPress={handleLogin}
// // // // // // //         style={{ backgroundColor: "#2563EB", padding: 14, borderRadius: 12 }}
// // // // // // //         disabled={loading}
// // // // // // //       >
// // // // // // //         {loading ? (
// // // // // // //           <ActivityIndicator color="#fff" />
// // // // // // //         ) : (
// // // // // // //           <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
// // // // // // //             Login
// // // // // // //           </Text>
// // // // // // //         )}
// // // // // // //       </TouchableOpacity>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // }


// // // // // // import { useRouter } from "expo-router";
// // // // // // import React, { useState } from "react";
// // // // // // import { Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";
// // // // // // import AsyncStorage from "@react-native-async-storage/async-storage";

// // // // // // export default function Login() {
// // // // // //   const router = useRouter();
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   async function handleLogin() {
// // // // // //     if (!email.trim() || !password.trim()) {
// // // // // //       Alert.alert("Error", "Please enter both email and password");
// // // // // //       return;
// // // // // //     }

// // // // // //     setLoading(true);

// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:5000/api/auth/login", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ email, password }),
// // // // // //       });

// // // // // //       const data = await res.json();

// // // // // //       if (res.ok && data.token) {
// // // // // //         // Save token and user info to AsyncStorage
// // // // // //         await AsyncStorage.setItem("token", data.token);
// // // // // //         await AsyncStorage.setItem("user", JSON.stringify(data.user));

// // // // // //         router.push("/home"); // navigate to home
// // // // // //       } else {
// // // // // //         Alert.alert("Login Failed", data.message || "Invalid credentials");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       Alert.alert("Network Error", "Could not connect to server");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }

// // // // // //   return (
// // // // // //     <View style={{ flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#fff" }}>
// // // // // //       <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center", color: "#1D4ED8", marginBottom: 32 }}>
// // // // // //         Welcome Back
// // // // // //       </Text>

// // // // // //       <TextInput
// // // // // //         placeholder="Email"
// // // // // //         value={email}
// // // // // //         onChangeText={setEmail}
// // // // // //         keyboardType="email-address"
// // // // // //         autoCapitalize="none"
// // // // // //         style={{
// // // // // //           borderWidth: 1,
// // // // // //           borderColor: "#ccc",
// // // // // //           borderRadius: 12,
// // // // // //           padding: 12,
// // // // // //           marginBottom: 16,
// // // // // //           fontSize: 16,
// // // // // //         }}
// // // // // //       />

// // // // // //       <TextInput
// // // // // //         placeholder="Password"
// // // // // //         value={password}
// // // // // //         onChangeText={setPassword}
// // // // // //         secureTextEntry
// // // // // //         style={{
// // // // // //           borderWidth: 1,
// // // // // //           borderColor: "#ccc",
// // // // // //           borderRadius: 12,
// // // // // //           padding: 12,
// // // // // //           marginBottom: 24,
// // // // // //           fontSize: 16,
// // // // // //         }}
// // // // // //       />

// // // // // //       <TouchableOpacity
// // // // // //         onPress={handleLogin}
// // // // // //         style={{ backgroundColor: "#2563EB", padding: 14, borderRadius: 12 }}
// // // // // //         disabled={loading}
// // // // // //       >
// // // // // //         {loading ? (
// // // // // //           <ActivityIndicator color="#fff" />
// // // // // //         ) : (
// // // // // //           <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
// // // // // //             Login
// // // // // //           </Text>
// // // // // //         )}
// // // // // //       </TouchableOpacity>
// // // // // //     </View>
// // // // // //   );
// // // // // // }


// // // // // import { useRouter } from "expo-router";
// // // // // import React, { useState } from "react";
// // // // // import { Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";
// // // // // import AsyncStorage from "@react-native-async-storage/async-storage";

// // // // // export default function Login() {
// // // // //   const router = useRouter();
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   async function handleLogin() {
// // // // //     if (!email.trim() || !password.trim()) {
// // // // //       Alert.alert("Error", "Please enter both email and password");
// // // // //       return;
// // // // //     }

// // // // //     setLoading(true);

// // // // //     try {
// // // // //       const res = await fetch("http://localhost:5000/api/auth/login", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ email, password }),
// // // // //       });

// // // // //       const data = await res.json();

// // // // //       if (res.ok && data.token) {
// // // // //         await AsyncStorage.setItem("token", data.token);
// // // // //         await AsyncStorage.setItem("user", JSON.stringify(data.user));

// // // // //         // Navigate to Dashboard instead of Home
// // // // //         router.push("/home")
// // // // //       } else {
// // // // //         Alert.alert("Login Failed", data.message || "Invalid credentials");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       Alert.alert("Network Error", "Could not connect to server");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <View style={{ flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#fff" }}>
// // // // //       <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center", color: "#1D4ED8", marginBottom: 32 }}>
// // // // //         Welcome Back
// // // // //       </Text>

// // // // //       <TextInput
// // // // //         placeholder="Email"
// // // // //         value={email}
// // // // //         onChangeText={setEmail}
// // // // //         keyboardType="email-address"
// // // // //         autoCapitalize="none"
// // // // //         style={{
// // // // //           borderWidth: 1,
// // // // //           borderColor: "#ccc",
// // // // //           borderRadius: 12,
// // // // //           padding: 12,
// // // // //           marginBottom: 16,
// // // // //           fontSize: 16,
// // // // //         }}
// // // // //       />

// // // // //       <TextInput
// // // // //         placeholder="Password"
// // // // //         value={password}
// // // // //         onChangeText={setPassword}
// // // // //         secureTextEntry
// // // // //         style={{
// // // // //           borderWidth: 1,
// // // // //           borderColor: "#ccc",
// // // // //           borderRadius: 12,
// // // // //           padding: 12,
// // // // //           marginBottom: 24,
// // // // //           fontSize: 16,
// // // // //         }}
// // // // //       />

// // // // //       <TouchableOpacity
// // // // //         onPress={handleLogin}
// // // // //         style={{ backgroundColor: "#2563EB", padding: 14, borderRadius: 12 }}
// // // // //         disabled={loading}
// // // // //       >
// // // // //         {loading ? (
// // // // //           <ActivityIndicator color="#fff" />
// // // // //         ) : (
// // // // //           <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
// // // // //             Login
// // // // //           </Text>
// // // // //         )}
// // // // //       </TouchableOpacity>
// // // // //     </View>
// // // // //   );
// // // // // }


// // // // import React, { useState, useEffect } from "react";
// // // // import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// // // // import AsyncStorage from "@react-native-async-storage/async-storage";
// // // // import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// // // // import { useNavigation } from "@react-navigation/native";

// // // // type RootStackParamList = {
// // // //   Login: undefined;
// // // //   Dashboard: undefined;
// // // //   Home: undefined;
// // // // };

// // // // type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

// // // // export default function Login() {
// // // //   const [email, setEmail] = useState<string>("");
// // // //   const [password, setPassword] = useState<string>("");

// // // //   const navigation = useNavigation<LoginScreenProp>();

// // // //   const redirectUser = (role: string) => {
// // // //     if (role === "librarian") navigation.replace("Dashboard");
// // // //     else navigation.replace("Home");
// // // //   };

// // // //   useEffect(() => {
// // // //     const checkLogin = async () => {
// // // //       const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
// // // //       const role = await AsyncStorage.getItem("role");
// // // //       if (isLoggedIn === "true" && role) redirectUser(role);
// // // //     };
// // // //     checkLogin();
// // // //   }, []);

// // // //   const handleLogin = async () => {
// // // //     try {
// // // //       const res = await fetch("http://192.168.1.5:5000/api/auth/login", {
// // // //   method: "POST",
// // // //   headers: { "Content-Type": "application/json" },
// // // //   body: JSON.stringify({ email, password }),
// // // // });

// // // //       const data = await res.json();

// // // //       if (res.ok) {
// // // //         await AsyncStorage.setItem("token", data.token);
// // // //         await AsyncStorage.setItem("name", data.user.name);
// // // //         await AsyncStorage.setItem("role", data.user.role);
// // // //         await AsyncStorage.setItem("isLoggedIn", "true");
// // // //         redirectUser(data.user.role);
// // // //       } else {
// // // //         Alert.alert("Login Failed", data.msg || "Invalid credentials");
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       Alert.alert("Error", "Server error");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <View style={styles.form}>
// // // //         <Text style={styles.title}>WELCOME BACK!</Text>
// // // //         <TextInput
// // // //           placeholder="Email"
// // // //           value={email}
// // // //           onChangeText={setEmail}
// // // //           keyboardType="email-address"
// // // //           autoCapitalize="none"
// // // //           style={styles.input}
// // // //         />
// // // //         <TextInput
// // // //           placeholder="Password"
// // // //           value={password}
// // // //           onChangeText={setPassword}
// // // //           secureTextEntry
// // // //           style={styles.input}
// // // //         />
// // // //         <TouchableOpacity style={styles.button} onPress={handleLogin}>
// // // //           <Text style={styles.buttonText}>LOGIN</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" },
// // // //   form: { width: "90%", maxWidth: 400, padding: 20, backgroundColor: "#fff", borderRadius: 10 },
// // // //   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // //   input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10, marginBottom: 15 },
// // // //   button: { backgroundColor: "#2563eb", padding: 12, borderRadius: 5 },
// // // //   buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
// // // // });


// // // import React, { useState, useEffect } from "react";
// // // import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// // // import AsyncStorage from "@react-native-async-storage/async-storage";
// // // import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// // // import { useNavigation } from "@react-navigation/native";

// // // type RootStackParamList = {
// // //   Login: undefined;
// // //   Dashboard: undefined;
// // // };

// // // type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

// // // export default function Login() {
// // //   const [email, setEmail] = useState<string>("");
// // //   const [password, setPassword] = useState<string>("");

// // //   const navigation = useNavigation<LoginScreenProp>();

// // //   const redirectUser = () => {
// // //     navigation.replace("Dashboard"); // Everyone goes to Dashboard
// // //   };

// // //   useEffect(() => {
// // //     const checkLogin = async () => {
// // //       const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
// // //       if (isLoggedIn === "true") redirectUser();
// // //     };
// // //     checkLogin();
// // //   }, []);

// // //   const handleLogin = async () => {
// // //     try {
// // //       // Replace localhost with your PC IP
// // //       const res = await fetch("http://192.168.1.5:5000/api/auth/login", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email, password }),
// // //       });

// // //       const data = await res.json();

// // //       if (res.ok) {
// // //         await AsyncStorage.setItem("token", data.token);
// // //         await AsyncStorage.setItem("name", data.user.name);
// // //         await AsyncStorage.setItem("role", data.user.role);
// // //         await AsyncStorage.setItem("isLoggedIn", "true");
// // //         redirectUser();
// // //       } else {
// // //         Alert.alert("Login Failed", data.msg || "Invalid credentials");
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //       Alert.alert("Error", "Server error");
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.form}>
// // //         <Text style={styles.title}>WELCOME BACK!</Text>
// // //         <TextInput
// // //           placeholder="Email"
// // //           value={email}
// // //           onChangeText={setEmail}
// // //           keyboardType="email-address"
// // //           autoCapitalize="none"
// // //           style={styles.input}
// // //         />
// // //         <TextInput
// // //           placeholder="Password"
// // //           value={password}
// // //           onChangeText={setPassword}
// // //           secureTextEntry
// // //           style={styles.input}
// // //         />
// // //         <TouchableOpacity style={styles.button} onPress={handleLogin}>
// // //           <Text style={styles.buttonText}>LOGIN</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" },
// // //   form: { width: "90%", maxWidth: 400, padding: 20, backgroundColor: "#fff", borderRadius: 10 },
// // //   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // //   input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10, marginBottom: 15 },
// // //   button: { backgroundColor: "#2563eb", padding: 12, borderRadius: 5 },
// // //   buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
// // // });


// // import { useState } from "react";
// // import { Text, TextInput, TouchableOpacity, View } from "react-native";
// // import { useRouter } from "expo-router";

// // export default function Login() {
// //   const router = useRouter();
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   function handleLogin() {
// //     if (email && password) {
// //       router.push("/Dashboard"); // go to Dashboard
// //     }
// //   }

// //   return (
// //     <View className="flex-1 justify-center px-6 bg-white">
// //       <Text className="text-3xl font-bold text-center text-blue-700 mb-8">
// //         MyELib Login
// //       </Text>

// //       <TextInput
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         autoCapitalize="none"
// //         className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
// //         placeholderTextColor="#888"
// //       />

// //       <TextInput
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //         className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
// //         placeholderTextColor="#888"
// //       />

// //       <TouchableOpacity
// //         onPress={handleLogin}
// //         className="bg-blue-600 py-3 rounded-xl"
// //       >
// //         <Text className="text-white text-center font-semibold text-lg">
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

