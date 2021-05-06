import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { Text } from "react-native-elements";
import { Formik } from "formik";

export const LoginForm = (props) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
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

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Let's Get Started!</Text>
      </View>
      <View>
        <LoginForm />
      </View>
      <View>
          <Text>Don't have an account? Sign Up!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

export default Login;
