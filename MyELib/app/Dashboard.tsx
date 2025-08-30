// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { View, Text, ScrollView, ActivityIndicator, FlatList, StyleSheet } from "react-native";
// // // // // // // // import AsyncStorage from "@react-native-async-storage/async-storage";
// // // // // // // // import axios from "axios";

// // // // // // // // export default function Dashboard({ navigation }: any) {
// // // // // // // //   const [books, setBooks] = useState<any[]>([]);
// // // // // // // //   const [borrowed, setBorrowed] = useState<any[]>([]);
// // // // // // // //   const [overdues, setOverdues] = useState<any[]>([]);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchData = async () => {
// // // // // // // //       const token = await AsyncStorage.getItem("token");
// // // // // // // //       if (!token) {
// // // // // // // //         navigation.replace("Login"); // Redirect to login if no token
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       try {
// // // // // // // //         const [booksRes, borrowedRes, overdueRes] = await Promise.all([
// // // // // // // //           axios.get("http://localhost:5000/api/books", {
// // // // // // // //             headers: { Authorization: `Bearer ${token}` },
// // // // // // // //           }),
// // // // // // // //           axios.get("http://localhost:5000/api/borrow/all", {
// // // // // // // //             headers: { Authorization: `Bearer ${token}` },
// // // // // // // //           }),
// // // // // // // //           axios.get("http://localhost:5000/api/borrow/overdue", {
// // // // // // // //             headers: { Authorization: `Bearer ${token}` },
// // // // // // // //           }),
// // // // // // // //         ]);

// // // // // // // //         setBooks(booksRes.data);
// // // // // // // //         setBorrowed(borrowedRes.data);
// // // // // // // //         setOverdues(overdueRes.data);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Error fetching dashboard data:", err);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchData();
// // // // // // // //   }, []);

// // // // // // // //   if (loading)
// // // // // // // //     return (
// // // // // // // //       <View style={styles.center}>
// // // // // // // //         <ActivityIndicator size="large" color="#2563EB" />
// // // // // // // //       </View>
// // // // // // // //     );

// // // // // // // //   return (
// // // // // // // //     <ScrollView style={styles.container}>
// // // // // // // //       <Text style={styles.title}>📊 Library Dashboard</Text>

// // // // // // // //       {/* Stats Cards */}
// // // // // // // //       <View style={styles.cards}>
// // // // // // // //         <View style={styles.card}>
// // // // // // // //           <Text>Total Books</Text>
// // // // // // // //           <Text style={styles.cardValue}>{books.length}</Text>
// // // // // // // //         </View>
// // // // // // // //         <View style={styles.card}>
// // // // // // // //           <Text>Active Loans</Text>
// // // // // // // //           <Text style={styles.cardValue}>{borrowed.filter(b => !b.returned).length}</Text>
// // // // // // // //         </View>
// // // // // // // //         <View style={styles.card}>
// // // // // // // //           <Text>Overdue Books</Text>
// // // // // // // //           <Text style={styles.cardValue}>{overdues.length}</Text>
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       {/* Borrowed Books List */}
// // // // // // // //       <Text style={styles.subtitle}>Borrowed Books</Text>
// // // // // // // //       <FlatList
// // // // // // // //         data={borrowed}
// // // // // // // //         keyExtractor={(item) => item._id}
// // // // // // // //         renderItem={({ item }) => (
// // // // // // // //           <View style={styles.row}>
// // // // // // // //             <Text>{item.userId?.name}</Text>
// // // // // // // //             <Text>{item.bookId?.title}</Text>
// // // // // // // //             <Text>{new Date(item.dueDate).toLocaleDateString()}</Text>
// // // // // // // //           </View>
// // // // // // // //         )}
// // // // // // // //       />

// // // // // // // //       {/* Overdue List */}
// // // // // // // //       <Text style={styles.subtitle}>Overdue Books</Text>
// // // // // // // //       {overdues.length === 0 ? (
// // // // // // // //         <Text>✅ No overdue books</Text>
// // // // // // // //       ) : (
// // // // // // // //         <FlatList
// // // // // // // //           data={overdues}
// // // // // // // //           keyExtractor={(item) => item._id}
// // // // // // // //           renderItem={({ item }) => (
// // // // // // // //             <View style={styles.row}>
// // // // // // // //               <Text>{item.userId?.name}</Text>
// // // // // // // //               <Text>{item.bookId?.title}</Text>
// // // // // // // //               <Text>{new Date(item.dueDate).toLocaleDateString()}</Text>
// // // // // // // //             </View>
// // // // // // // //           )}
// // // // // // // //         />
// // // // // // // //       )}
// // // // // // // //     </ScrollView>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: { flex: 1, padding: 16, backgroundColor: "#f8f9fb" },
// // // // // // // //   center: { flex: 1, justifyContent: "center", alignItems: "center" },
// // // // // // // //   title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
// // // // // // // //   subtitle: { fontSize: 20, fontWeight: "bold", marginTop: 16, marginBottom: 8 },
// // // // // // // //   cards: { flexDirection: "row", justifyContent: "space-between" },
// // // // // // // //   card: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: "#e8ebf3",
// // // // // // // //     padding: 16,
// // // // // // // //     margin: 4,
// // // // // // // //     borderRadius: 8,
// // // // // // // //     alignItems: "center",
// // // // // // // //   },
// // // // // // // //   cardValue: { fontSize: 18, fontWeight: "bold", marginTop: 4 },
// // // // // // // //   row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, borderBottomWidth: 1, borderColor: "#ddd" },
// // // // // // // // });


// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { View, Text, ScrollView, StyleSheet } from "react-native";
// // // // // // // import axios from "axios";
// // // // // // // import AsyncStorage from "@react-native-async-storage/async-storage";

// // // // // // // type Book = {
// // // // // // //   _id: string;
// // // // // // //   title: string;
// // // // // // //   author: string;
// // // // // // //   isbn: string;
// // // // // // //   available: number;
// // // // // // //   quantity: number;
// // // // // // // };

// // // // // // // type BorrowRecord = {
// // // // // // //   _id: string;
// // // // // // //   userId?: { name: string; email: string };
// // // // // // //   bookId?: { title: string };
// // // // // // //   borrowDate?: string;
// // // // // // //   dueDate?: string;
// // // // // // // };

// // // // // // // export default function Dashboard() {
// // // // // // //   const [books, setBooks] = useState<Book[]>([]);
// // // // // // //   const [members, setMembers] = useState<BorrowRecord[]>([]);
// // // // // // //   const [overdues, setOverdues] = useState<BorrowRecord[]>([]);
// // // // // // //   const [loading, setLoading] = useState<boolean>(true);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchData = async () => {
// // // // // // //       const token = await AsyncStorage.getItem("token");
// // // // // // //       if (!token) return console.error("No token found.");

// // // // // // //       try {
// // // // // // //         const [booksRes, membersRes, overdueRes] = await Promise.all([
// // // // // // //           axios.get("http://localhost:5000/api/books", { headers: { Authorization: `Bearer ${token}` } }),
// // // // // // //           axios.get("http://localhost:5000/api/borrow/all", { headers: { Authorization: `Bearer ${token}` } }),
// // // // // // //           axios.get("http://localhost:5000/api/borrow/overdue", { headers: { Authorization: `Bearer ${token}` } }),
// // // // // // //         ]);

// // // // // // //         setBooks(booksRes.data);
// // // // // // //         setMembers(membersRes.data);
// // // // // // //         setOverdues(overdueRes.data);
// // // // // // //         setLoading(false);
// // // // // // //       } catch (err) {
// // // // // // //         console.error(err);
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchData();
// // // // // // //     const interval = setInterval(fetchData, 30000);
// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   if (loading) return <Text style={styles.loading}>Loading dashboard...</Text>;

// // // // // // //   const renderRow = (fields: string[]) => (
// // // // // // //     <View style={styles.row}>
// // // // // // //       {fields.map((f, i) => (
// // // // // // //         <Text key={i} style={styles.cell}>{f}</Text>
// // // // // // //       ))}
// // // // // // //     </View>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <ScrollView style={styles.container}>
// // // // // // //       <Text style={styles.heading}>📊 Library Dashboard</Text>

// // // // // // //       <Text style={styles.subheading}>Books</Text>
// // // // // // //       <View style={styles.table}>
// // // // // // //         {renderRow(["Title", "Author", "ISBN", "Available", "Total"])}
// // // // // // //         {books.map((b) => renderRow([b.title, b.author, b.isbn, b.available.toString(), b.quantity.toString()]))}
// // // // // // //       </View>

// // // // // // //       <Text style={styles.subheading}>Borrowed Books</Text>
// // // // // // //       <View style={styles.table}>
// // // // // // //         {renderRow(["Member", "Email", "Book", "Borrow Date", "Due Date"])}
// // // // // // //         {members.map((m) =>
// // // // // // //           renderRow([
// // // // // // //             m.userId?.name || "",
// // // // // // //             m.userId?.email || "",
// // // // // // //             m.bookId?.title || "",
// // // // // // //             m.borrowDate ? new Date(m.borrowDate).toLocaleDateString() : "",
// // // // // // //             m.dueDate ? new Date(m.dueDate).toLocaleDateString() : "",
// // // // // // //           ])
// // // // // // //         )}
// // // // // // //       </View>

// // // // // // //       <Text style={styles.subheading}>Overdue Books</Text>
// // // // // // //       {overdues.length === 0 ? (
// // // // // // //         <Text style={styles.noData}>✅ No overdue books</Text>
// // // // // // //       ) : (
// // // // // // //         <View style={styles.table}>
// // // // // // //           {renderRow(["Member", "Book", "Due Date"])}
// // // // // // //           {overdues.map((o) =>
// // // // // // //             renderRow([
// // // // // // //               o.userId?.name || "",
// // // // // // //               o.bookId?.title || "",
// // // // // // //               o.dueDate ? new Date(o.dueDate).toLocaleDateString() : "",
// // // // // // //             ])
// // // // // // //           )}
// // // // // // //         </View>
// // // // // // //       )}
// // // // // // //     </ScrollView>
// // // // // // //   );
// // // // // // // }

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: { padding: 16, backgroundColor: "#fff" },
// // // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
// // // // // // //   subheading: { fontSize: 18, fontWeight: "600", marginTop: 12, marginBottom: 6 },
// // // // // // //   loading: { textAlign: "center", marginTop: 20 },
// // // // // // //   table: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5 },
// // // // // // //   row: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#ccc" },
// // // // // // //   cell: { flex: 1, padding: 8, textAlign: "center" },
// // // // // // //   noData: { color: "green", fontWeight: "bold", marginVertical: 8 },
// // // // // // // });


// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { View, Text, ScrollView, StyleSheet } from "react-native";
// // // // // // import axios from "axios";
// // // // // // import AsyncStorage from "@react-native-async-storage/async-storage";

// // // // // // type Book = {
// // // // // //   _id: string;
// // // // // //   title: string;
// // // // // //   author: string;
// // // // // //   isbn: string;
// // // // // //   available: number;
// // // // // //   quantity: number;
// // // // // // };

// // // // // // type BorrowRecord = {
// // // // // //   _id: string;
// // // // // //   userId?: { name: string; email: string };
// // // // // //   bookId?: { title: string };
// // // // // //   borrowDate?: string;
// // // // // //   dueDate?: string;
// // // // // // };

// // // // // // export default function Dashboard() {
// // // // // //   const [books, setBooks] = useState<Book[]>([]);
// // // // // //   const [members, setMembers] = useState<BorrowRecord[]>([]);
// // // // // //   const [overdues, setOverdues] = useState<BorrowRecord[]>([]);
// // // // // //   const [loading, setLoading] = useState<boolean>(true);

// // // // // //   useEffect(() => {
// // // // // //     const fetchData = async () => {
// // // // // //       const token = await AsyncStorage.getItem("token");
// // // // // //       if (!token) return console.error("No token found.");

// // // // // //       try {
// // // // // //         const [booksRes, membersRes, overdueRes] = await Promise.all([
// // // // // //           axios.get("http://localhost:5000/api/books", { headers: { Authorization: `Bearer ${token}` } }),
// // // // // //           axios.get("http://localhost:5000/api/borrow/all", { headers: { Authorization: `Bearer ${token}` } }),
// // // // // //           axios.get("http://localhost:5000/api/borrow/overdue", { headers: { Authorization: `Bearer ${token}` } }),
// // // // // //         ]);

// // // // // //         setBooks(booksRes.data);
// // // // // //         setMembers(membersRes.data);
// // // // // //         setOverdues(overdueRes.data);
// // // // // //         setLoading(false);
// // // // // //       } catch (err) {
// // // // // //         console.error(err);
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchData();
// // // // // //     const interval = setInterval(fetchData, 30000);
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   if (loading) return <Text style={styles.loading}>Loading dashboard...</Text>;

// // // // // //   const renderRow = (fields: string[]) => (
// // // // // //     <View style={styles.row}>
// // // // // //       {fields.map((f, i) => (
// // // // // //         <Text key={i} style={styles.cell}>{f}</Text>
// // // // // //       ))}
// // // // // //     </View>
// // // // // //   );

// // // // // //   const renderTable = (headers: string[], dataRows: string[][]) => (
// // // // // //     <ScrollView horizontal style={styles.horizontalScroll}>
// // // // // //       <View style={styles.table}>
// // // // // //         {renderRow(headers)}
// // // // // //         {dataRows.map((row, idx) => renderRow(row))}
// // // // // //       </View>
// // // // // //     </ScrollView>
// // // // // //   );

// // // // // //   return (
// // // // // //     <ScrollView style={styles.container}>
// // // // // //       <Text style={styles.heading}>📊 Library Dashboard</Text>

// // // // // //       <Text style={styles.subheading}>Books</Text>
// // // // // //       {renderTable(
// // // // // //         ["Title", "Author", "ISBN", "Available", "Total"],
// // // // // //         books.map((b) => [b.title, b.author, b.isbn, b.available.toString(), b.quantity.toString()])
// // // // // //       )}

// // // // // //       <Text style={styles.subheading}>Borrowed Books</Text>
// // // // // //       {renderTable(
// // // // // //         ["Member", "Email", "Book", "Borrow Date", "Due Date"],
// // // // // //         members.map((m) => [
// // // // // //           m.userId?.name || "",
// // // // // //           m.userId?.email || "",
// // // // // //           m.bookId?.title || "",
// // // // // //           m.borrowDate ? new Date(m.borrowDate).toLocaleDateString() : "",
// // // // // //           m.dueDate ? new Date(m.dueDate).toLocaleDateString() : "",
// // // // // //         ])
// // // // // //       )}

// // // // // //       <Text style={styles.subheading}>Overdue Books</Text>
// // // // // //       {overdues.length === 0 ? (
// // // // // //         <Text style={styles.noData}>✅ No overdue books</Text>
// // // // // //       ) : (
// // // // // //         renderTable(
// // // // // //           ["Member", "Book", "Due Date"],
// // // // // //           overdues.map((o) => [
// // // // // //             o.userId?.name || "",
// // // // // //             o.bookId?.title || "",
// // // // // //             o.dueDate ? new Date(o.dueDate).toLocaleDateString() : "",
// // // // // //           ])
// // // // // //         )
// // // // // //       )}
// // // // // //     </ScrollView>
// // // // // //   );
// // // // // // }

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: { padding: 16, backgroundColor: "#fff" },
// // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
// // // // // //   subheading: { fontSize: 18, fontWeight: "600", marginTop: 12, marginBottom: 6 },
// // // // // //   loading: { textAlign: "center", marginTop: 20 },
// // // // // //   horizontalScroll: { marginBottom: 16 },
// // // // // //   table: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5 },
// // // // // //   row: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#ccc" },
// // // // // //   cell: { minWidth: 120, padding: 8, textAlign: "center" }, // minWidth ensures horizontal scrolling
// // // // // //   noData: { color: "green", fontWeight: "bold", marginVertical: 8 },
// // // // // // });


// // // // // import React, { useEffect, useState } from "react";
// // // // // import { View, Text, ScrollView, StyleSheet } from "react-native";
// // // // // import axios from "axios";
// // // // // import AsyncStorage from "@react-native-async-storage/async-storage";

// // // // // type Book = {
// // // // //   _id: string;
// // // // //   title: string;
// // // // //   author: string;
// // // // //   isbn: string;
// // // // //   available: number;
// // // // //   quantity: number;
// // // // // };

// // // // // type BorrowRecord = {
// // // // //   _id: string;
// // // // //   userId?: { name: string; email: string };
// // // // //   bookId?: { title: string };
// // // // //   borrowDate?: string;
// // // // //   dueDate?: string;
// // // // // };

// // // // // export default function Dashboard() {
// // // // //   const [books, setBooks] = useState<Book[]>([]);
// // // // //   const [members, setMembers] = useState<BorrowRecord[]>([]);
// // // // //   const [overdues, setOverdues] = useState<BorrowRecord[]>([]);
// // // // //   const [loading, setLoading] = useState<boolean>(true);

// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //       const token = await AsyncStorage.getItem("token");
// // // // //       if (!token) return console.error("No token found.");

// // // // //       try {
// // // // //         const [booksRes, membersRes, overdueRes] = await Promise.all([
// // // // //           axios.get("http://192.168.1.5:5000/api/books", { headers: { Authorization: `Bearer ${token}` } }),
// // // // //           axios.get("http://192.168.1.5:5000/api/borrow/all", { headers: { Authorization: `Bearer ${token}` } }),
// // // // //           axios.get("http://192.168.1.5:5000/api/borrow/overdue", { headers: { Authorization: `Bearer ${token}` } }),
// // // // //         ]);

// // // // //         setBooks(booksRes.data);
// // // // //         setMembers(membersRes.data);
// // // // //         setOverdues(overdueRes.data);
// // // // //       } catch (err) {
// // // // //         console.error(err);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchData();
// // // // //     const interval = setInterval(fetchData, 30000);
// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   if (loading) return <Text style={styles.loading}>Loading dashboard...</Text>;

// // // // //   const renderRow = (fields: string[]) => (
// // // // //     <View style={styles.row}>
// // // // //       {fields.map((f, i) => (
// // // // //         <Text key={i} style={styles.cell}>{f}</Text>
// // // // //       ))}
// // // // //     </View>
// // // // //   );

// // // // //   const renderTable = (headers: string[], dataRows: string[][]) => (
// // // // //     <ScrollView horizontal style={styles.horizontalScroll}>
// // // // //       <View style={styles.table}>
// // // // //         {renderRow(headers)}
// // // // //         {dataRows.map((row, idx) => renderRow(row))}
// // // // //       </View>
// // // // //     </ScrollView>
// // // // //   );

// // // // //   return (
// // // // //     <ScrollView style={styles.container}>
// // // // //       <Text style={styles.heading}>📊 Library Dashboard</Text>

// // // // //       <Text style={styles.subheading}>Books</Text>
// // // // //       {renderTable(
// // // // //         ["Title", "Author", "ISBN", "Available", "Total"],
// // // // //         books.map((b) => [b.title, b.author, b.isbn, b.available.toString(), b.quantity.toString()])
// // // // //       )}

// // // // //       <Text style={styles.subheading}>Borrowed Books</Text>
// // // // //       {renderTable(
// // // // //         ["Member", "Email", "Book", "Borrow Date", "Due Date"],
// // // // //         members.map((m) => [
// // // // //           m.userId?.name || "",
// // // // //           m.userId?.email || "",
// // // // //           m.bookId?.title || "",
// // // // //           m.borrowDate ? new Date(m.borrowDate).toLocaleDateString() : "",
// // // // //           m.dueDate ? new Date(m.dueDate).toLocaleDateString() : "",
// // // // //         ])
// // // // //       )}

// // // // //       <Text style={styles.subheading}>Overdue Books</Text>
// // // // //       {overdues.length === 0 ? (
// // // // //         <Text style={styles.noData}>✅ No overdue books</Text>
// // // // //       ) : (
// // // // //         renderTable(
// // // // //           ["Member", "Book", "Due Date"],
// // // // //           overdues.map((o) => [
// // // // //             o.userId?.name || "",
// // // // //             o.bookId?.title || "",
// // // // //             o.dueDate ? new Date(o.dueDate).toLocaleDateString() : "",
// // // // //           ])
// // // // //         )
// // // // //       )}
// // // // //     </ScrollView>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: { padding: 16, backgroundColor: "#fff" },
// // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
// // // // //   subheading: { fontSize: 18, fontWeight: "600", marginTop: 12, marginBottom: 6 },
// // // // //   loading: { textAlign: "center", marginTop: 20 },
// // // // //   horizontalScroll: { marginBottom: 16 },
// // // // //   table: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5 },
// // // // //   row: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#ccc" },
// // // // //   cell: { minWidth: 120, padding: 8, textAlign: "center" },
// // // // //   noData: { color: "green", fontWeight: "bold", marginVertical: 8 },
// // // // // });

// // // // import { ScrollView, Text, View } from "react-native";

// // // // export default function Dashboard() {
// // // //   const statsCards = [
// // // //     { title: "Total Books", value: "120" },
// // // //     { title: "Borrowed", value: "45" },
// // // //     { title: "Returned", value: "30" },
// // // //     { title: "Pending Requests", value: "5" },
// // // //   ];

// // // //   return (
// // // //     <ScrollView className="flex-1 bg-gray-100 p-4">
// // // //       <Text className="text-2xl font-bold mb-4">📚 MyELib Dashboard</Text>

// // // //       {/* Stats */}
// // // //       <View className="flex-row flex-wrap justify-between mb-6">
// // // //         {statsCards.map((card, index) => (
// // // //           <View
// // // //             key={index}
// // // //             className="w-[48%] bg-white rounded-2xl p-4 mb-4 shadow"
// // // //           >
// // // //             <Text className="text-xl font-bold text-center">{card.value}</Text>
// // // //             <Text className="text-gray-500 text-sm mt-1 text-center">
// // // //               {card.title}
// // // //             </Text>
// // // //           </View>
// // // //         ))}
// // // //       </View>
// // // //     </ScrollView>
// // // //   );
// // // // }


// // // import { View, Text, TouchableOpacity } from "react-native";
// // // import { useRouter } from "expo-router";
// // // import "../global.css";

// // // export default function Dashboard() {
// // //   const router = useRouter();

// // //   return (
// // //     <View className="flex-1 justify-center items-center bg-gray-100 px-6">
// // //       <Text className="text-4xl font-bold mb-10">Dashboard</Text>
// // //       <Text className="text-lg mb-8">This is a dummy dashboard page</Text>

// // //       <TouchableOpacity
// // //         onPress={() => router.replace("/")}
// // //         className="bg-red-500 px-6 py-3 rounded-xl"
// // //       >
// // //         <Text className="text-white font-semibold">Logout</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // }

// // import { View, Text, TouchableOpacity } from "react-native";
// // import { useRouter } from "expo-router";
// // import "../global.css";

// // export default function Dashboard() {
// //   const router = useRouter();

// //   return (
// //     <View className="flex-1 bg-gray-100 p-6">
// //       {/* Header */}
// //       <View className="flex-row justify-between items-center mb-8">
// //         <Text className="text-3xl font-bold text-gray-800">Dashboard</Text>
// //         <TouchableOpacity
// //           onPress={() => router.replace("/")}
// //           className="bg-red-500 px-4 py-2 rounded-lg"
// //         >
// //           <Text className="text-white font-semibold">Logout</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Dummy Cards */}
// //       <View className="space-y-4">
// //         <View className="bg-white p-6 rounded-xl shadow-md">
// //           <Text className="text-lg font-semibold text-gray-700">Users</Text>
// //           <Text className="text-2xl font-bold mt-2 text-blue-500">120</Text>
// //         </View>

// //         <View className="bg-white p-6 rounded-xl shadow-md">
// //           <Text className="text-lg font-semibold text-gray-700">Sales</Text>
// //           <Text className="text-2xl font-bold mt-2 text-green-500">$3,450</Text>
// //         </View>

// //         <View className="bg-white p-6 rounded-xl shadow-md">
// //           <Text className="text-lg font-semibold text-gray-700">Messages</Text>
// //           <Text className="text-2xl font-bold mt-2 text-purple-500">15</Text>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // }


// // import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
// // import { useRouter } from "expo-router";

// // export default function Dashboard() {
// //   const router = useRouter();

// //   const stats = [
// //     { title: "Total Books", value: "1,250", change: "+10%", color: "#07883D" },
// //     { title: "Active Loans", value: "320", change: "+5%", color: "#07883D" },
// //     { title: "Overdue Books", value: "15", change: "-2%", color: "#E73C08" },
// //     { title: "Total Members", value: "580", change: "+8%", color: "#07883D" },
// //   ];

// //   const activities = [
// //     { id: "#12345", member: "Sophia Clark", book: "The Enigma Code", date: "2024-07-20", status: "Issued" },
// //     { id: "#12346", member: "Ethan Harris", book: "The Silent Observer", date: "2024-07-18", status: "Returned" },
// //     { id: "#12347", member: "Olivia Reed", book: "Echoes of the Past", date: "2024-07-15", status: "Issued" },
// //   ];

// //   return (
// //     <View className="flex-1 bg-gray-100">
// //       {/* Header */}
// //       <View className="flex-row justify-between items-center bg-white px-6 py-4 shadow">
// //         <Text className="text-2xl font-bold text-gray-800">BookWise</Text>
// //         <TouchableOpacity
// //           onPress={() => router.replace("/")}
// //           className="bg-blue-600 px-4 py-2 rounded-md"
// //         >
// //           <Text className="text-white font-semibold">Logout</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <ScrollView className="p-4">
// //         {/* Stats Cards */}
// //         <View className="flex-row flex-wrap justify-between mb-6">
// //           {stats.map((item, idx) => (
// //             <View
// //               key={idx}
// //               className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow"
// //             >
// //               <Text className="text-gray-800 font-medium">{item.title}</Text>
// //               <Text className="text-2xl font-bold mt-1">{item.value}</Text>
// //               <Text style={{ color: item.color }} className="mt-1 font-medium">
// //                 {item.change}
// //               </Text>
// //             </View>
// //           ))}
// //         </View>

// //         {/* Recent Activity */}
// //         <Text className="text-xl font-bold text-gray-800 mb-3">Recent Activity</Text>
// //         <View className="bg-white rounded-lg shadow overflow-hidden">
// //           {activities.map((act) => (
// //             <View
// //               key={act.id}
// //               className="flex-row justify-between items-center px-4 py-3 border-b border-gray-200"
// //             >
// //               <View>
// //                 <Text className="text-gray-700 font-medium">{act.member}</Text>
// //                 <Text className="text-gray-500 text-sm">{act.book}</Text>
// //               </View>
// //               <View className="items-end">
// //                 <Text className="text-gray-500 text-sm">{act.date}</Text>
// //                 <View
// //                   className={`mt-1 px-3 py-1 rounded-full ${
// //                     act.status === "Issued"
// //                       ? "bg-yellow-100"
// //                       : act.status === "Returned"
// //                       ? "bg-green-100"
// //                       : "bg-red-100"
// //                   }`}
// //                 >
// //                   <Text
// //                     className={`text-sm font-medium ${
// //                       act.status === "Issued"
// //                         ? "text-yellow-800"
// //                         : act.status === "Returned"
// //                         ? "text-green-800"
// //                         : "text-red-800"
// //                     }`}
// //                   >
// //                     {act.status}
// //                   </Text>
// //                 </View>
// //               </View>
// //             </View>
// //           ))}
// //         </View>

// //         {/* Quick Actions */}
// //         <Text className="text-xl font-bold text-gray-800 mt-6 mb-3">Quick Actions</Text>
// //         <View className="flex-row flex-wrap justify-between">
// //           <TouchableOpacity className="bg-gray-200 rounded-lg p-4 w-[48%] mb-4 items-center">
// //             <Text className="text-gray-800 font-medium">Add Book</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity className="bg-gray-200 rounded-lg p-4 w-[48%] mb-4 items-center">
// //             <Text className="text-gray-800 font-medium">Issue Book</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity className="bg-gray-200 rounded-lg p-4 w-[48%] mb-4 items-center">
// //             <Text className="text-gray-800 font-medium">View Reports</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity className="bg-gray-200 rounded-lg p-4 w-[48%] mb-4 items-center">
// //             <Text className="text-gray-800 font-medium">Help</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // }


// import { View, Text, ScrollView, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";

// export default function Dashboard() {
//   const router = useRouter();

//   const stats = [
//     { title: "Total Books", value: "1,250", change: "+10%", color: "#07883D" },
//     { title: "Active Loans", value: "320", change: "+5%", color: "#07883D" },
//     { title: "Overdue Books", value: "15", change: "-2%", color: "#E73C08" },
//     { title: "Total Members", value: "580", change: "+8%", color: "#07883D" },
//   ];

//   const activities = [
//     { id: "#12345", member: "Manjila Shrestha", book: "The Enigma Code", date: "2024-07-20", status: "Issued" },
//     { id: "#12346", member: "Gopal Shrestha", book: "The Silent Observer", date: "2024-07-18", status: "Returned" },
//     { id: "#12347", member: "Yunish Rai", book: "Echoes of the Past", date: "2024-07-15", status: "Issued" },
//     { id: "#12348", member: "Sarita Shrestha", book: "Hidden Truths", date: "2024-07-10", status: "Returned" },
//     { id: "#12349", member: "Rita Rai", book: "Mystery of Shadows", date: "2024-07-05", status: "Issued" },
//   ];

//   return (
//     <View className="flex-1 bg-gray-50">
//       {/* Header */}
//       <View className="flex-row justify-between items-center bg-white px-4 py-3 border-b">
//         <Text className="text-xl font-bold text-gray-800">BookWise</Text>
//         <TouchableOpacity
//           onPress={() => router.replace("/")}
//           className="bg-blue-600 px-3 py-1 rounded"
//         >
//           <Text className="text-white font-semibold">Logout</Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView className="p-4">
//         {/* Stats Cards */}
//         <View className="flex-row flex-wrap justify-between mb-4">
//           {stats.map((item, idx) => (
//             <View key={idx} className="bg-white p-3 rounded w-[48%] mb-3">
//               <Text className="text-gray-700 font-medium">{item.title}</Text>
//               <Text className="text-xl font-bold">{item.value}</Text>
//               <Text style={{ color: item.color }} className="font-medium">{item.change}</Text>
//             </View>
//           ))}
//         </View>

//         {/* Recent Activity */}
//         <Text className="text-lg font-bold text-gray-800 mb-2">Recent Activity</Text>
//         <View className="bg-white rounded overflow-hidden">
//           {activities.map((act) => (
//             <View
//               key={act.id}
//               className="flex-row justify-between items-center px-3 py-2 border-b border-gray-200"
//             >
//               <View>
//                 <Text className="text-gray-700">{act.member}</Text>
//                 <Text className="text-gray-500 text-sm">{act.book}</Text>
//               </View>
//               <View className="items-end">
//                 <Text className="text-gray-500 text-sm">{act.date}</Text>
//                 <View
//                   className={`mt-1 px-2 py-0.5 rounded-full ${
//                     act.status === "Issued"
//                       ? "bg-yellow-100"
//                       : act.status === "Returned"
//                       ? "bg-green-100"
//                       : "bg-red-100"
//                   }`}
//                 >
//                   <Text
//                     className={`text-xs font-medium ${
//                       act.status === "Issued"
//                         ? "text-yellow-800"
//                         : act.status === "Returned"
//                         ? "text-green-800"
//                         : "text-red-800"
//                     }`}
//                   >
//                     {act.status}
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           ))}
//         </View>

//         {/* Quick Actions */}
//         <Text className="text-lg font-bold text-gray-800 mt-4 mb-2">Quick Actions</Text>
//         <View className="flex-row flex-wrap justify-between">
//           {["Add Book", "Issue Book", "View Reports", "Help"].map((action) => (
//             <TouchableOpacity
//               key={action}
//               className="bg-gray-200 rounded p-3 w-[48%] mb-3 items-center"
//             >
//               <Text className="text-gray-800">{action}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }


import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "../global.css";

export default function Dashboard() {
  const [books, setBooks] = useState<any[]>([]);
  const [borrows, setBorrows] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        const booksRes = await axios.get("http://localhost:5000/api/books", {
          headers,
        });
        setBooks(booksRes.data);

        const borrowRes = await axios.get("http://localhost:5000/api/borrow/all", {
          headers,
        });
        setBorrows(borrowRes.data);
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">📚 Available Books</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-xl mb-3 shadow">
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-600">{item.author}</Text>
            <Text className="text-sm text-gray-500">
              ISBN: {item.isbn} | Available: {item.available}/{item.quantity}
            </Text>
          </View>
        )}
      />

      <Text className="text-2xl font-bold mt-6 mb-4">📖 Borrow Records</Text>

      <FlatList
        data={borrows}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-xl mb-3 shadow">
            <Text className="font-semibold">Borrower: {item.userId?.name}</Text>
            <Text>Book: {item.bookId?.title}</Text>
            <Text className="text-sm text-gray-500">
              Borrowed: {new Date(item.borrowDate).toLocaleDateString()}
            </Text>
            <Text className="text-sm text-gray-500">
              Due: {new Date(item.dueDate).toLocaleDateString()}
            </Text>
            <Text
              className={`text-sm font-semibold ${
                item.returnDate ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.returnDate
                ? "✅ Returned"
                : "⏳ Not Returned"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
