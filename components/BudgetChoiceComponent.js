import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";

const BudgetChoice = ({ navigation }) => {
  return (
    <>
      <View style={{ padding: 20 }}>
        <Text style={{ textAlign: 'center'}} h1>What Type of Budget Do You Want To Start?</Text>
      </View>
      <View style={{ margin: 20 }}>
        <Button
          title="List Style Budget"
          raised
          containerStyle={{
            margin: 10,
          }}
          onPress={() => navigation.navigate('List Budget')}
        />
        <Button
          title="50-30-20 Style Budget"
          onPress={() => navigation.navigate('50-30-20 Budget')}
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
