import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#454e56',
  },
  text: {
    color: '#27ae60',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
