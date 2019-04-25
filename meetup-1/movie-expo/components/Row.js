import React, { Component } from "react";
import { Text, View } from "react-native";

export const Row = ({ name, value }) => (
  <View>
    <Text style={{ fontWeight: "bold"}}>{name}:</Text>
    <Text>{value}</Text>
  </View>
);

export default Row;