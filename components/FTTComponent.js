import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Text, Icon, Button } from "react-native-elements";

const FTT = (props) => {
  const [income, setIncome] = useState("");
  const [needs, setNeeds] = useState();
  const [wants, setWants] = useState();
  const [savings, setSavings] = useState();
  const [amount, setAmount] = useState(0);

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
      <Button
      raised
      title="Calculate My Budget"
      containerStyle={{ margin: 10}}
      onPress={()=> {
        setNeeds(Math.round(amount * .50));
        setWants(Math.round(amount * .30));
        setSavings(Math.round(amount * .20));
      }}
      />
      <Text>
        Needs
      </Text>
      <Text>
       {needs}
      </Text>
      <Text>
        Wants
      </Text>
      <Text>
        {wants}
        </Text>   
      <Text>
        Savings
      </Text>
      <Text>
        {savings}
      </Text>
      <View style={{flexDirection: 'row'}}>
      <Button
      raised
      title="Share"
      containerStyle={{ margin: 10}}
      />
      <Button
      raised
      title="Clear"
      containerStyle={{ margin: 10}}
      onPress={() => {
        setIncome();
        setAmount();
        setNeeds();
        setWants();
        setSavings();
      } }
      />
      </View>
    </View>
  );
};

export default FTT;
