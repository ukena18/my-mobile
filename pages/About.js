import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import { LineChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const AboutPAge = () => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["Python", "HTML-CSS", "Django", "JS", "REact/Native"],
    datasets: [
      {
        data: [90, 75, 88, 80, 70],
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Header title={"ABOUT ME "} />
      <ScrollView>
        {/* about text */}
        <Text style={styles.aboutText}>
          So far I worked with many projects includes RestfulAPIs, web
          development both backend and frontend good understanding and knowledge
          of data science
        </Text>
        <TouchableOpacity style={styles.downloadBox}>
          <Text style={styles.downloadText}>Download CV</Text>
        </TouchableOpacity>
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

        <View style={styles.boxes}>
          <TouchableOpacity>
            <Text style={styles.textbox}>
              <Text style={styles.name}>10 +</Text> Projects
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textbox}>
              <Text style={styles.name}>20 +</Text> Happy Client
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textbox}>
              <Text style={styles.name}>24 +</Text> freelance Jobs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textbox}>
              <Text style={styles.name}>4 +</Text> Years of Coding
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.timeLine}>
            <Text style={styles.timeText}>2021 - PRESENT</Text>
            <Text style={styles.titleText}>FULL STACK DEVELOPER</Text>
            <Text style={styles.companyText}> NOZASHATZ</Text>
            <Text style={styles.descriptionText}>
              Startapp company built by 5 engineers provide freelance support
            </Text>
          </View>
          <View style={styles.timeLine}>
            <Text style={styles.timeText}>2019 - 2020</Text>
            <Text style={styles.titleText}>Software/Backend Developer </Text>
            <Text style={styles.companyText}> EGBASOFT</Text>
            <Text style={styles.descriptionText}>
              RestfulAPIs / backend Developer/ cloud / Python / Django
            </Text>
          </View>
          <View style={styles.timeLine}>
            <Text style={styles.timeText}>2017 - 2018</Text>
            <Text style={styles.titleText}>Engineering Intership</Text>
            <Text style={styles.companyText}> ISBEM</Text>
            <Text style={styles.descriptionText}>
              Work on sensors (Arduino C3,C++,Embedded system) , Work on Medical
              Devices (Medical Image processing )
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  timeText: {
    padding: 15,
    backgroundColor: "#2a2e35",
    color: "#b2becd",
  },

  titleText: {
    padding: 15,
    color: "#b2becd",
  },
  companyText: {
    padding: 15,
    color: "#b2becd",
  },
  descriptionText: {
    padding: 15,
    color: "#b2becd",
  },

  container: {
    flex: 1,
    backgroundColor: "#191d2b",
  },
  aboutText: {
    fontSize: 15,
    padding: 15,
    lineHeight: 20,
    color: "#dbe1e8",
  },
  chart: {},
  timeLine: {},
  downloadText: {
    fontSize: 15,
    padding: 10,

    color: "#dbe1e8",
    borderStyle: "solid",
    borderRadius: 10,
    width: 120,
    borderWidth: 1,
    borderColor: "#27ae60",
  },
  downloadBox: {
    alignItems: "flex-end",
    paddingRight: 15,
  },
  name: {
    color: "#27ae60",
  },
  boxes: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  textbox: {
    marginLeft: 5,
    marginTop: 15,
    fontSize: 15,
    padding: 20,
    lineHeight: 20,
    color: "#dbe1e8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#27ae60",
    borderStyle: "solid",
    width: 200,
    height: 70,
  },
});

export default AboutPAge;
