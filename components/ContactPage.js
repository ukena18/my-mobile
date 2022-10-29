import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Header from "./Header";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Header title="Contact" />
      <View style={styles.contactMain}>
        <Text style={styles.textContact}>
          I am located in Colorado US . The best way to contact me is my phone
          number please reach me from my phone nomber
        </Text>

        <View>
          <Text style={styles.textContact}> Location </Text>
          <Text style={styles.textContact}>: Colorado, United States</Text>
        </View>
        <View>
          <Text style={styles.textContact}> Phone </Text>
          <Text style={styles.textContact}>: +1 970 9147574</Text>
        </View>
        <View>
          <Text style={styles.textContact}> Email </Text>
          <Text style={styles.textContact}>: nozashatz@gmail.com</Text>
        </View>
        <View>
          <Text style={styles.textContact}> Graduate </Text>
          <Text style={styles.textContact}>: Biomedical eng, Engineering</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191d2b",
    flex: 1,
  },

  textContact: {
    color: "#b2becd",
    fontSize: 23,
    // textAlign: "center",
    padding: 15,
  },
});

export default Contact;
