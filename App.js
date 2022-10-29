import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Home from "./pages/Home";
import HomeRouter from "./components/HomeRoute";

import Header from "./components/Header";

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return <HomeRouter />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191d2b",
  },
});

export default App;
