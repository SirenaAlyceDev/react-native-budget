import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Text, Icon, Button } from "react-native-elements";

const FTT = () => {
  const [income, setIncome] = useState("");
  const [amount, setAmount] = useState("");

  const calculateNeeds = () => {
    needs = {income} * .50;
    console.log(need);
  }

  const calculateWants = () => {
    console.log('needs');
  }

  const calculateSavings = () => {
    console.log('needs');
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Monthly Income</Text>
      <TextInput
        style={{ height: 40, textAlign: "center" }}
        placeholder="Income Name"
        onChangeText={(income) => setIncome(income)}
        defaultValue={income}
      />
      <Text style={{fontSize: 20}}>Monthly Income Amount</Text>
      <TextInput
        style={{ height: 40, textAlign:'center' }}
        placeholder="Income Amount"
        onChangeText={(amount) => setAmount(amount)}
        defaultValue={amount}
      />
      <Text>
        Necessites - 50%
      </Text>
      <Text>
        Wants - 30%
      </Text>      
      <Text>
        Savings - 20%
      </Text>
    </View>
  );
};

export default FTT;
