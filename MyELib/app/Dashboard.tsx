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
