import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Header from './Header';
import {LineChart, BarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const AboutPAge = () => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const screenWidth = Dimensions.get('window').width;
  const data = {
    labels: ['Python', 'HTML-CSS', 'Django', 'JS', 'REact/Native'],
    datasets: [
      {
        data: [90, 75, 88, 80, 70],
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Header title={'ABOUT ME '} />
      <Text style={styles.text}>
        So far I worked with many projects includes RestfulAPIs, web development
        both backend and frontend good understanding and knowledge of data
        science
      </Text>
      <TouchableOpacity>
        <Text style={styles.downloadText}>Download my CV</Text>
      </TouchableOpacity>
      <View>
        <View style={styles.boxes}>
          <TouchableOpacity>
            <Text style={styles.textbox}>
              <Text style={styles.name}>10 +</Text> Projects Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textbox}>
              <Text style={styles.name}>10 +</Text> Projects Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textbox}>
              <Text style={styles.name}>10 +</Text> Projects Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textbox}>
              <Text style={styles.name}>10 +</Text> Projects Completed
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chart}>
          <View>
            <Text style={styles.text}>MY Skills</Text>
            <BarChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
          </View>
        </View>
        <View style={styles.timeLine}>
          <Text style={styles.timeText}>2020 - present</Text>
          <Text style={styles.titleText}>FULL STACK DEVELOPER</Text>
          <Text style={styles.companyText}> NOZASHATZ</Text>
          <Text style={styles.descriptionText}>
            Startapp company built by 5 engineers provide freelance support
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeText: {
    backgroundColor: '#2a2e35',
    colo: '#b2becd',
  },
  timeText: {
    color: '#b2becd',
  },
  titleText: {
    color: '#b2becd',
  },
  companyText: {
    color: '#b2becd',
  },
  descriptionText: {
    color: '#b2becd',
  },

  container: {
    flex: 1,
    backgroundColor: '#191d2b',
  },
  text: {
    fontSize: 15,
    padding: 5,
    lineHeight: 20,
    color: '#dbe1e8',
  },
  chart: {},
  timeLine: {},
  downloadText: {
    fontSize: 15,
    padding: 10,
    lineHeight: 20,
    color: '#dbe1e8',
    borderStyle: 'solid',
    borderRadius: 10,
    width: 150,
    borderWidth: 1,
    borderColor: '#27ae60',
  },
  name: {
    color: '#27ae60',
  },
  boxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  textbox: {
    marginLeft: 5,
    marginTop: 15,
    fontSize: 15,
    padding: 20,
    lineHeight: 20,
    color: '#dbe1e8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#27ae60',
    borderStyle: 'solid',
    width: 200,
    height: 100,
  },
});

export default AboutPAge;
