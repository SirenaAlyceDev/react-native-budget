import React from "react";
import { View } from "react-native";
import Home from "./HomeComponent";
import BudgetChoice from "./BudgetChoiceComponent";
import ListBudget from "./ListBudgetComponent";
import FTT from "./FTTComponent";
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
          name="Budget"
          component={BudgetChoice}
          options={{
            headerTitleStyle: {
              textAlign: "left",
            },
          }}
        />
        <Stack.Screen
          name="List Budget"
          component={ListBudget}
          options={{
            headerTitleStyle: {
              textAlign: "left",
            },
          }}
        />
        <Stack.Screen
          name="50-30-20 Budget"
          component={FTT}
          options={{
            headerTitleStyle: {
              textAlign: "center",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
