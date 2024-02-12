import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function ListItem(props) {
  const { dt_txt, min, max, condition } = props;

  const { itemWrapper, itemDate, itemTemp } = styles;

  return (
    <View style={itemWrapper}>
      <MaterialCommunityIcons name="weather-sunny" size={34} color="yellow" />
      <Text style={itemDate}>{dt_txt}</Text>
      <Text style={itemTemp}>{min}</Text>
      <Text style={itemTemp}>{max}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#89CFF0",
    borderColor: "#007FFF",
    borderWidth: 3,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 16
  },
  itemDate: {
    fontSize: 20,
    color: "white"
  },
  itemTemp: {
    fontSize: 30,
    color: "white"
  }
});
