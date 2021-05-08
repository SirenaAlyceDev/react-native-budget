import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-elements";
import { Formik } from "formik";
import backImg from "../assets/img/CurveLine.png";

export const SignUpForm = (props) => (
  <Formik
    initialValues={{ name: "", email: "", password: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <View>
          <TextInput
            placeholder="Hi! What's your name?"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
          />
        </View>
        <View>
          <TextInput
            placeholder="Email Address"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
        </View>
        <View>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      </View>
    )}
  </Formik>
);

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backImg} style={styles.image}>
        <View style={{backgroundColor:"orange", flex:1, justifyContent:'center', margin: 15}}>
          <Text style={{color: "#ffffff"}}>Let's Get Started!</Text>
        </View>
        <View style={{backgroundColor:"purple", flex:3}}>
          <SignUpForm/>
        </View>
        <View style={{backgroundColor:"green", flex:1}}>
          <Text>Already have an account? Log In</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});

export default SignUp;
