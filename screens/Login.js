import React from "react";
import { View, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { Text } from "react-native-elements";
import LoginForm from "../components/LoginForm.js";
import backImg from "../assets/imgs/CurveLine.png";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backImg} style={styles.image}>
        <View style={styles.headercontainer}>
          <Text style={styles.headertext} h3>Welcome Back!</Text>
        </View>
        <View>
          <LoginForm />
        </View>
        <View style={styles.footercontainer}>
          <Text style={styles.footertext}>Don't have an account? Sign Up!</Text>
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

export default Login;
