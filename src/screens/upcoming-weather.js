/* global require */
import React from "react";
import { weather_data } from "../lib/weather-data";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { ListItem } from "../components/list-item";

export default function UpcomingWeather() {
  const { container, image } = styles;

  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require("../../assets/cloud.jpg")} style={image}>
        <Text>Upcoming Weather</Text>
        <View>
          <FlatList
            data={weather_data}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
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
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
