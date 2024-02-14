import City from "../screens/city";
import CurrentWeather from "../screens/current-weather";
import { Feather } from "@expo/vector-icons";
import React from "react";
import UpcomingWeather from "../screens/upcoming-weather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Tabs({ data }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#195859"
        },
        headerStyle: {
          backgroundColor: "#195859"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "blue"
        }
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "blue" : "black"}
            />
          )
        }}
      >
        {() => <CurrentWeather data={data.list[0]} />}
      </Tab.Screen>

      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "blue" : "black"}
            />
          )
        }}
      >
        {() => <UpcomingWeather data={data.list} />}
      </Tab.Screen>

      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={25} color={focused ? "blue" : "black"} />
          )
        }}
      >
        {() => <City data={data.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
