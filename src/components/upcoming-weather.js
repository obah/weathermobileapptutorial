import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const data = [
  {
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [
      {
        main: "Rain"
      }
    ],
    dt_txt: "2022-08-30 16:00:00"
  },
  {
    main: {
      temp_min: 296.2,
      temp_max: 296.31
    },
    weather: [
      {
        main: "Rain"
      }
    ],
    dt_txt: "2022-08-30 17:00:00"
  },
  {
    main: {
      temp_min: 292.84,
      temp_max: 294.94
    },
    weather: [
      {
        main: "Rain"
      }
    ],
    dt_txt: "2022-08-30 18:00:00"
  },
  {
    main: {
      temp_min: 294.14,
      temp_max: 294.14
    },
    weather: [
      {
        main: "Clouds"
      }
    ],
    dt_txt: "2022-09-03 15:00:00"
  }
];

function UpcomingWeatherItem(props) {
  const { dt_txt, min, max, condition } = props;

  return (
    <View style={styles.itemWrapper}>
      <MaterialCommunityIcons name="weather-sunny" size={34} color="yellow" />
      <Text style={styles.itemDate}>{dt_txt}</Text>
      <Text style={styles.itemTemp}>{min}</Text>
      <Text style={styles.itemTemp}>{max}</Text>
    </View>
  );
}

export default function UpcomingWeather() {
  const renderItem = ({ item }) => (
    <UpcomingWeatherItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <View style={styles.container}>
      <Text>Upcoming Weather</Text>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
