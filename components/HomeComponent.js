import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Icon, Button } from "react-native-elements";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="comments-dollar" type="font-awesome-5" size={100} />
      </View>
      <View>
        {/* <Text h1>The B-Word</Text> */}
        <Text>Financial Peace We All Need</Text>
      </View>
      <View>
        <Text style={styles.secondarydescription}>
          Let's control your spending, track your expenses, and save more money.
        </Text>
      </View>

      <Button
        title="Start Budgeting"
        containerStyle={{ width: "50%" }}
        onPress={() => navigation.navigate('Budget')}
            // console.log("start budget button pressed")}
        raised
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  mainheader: {
    margin: 24,
    alignItems: "center",
  },
  secondarydescription: {
    margin: 24,
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;
