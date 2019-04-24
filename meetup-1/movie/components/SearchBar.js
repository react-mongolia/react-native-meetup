import { Button, TextInput, View } from "react-native";
import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    query: this.props.query
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "black",
          borderBottomWidth: 1
        }}
      >
        <TextInput
          placeholder="IMDB id tt0111161"
          value={this.state.query}
          onChangeText={query => this.setState({ query })}
          style={{ flex: 1 }}
        />
        <Button
          title="Fetch"
          onPress={() => this.props.onPress(this.state.query)}
        />
      </View>
    );
  }
}

export default SearchBar;
