import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Contact = () => {
  return (
    <View>
      <View style={styles.contact}>
        <Text style={styles.text}>Contact Page</Text>
      </View>
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
  contact: {
    height: 60,
    padding: 15,
    backgroundColor: '#454e56',
  },
  contactMain: {
    // flex: 1,
  },
  text: {
    color: '#27ae60',
    fontSize: 23,
    textAlign: 'center',
  },
  textContact: {
    color: '#red',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Contact;
