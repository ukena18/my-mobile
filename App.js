import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import About from './components/About';
import AboutPAge from './components/AboutPage';
import Contact from './components/ContactPage';
import Header from './components/Header';
import ImageBanner from './components/ImageBanner';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Header title={'Noza Shatz'} />
      <About />
      <ImageBanner /> */}
      {/* <AboutPAge /> */}
      <Contact />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191d2b',
  },
});

export default App;
