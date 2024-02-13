import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function IconText({ icon, color, size, text, textStyle }) {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={size} color={color} />
      <Text style={textStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
});
