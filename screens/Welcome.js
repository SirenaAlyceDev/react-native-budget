import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Text, Avatar, Card } from "react-native-elements";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Goal 1",
    goal: 915
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Goal 2",
    goal: 915
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Goal 3",
    goal: 915
  },
];

const Item = ({ title, goal }) => (
  <View>
    <Text>{title}</Text>
    <Text>{goal}</Text>
  </View>
);

const Welcome = () => {
  const renderItem = ({ item }) => <Item title={item.title} goal={item.goal} />;

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Avatar
          size="large"
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text h3>Hello, User!</Text>
      </View>
      <View style={{ margin: 20}}>
        <Text>
          Cards in a row will go here to represent the top # spending categories
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Card containerStyle={{ width: 300, height: 200, borderRadius: 25}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ backgroundColor: "blue"}}>
              <Text>Money In</Text>
            </View>
            <View style={{ backgroundColor: "orange" }}>
              <Text>Money Out</Text>
            </View>
          </View>
        </Card>
      </View>
      <View style={{ margin: 20}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text h4>Goals</Text>
          </View>
          <View>
            <Text>See All</Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
