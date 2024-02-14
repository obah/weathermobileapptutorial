/* global require */
import React from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";
import { ListItem } from "../components/list-item";

export default function UpcomingWeather({ data }) {
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
        <View>
          <FlatList
            data={data}
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
    flex: 1
  }
});
