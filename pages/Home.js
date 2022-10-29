import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import ImageBanner from "../components/ImageBanner";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={"HOME"} />
      <ImageBanner />
      <Text style={styles.textName}>
        Hi I am <Text style={styles.name}>Yunus Turgut</Text> A software
        engineer
      </Text>
      <Text style={styles.textName}>
        I am a former boimedical engineer. And had carier change to sofware
        engineer. Most of my knowlegde about backend such as databases and APIs.
        Besides that using techs like react and react native for frontend
        development. I posses very good knowlegde of python and javascript and i
        worked with machine learning and artifical leraning.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 100,
    backgroundColor: "#191d2b",
    flex: 1,
  },
  name: {
    color: "#27ae60",
  },

  textName: {
    fontSize: 15,
    padding: 15,
    lineHeight: 20,
    color: "#dbe1e8",
  },
});

export default Home;

// <div class="right-header">
//   <h1 class="name">
//     Hi I am <span class="name">Yun Tur</span> A software engineer
//   </h1>
//   <p>
// I am a former boimedical engineer. And had carier change to sofware
// engineer. Most of my knowlegde about backend such as databases and
// APIs. Besides that using techs like react and react native for
// frontend development. I posses very good knowlegde of python and
// javascript and i worked with machine learning and artifical
// leraning.
//   </p>
