import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

import Login from "@/app/Auth/login";
import Forgot from "@/app/Auth/Forgot";
import AdminDashboard from "../Admin/Dashboard/Dashboard";
import StudentDashboard from "../Student/Dashboard/Dashboard";
import TeacherDashboard from "../Teacher/Dashboard/Dashboard";
import ParentsDashboard from "../Parent/Dashboard/Dashboard";

// Define the type for the stack's param list
type RootStackParamList = {
  AuthHandler: undefined;
  Login: undefined;
  Forgot: undefined;
  AdminDashboard: undefined;
  StudentDashboard: undefined;
  TeacherDashboard: undefined;
  ParentsDashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Define the type for the navigation prop
type AuthHandlerNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AuthHandler"
>;

interface AuthHandlerProps {
  navigation: AuthHandlerNavigationProp;
}

const AuthHandler: React.FC<AuthHandlerProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const role = await AsyncStorage.getItem("role");
        console.log("User Role:", role);

        if (role === "ADMIN") {
          console.log("Navigating to AdminDashboard");
          navigation.replace("AdminDashboard");
        } else if (role === "STUDENT") {
          console.log("Navigating to StudentDashboard");
          navigation.replace("StudentDashboard");
        } else if (role === "TEACHER") {
          console.log("Navigating to TeacherDashboard");
          navigation.replace("TeacherDashboard");
        } else if (role === "PARENT") {
          console.log("Navigating to ParentsDashboard");
          navigation.replace("ParentsDashboard");
        } else {
          console.log("Navigating to Login");
          navigation.replace("Login");
        }
      } catch (error) {
        console.error("Error fetching role:", error);
        navigation.replace("Login");
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Checking user role...</Text>
      </View>
    );
  }

  return null; // Prevent rendering unnecessary UI
};

const StackNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthHandler" component={AuthHandler} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
      <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
      <Stack.Screen name="ParentsDashboard" component={ParentsDashboard} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigator;
