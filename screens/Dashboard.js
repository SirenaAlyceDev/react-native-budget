import React from "react";
import { View } from "react-native";
import { Tab } from "react-native-elements";

const Dashboard = () => {
  return (
    <View>
      <Tab>
        <Tab.Item title="Recent" />
        <Tab.Item title="favourite" />
        <Tab.Item title="cart" />
      </Tab>
    </View>
  );
};

export default Dashboard;
