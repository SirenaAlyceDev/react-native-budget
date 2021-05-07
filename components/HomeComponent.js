import React from "react";
import { View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import blkwoman from "../assets/img/pexels-ketut-subiyanto-4353614-removebg-preview.png";
import backImg from "../assets/img/CurveLine.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backImg} style={styles.image}>
        <View style={styles.imageContainer}>
          <Image source={blkwoman} style={{ width: 300, height: 400 }} />
        </View>
        <View style={styles.headline}>
          <Text style={styles.h1} h1>
            Financial Peace We All Need
          </Text>
          <Text style={styles.body}>
            Let's control your spending, track your expenses, and save more
            money.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={{
              shadowColor: "rgba( 31, 38, 135, 0.37 )",
              shadowOffset: {
                width: 10,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              backgroundColor: "rgba( 95, 188, 4, 0.50 )",
              borderRadius: 50,
              padding: 10,
              margin: 30,
            }}
            title="Sign Up"
            onPress={() => navigation.navigate("Sign Up")}
          />
          <Button
            buttonStyle={{
              backgroundColor: "rgba( 95, 188, 4, 0.50 )",
              borderRadius: 50,
              padding: 10,
              margin: 30,
            }}
            title="Log In"
            onPress={() => navigation.navigate("Log In")}
          />
        </View>
        <View>
          <Text style={styles.terms}>terms text</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    marginStart: 20,
  },
  headline: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  terms: {
    textAlign: "center",
    color: "#ffffff",
  },
  h1: {
    color: "#ffffff",
    textAlign: "center",
  },
  body: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default Home;
