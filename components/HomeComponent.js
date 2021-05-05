import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import blkwoman from '../assets/img/pexels-ketut-subiyanto-4353614-removebg-preview.png'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={blkwoman} style={{ width: 300, height: 400 }} />
      </View>
      <View style={styles.headline}>
        <Text h1>Financial Peace We All Need</Text>
        <Text>
          Let's control your spending, track your expenses, and save more money.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" />
        <Button title="Sign In" />
      </View>
      <View>
        <Text style={styles.terms}>terms text</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  headline: {
    flex: 5,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    margin: 10,
  },
  terms: {
    textAlign: "center",
  },
});

export default Home;
