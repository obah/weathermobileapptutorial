import React from "react";
import { Octicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Octicons name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.rangeWrapper}>
          <Text style={styles.range}>High: 8</Text>
          <Text style={styles.range}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={styles.footerText1}>It&apos;s sunny</Text>
        <Text style={styles.footerText2}>
          It&apos;s perfect t-shirt weather
        </Text>
      </View>
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
