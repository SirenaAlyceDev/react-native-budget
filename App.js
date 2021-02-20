import 'react-native-gesture-handler';
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Main from "./components/MainComponent";

export default function App() {
  return (
    <NavigationContainer>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Main />
    </View>
    </NavigationContainer>
  );
}

