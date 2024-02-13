import React from "react";
import { Text, View } from "react-native";

export default function RowText({
  mainText,
  subText,
  wrapperStyle,
  textStyle,
  subTextStyle
}) {
  return (
    <View style={wrapperStyle}>
      <Text style={textStyle}>{mainText}</Text>
      <Text style={subTextStyle ? subTextStyle : textStyle}>{subText}</Text>
    </View>
  );
}
