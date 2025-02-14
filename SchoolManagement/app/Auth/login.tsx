import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6+ chars")
    .required("Password is required"),
});

export default function LoginScreen() {
  const navigation = useNavigation(); // Get navigation instance

  const handleLogin = async (values: { email: string; password: string }) => {
    console.log("Login Data:", values);
  
    // Simulating API response
    const token = "mocked_jwt_token";
    const role = "ADMIN"; 
  
    // Storing token & role in AsyncStorage
    try {
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("role", role);
      console.log("Token & Role saved!");
    } catch (error) {
      console.error("Error saving token:", error);
    }
  
    // Navigate to Admin Dashboard
    navigation.navigate("AdminDashboard" as never);
  };
  
  // Function to get role from AsyncStorage
  const getRole = async () => {
    try {
      const role = await AsyncStorage.getItem("role");
      console.log("Role:", role); // Now it will log the correct role
    } catch (error) {
      console.error("Error retrieving role:", error);
    }
  };
  
  // Call the function to fetch role
  getRole();
  

  return (
    <View style={styles.container}>
      {/* Logo & App Name */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.appName}>School Management</Text>

      {/* Formik Form */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Forgot Password Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgot" as never)}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  forgotText: {
    color: "#007bff",
    textDecorationLine: "underline",
    marginBottom: 15,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
