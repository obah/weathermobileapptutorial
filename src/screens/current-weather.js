import React from "react";
import { Octicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RowText from "../components/row-text";
import { weatherType } from "../utilities/weather-type";

export default function CurrentWeather() {
  const {
    wrapper,
    container,
    temp,
    feels,
    rangeWrapper,
    range,
    footerText1,
    footerText2,
    footerWrapper
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Octicons name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          mainText={"High: 8"}
          subText={"Low: 6"}
          textStyle={range}
          wrapperStyle={rangeWrapper}
        />
      </View>
      <RowText
        mainText={"It's sunny"}
        subText={weatherType["Thunderstorm"].message}
        textStyle={footerText1}
        subTextStyle={footerText2}
        wrapperStyle={footerWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    color: "purple",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "green"
  },
  range: {
    fontSize: 20,
    color: "red"
  },
  rangeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10
  },
  footerWrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginBottom: 40,
    paddingLeft: 25
  },
  footerText1: {
    fontSize: 48
  },
  footerText2: {
    fontSize: 30
  }
});
