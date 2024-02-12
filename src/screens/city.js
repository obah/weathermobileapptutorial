import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function City() {
  const { container } = styles;

  return (
    <SafeAreaView style={container}>
      <Text>City</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
