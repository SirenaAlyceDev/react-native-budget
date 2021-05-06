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
      <View>
        <Text>Let's Get Started!</Text>
      </View>
      <View>
        <SignUpForm />
      </View>
      <View>
          <Text>Already have an account? Log In</Text>
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

export default SignUp;
