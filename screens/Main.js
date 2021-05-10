import React from "react";
import Home from "../screens/Home";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./Dashboard";

const Stack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="The B-Word"
          component={Home}
          options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="Log In"
          component={Login}
          options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              textAlign: "left",
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            // headerTransparent: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              textAlign: "left",
              // color: "#ffffff",
            },
          }}
        />
         <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            // headerTransparent: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              textAlign: "left",
              // color: "#ffffff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
