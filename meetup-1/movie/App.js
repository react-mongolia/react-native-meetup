/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { ActivityIndicator, Button, Image, SafeAreaView, Text, TextInput, View} from 'react-native';

const omdb = require('./omdb.json')

export default class App extends Component {
  state = {
    loading: false,
    movie: undefined,
    query: ''
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1}}>
          <TextInput placeholder='IMDB id' value={this.state.query} onChangeText={query => this.setState({ query })} style={{ flex: 1 }}/>
          <Button title="Fetch" onPress={() => {
            this.setState({ loading: true }, () => {
              fetch(`http://www.omdbapi.com/?i=${this.state.query}&apikey=${omdb.apikey}`)
                .then(res => res.json())
                .then(movie => this.setState({ loading: false, movie }))
            })
          }} />
        </View>
        { this.state.loading && <ActivityIndicator size='large' /> }
        { this.state.movie &&
          <View style={{flex: 1}}>
            <Text style={{ fontSize: 22, fontWeight: 'bold'}}>{this.state.movie.Title}</Text>
            <Image source={{uri: this.state.movie.Poster }} style={{height: 400, width: 300 }} resizeMode='cover' />
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Year:</Text>
              <Text>{this.state.movie.Year}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Released:</Text>
              <Text>{this.state.movie.Released}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Runtime:</Text>
              <Text>{this.state.movie.Runtime}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Rated:</Text>
              <Text>{this.state.movie.Rated}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Genre:</Text>
              <Text>{this.state.movie.Genre}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Director:</Text>
              <Text>{this.state.movie.Director}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Writer:</Text>
              <Text>{this.state.movie.Writer}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Language:</Text>
              <Text>{this.state.movie.Language}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Country:</Text>
              <Text>{this.state.movie.Country}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Awards:</Text>
              <Text>{this.state.movie.Awards}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', marginRight: 10}}>Plot:</Text>
              <Text>{this.state.movie.Plot}</Text>
            </View>
          </View>
        }
      </SafeAreaView>
    );
  }
}
