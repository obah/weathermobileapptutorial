import { Feather } from "@expo/vector-icons";
import React from "react";
import moment from "moment";
import { weatherType } from "../utilities/weather-type";
import { StyleSheet, Text, View } from "react-native";

export function ListItem(props) {
  const { dt_txt, min, max, condition } = props;

  const { itemWrapper, itemDate, itemTemp, dateTextWrapper } = styles;

  return (
    <View style={itemWrapper}>
      <Feather name={weatherType[condition].icon} size={34} color="yellow" />
      <View style={dateTextWrapper}>
        <Text style={itemDate}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={itemDate}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text
        style={itemTemp}
      >{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#89CFF0",
    borderColor: "#007FFF",
    borderWidth: 3,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 16
  },
  dateTextWrapper: {
    flexDirection: "column"
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
