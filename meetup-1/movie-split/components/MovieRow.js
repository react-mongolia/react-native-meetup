import { Image, Text, View } from "react-native";

import React from "react";
import Row from "./Row";

export const MovieRow = ({ movie: { Title, Poster, ...movie } }) => (
  <View>
    <Text style={{ fontSize: 22, fontWeight: "bold" }}>{Title}</Text>
    <Image
      source={{ uri: Poster }}
      style={{ height: 400, width: 300 }}
      resizeMode="cover"
    />
    <Row name="Year" value={movie.Year} />
    <Row name="Released" value={movie.Released} />
    <Row name="Runtime" value={movie.Runtime} />
    <Row name="Rated" value={movie.Rated} />
    <Row name="Genre" value={movie.Genre} />
    <Row name="Director" value={movie.Director} />
    <Row name="Writer" value={movie.Writer} />
    <Row name="Language" value={movie.Language} />
    <Row name="Country" value={movie.Country} />
    <Row name="Awards" value={movie.Awards} />
    <Row name="Plot" value={movie.Plot} />
  </View>
);

export default MovieRow;
