/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  Text,
  View
} from "react-native";
import { MovieRow, SearchBar } from "./components";
import React, { Component } from "react";

const apikey = "8018e581";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: undefined
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(query) {
    this.setState({ loading: true }, () => {
      fetch(`http://www.omdbapi.com/?i=${query}&apikey=${apikey}`)
        .then(res => res.json())
        .then(movie => this.setState({ loading: false, movie }));
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar onPress={this.fetchData} />
        {this.state.loading && <ActivityIndicator size="large" />}
        {this.state.movie && (
          <View style={{ flex: 1 }}>
            <MovieRow movie={this.state.movie} />
          </View>
        )}
      </SafeAreaView>
    );
  }
}
