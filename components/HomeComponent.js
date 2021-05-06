import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import blkwoman from '../assets/img/pexels-ketut-subiyanto-4353614-removebg-preview.png'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={blkwoman} style={{ width: 200, height: 300 }} />
      </View>
      <View style={styles.headline}>
        <Text h1>Financial Peace We All Need</Text>
        <Text>
          Let's control your spending, track your expenses, and save more money.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
        <Button title="Log In" onPress={() => navigation.navigate('Log In')} />
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
  imageContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: "green"
  },
  headline: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "orange",
    padding: 20
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    // backgroundColor: "pink",
    paddingBottom: 10
  },
  terms: {
    textAlign: "center",
  },
});

export default Home;
