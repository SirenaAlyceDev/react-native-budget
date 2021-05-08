import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign Up")}
            style={styles.button}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#5FBC04", "#068264"]}
              style={styles.button}
              start={[0.1,0.5]}
              end={[0.6,1]}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Log In")}
            style={styles.button}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={styles.button}
              colors={["#5FBC04", "#068264"]}
              style={styles.button}
              start={[0.1,0.5]}
              end={[0.6,1]}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>
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
  button: {
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  terms: {
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 20,
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
