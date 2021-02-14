import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Main from "./components/MainComponent";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Main />
    </View>
  );
}

