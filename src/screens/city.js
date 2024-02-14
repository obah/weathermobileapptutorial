/* global require */
import IconText from "../components/icon-text";
import React from "react";
import moment from "moment";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function City({ data }) {
  const { name, country, population, sunrise, sunset } = data;

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
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>

        <View style={itemWrapper}>
          <IconText
            color={"#195859"}
            icon={"user"}
            size={50}
            text={`Population: ${population}`}
            textStyle={populationText}
          />
        </View>

        <View style={itemWrapper}>
          <IconText
            color={"white"}
            icon={"sunrise"}
            size={50}
            text={moment(sunrise).format("h:mm:ss a")}
            textStyle={riseSetText}
          />
          <IconText
            color={"white"}
            icon={"sunset"}
            size={50}
            text={moment(sunset).format("h:mm:ss a")}
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
    color: "#195859",
    fontWeight: "bold"
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
