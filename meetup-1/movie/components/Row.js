import React, { Component } from "react";
import { Text, View } from "react-native";

export const Row = ({ name, value }) => (
  <View style={{ flexDirection: "row" }}>
    <Text style={{ fontWeight: "bold", marginRight: 10 }}>{name}:</Text>
    <Text>{value}</Text>
  </View>
);

export default Row;
