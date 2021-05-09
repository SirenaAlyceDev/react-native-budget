import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-elements";
import backImg from "../assets/imgs/CurveLine.png";
import SignUpForm from "../components/SignUpForm.js";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backImg} style={styles.image}>
      <View style={styles.headercontainer}>
          <Text style={styles.headertext} h3>Let's Get Started!</Text>
        </View>
        <View>
          <SignUpForm />
        </View>
        <View style={styles.footercontainer}>
          <Text style={styles.footertext}>Already have an account? Log In</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  headercontainer: {
    margin: 20
  },
  headertext: {
    color: "#ffffff"
  },
  footercontainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  footertext: {
    textAlign: "center",
    color: "#ffffff"
  }
});

export default SignUp;
