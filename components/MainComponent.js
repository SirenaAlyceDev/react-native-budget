import React from "react";
import { View } from "react-native";
import Home from "./HomeComponent";
import SignUp from "./SignUpComponent";
import Login from './LoginComponent';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="The B-Word"
          component={Home}
          options={{
            headerTitleStyle: {
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{
            headerTitleStyle: {
              textAlign: "left",
            },
          }}
        />
        <Stack.Screen
          name="Log In"
          component={Login}
          options={{
            headerTitleStyle: {
              textAlign: "left",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
