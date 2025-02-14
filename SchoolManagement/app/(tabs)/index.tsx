import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator"; // Adjust path if needed
import { AppRegistry } from "react-native";
import { name as appName } from "../../app.json";

const App = () => {
  return (
    // <NavigationContainer>
      <StackNavigator />
    // </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => App);
