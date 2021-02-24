import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Text, Icon, Button } from "react-native-elements";

const ListBudget = () => {
  const [income, setIncome] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{fontSize: 20}}>Income</Text>
      <TextInput
        style={{ height: 40, textAlign:'center' }}
        placeholder="Income Name"
        onChangeText={(income) => setIncome(income)}
        defaultValue={income}
      />
      <Text style={{fontSize: 20}}>Amount</Text>
      <TextInput
        style={{ height: 40, textAlign:'center' }}
        placeholder="Income Amount"
        onChangeText={(amount) => setAmount(amount)}
        defaultValue={amount}
      />
      <Text>
        {income}: {amount}
      </Text>
    </View>
  );
};

export default ListBudget;
