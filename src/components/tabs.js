import City from "../screens/city";
import CurrentWeather from "../screens/current-weather";
import { Feather } from "@expo/vector-icons";
import React from "react";
import UpcomingWeather from "../screens/upcoming-weather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Tabs() {
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
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "blue" : "black"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "blue" : "black"}
            />
          )
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={25} color={focused ? "blue" : "black"} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
