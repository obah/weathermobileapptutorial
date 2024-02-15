import { Feather } from "@expo/vector-icons";
import React from "react";
import useFetchWeather from "../hooks/useFetchWeather";
import { Button, View, StyleSheet, Text } from "react-native";

export default function Error() {
  const [fetchWeatherData] = useFetchWeather();

  const { container, errorMsg } = styles;

  return (
    <View style={container}>
      <Text style={errorMsg}>Sorry! something went wrong</Text>
      <Feather name="frown" size={100} color={"white"} />
      <Button
        onPress={() => fetchWeatherData()}
        title="Retry"
        color="gray"
        accessibilityLabel="Reload application"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  errorMsg: {
    fontSize: 30,
    color: "white",
    marginHorizontal: 10,
    textAlign: "center"
  }
});
