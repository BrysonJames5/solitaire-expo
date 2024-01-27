import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Example } from "./src/screens/BarDetailScreen/BarDetailScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <Example />
    </NativeBaseProvider>
  );
}
