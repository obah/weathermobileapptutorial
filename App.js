import City from "./src/screens/city";
import CurrentWeather from "./src/screens/current-weather";
import React from "react";
import UpcomingWeather from "./src/screens/upcoming-weather";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CurrentWeather /> */}
      {/* <UpcomingWeather /> */}
      <City />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
});
