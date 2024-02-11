import CurrentWeather from "./src/components/current-weather";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
