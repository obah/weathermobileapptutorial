/* global require */
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import IconText from "../components/icon-text";

export default function City() {
  const {
    container,
    background,
    cityText,
    cityName,
    countryName,
    itemWrapper,
    populationText,
    riseSetText
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={background}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>

        <View style={itemWrapper}>
          <IconText
            color={"#007FFF"}
            icon={"user"}
            size={50}
            text={"10,000"}
            textStyle={populationText}
          />
        </View>

        <View style={itemWrapper}>
          <IconText
            color={"white"}
            icon={"sunrise"}
            size={50}
            text={"09:30:00am"}
            textStyle={riseSetText}
          />
          <IconText
            color={"white"}
            icon={"sunset"}
            size={50}
            text={"17:45:00pm"}
            textStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1
  },
  cityText: {
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "#007FFF",
    fontWeight: "bold"
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
