import React from "react";
import RowText from "../components/row-text";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weather-type";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function CurrentWeather({ data }) {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    rangeWrapper,
    range,
    footerText1,
    footerText2,
    footerWrapper
  } = styles;

  const {
    main: { feels_like, temp_max, temp_min, temp },
    weather
  } = data;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          mainText={`High: ${temp_max}°`}
          subText={`Low: ${temp_min}°`}
          textStyle={range}
          wrapperStyle={rangeWrapper}
        />
      </View>
      <RowText
        mainText={weather[0].description}
        subText={weatherType[weatherCondition].message}
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
  tempStyle: {
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
    fontSize: 43,
    color: "white"
  },
  footerText2: {
    fontSize: 25,
    color: "white"
  }
});
