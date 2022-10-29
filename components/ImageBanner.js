import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const ImageBanner = () => {
  return (
    <View style={styles.imgContainer}>
      <TouchableOpacity>
        <Image style={styles.img} source={require("../images/hero_me.jpg")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    // flex: 1,
    backgroundColor: "#191d2b",

    paddingTop: 20,
    alignItems: "center",
    marginBottom: 0,
  },
  img: {
    opacity: 0.6,
    width: 370,
    height: 400,
  },
});

export default ImageBanner;
