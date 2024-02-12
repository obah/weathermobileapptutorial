import CurrentWeather from "./src/components/current-weather";
import React from "react";
import UpcomingWeather from "./src/components/upcoming-weather";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
});
