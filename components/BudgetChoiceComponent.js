import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";

const BudgetChoice = () => {
  return (
    <>
      <View style={{ padding: 20 }}>
        <Text style={{ textAlign: 'center'}} h1>What Type of Budget Do You Want To Start?</Text>
      </View>
      <View style={{ margin: 20 }}>
        <Button
          title="List Style Budget"
          onPress={() => {console.log('list style button pressed')}}
          raised
          containerStyle={{
            margin: 10,
          }}
        />
        <Button
          title="50-30-20 Style Budget"
          onPress={() => {console.log('50-30-20 style button pressed')}}
          raised
          containerStyle={{
            margin: 10,
          }}
        />
      </View>
    </>
  );
};

export default BudgetChoice;
