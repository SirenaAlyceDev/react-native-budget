import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";

const LoginForm = ({navigation}) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={() => navigation.navigate("Dashboard")}
    style={styles.container}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <View>
          <Text style={styles.inputlabel}>Email</Text>
          <TextInput
            placeholder="Email Address"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.inputlabel}>Password</Text>
          <TextInput
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            style={styles.input}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={handleSubmit}
            title="Submit"
            style={styles.button}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={styles.button}
              colors={["#5FBC04", "#068264"]}
              style={styles.button}
              start={[0.1, 0.5]}
              end={[0.6, 1]}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    )}
  </Formik>
);

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 20,
  },
  inputlabel: {
    color: "#ffffff",
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
