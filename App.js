import Error from "./src/components/error";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Tabs from "./src/components/tabs";
import useFetchWeather from "./src/hooks/useFetchWeather";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function App() {
  const [isLoading, errorMsg, weatherData] = useFetchWeather();

  if (weatherData && weatherData.city) {
    return (
      <NavigationContainer>
        <Tabs data={weatherData} />
      </NavigationContainer>
    );
  }

  return (
    <>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator size={"large"} color={"blue"} />
        </View>
      ) : errorMsg ? (
        <Error />
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
