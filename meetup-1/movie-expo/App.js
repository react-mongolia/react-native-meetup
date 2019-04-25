import { Alert, ActivityIndicator, SafeAreaView, View, ScrollView, Platform } from "react-native";
import { MovieRow, SearchBar } from "./components";
import React, { Component } from "react";

import * as Expo from "expo";

const apikey = "8018e581";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: undefined,
      modalVisible: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.fetchDataWithAuth = this.fetchDataWithAuth.bind(this);

  }

  fetchDataWithAuth(query) {

    var that = this;
    
    if(Platform.OS === "android")
      Alert.alert('Кино хайлт',"Хурууны хээгээ уншуулна уу !",[],{cancelable: false});

    Expo.LocalAuthentication.authenticateAsync()
    .then(function(result){
        if(result.success)
        {
          Alert.alert('Кино хайлт', 'Амжилттай Баталгаажлаа');
          that.setState({ loading: true }, () => {
            fetch(`http://www.omdbapi.com/?i=${query}&apikey=${apikey}`)
              .then(res => res.json())
              .then(movie => that.setState({ loading: false, movie }));
          });
        }
        else{
          Alert.alert('Кино хайлт', 'Баталгаажуулахад алдаа гарлаа');
        }
    })
    .catch(function (error) {
      console.log(error);
    })

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
      <SafeAreaView style={{ flex: 1, paddingTop: Expo.Constants.statusBarHeight, marginHorizontal:10}}>
        <ScrollView>
          <SearchBar onPress={this.fetchData}  />
          {/* <SearchBar onPress={this.fetchDataWithAuth}  /> */}
          {this.state.loading && <ActivityIndicator size="large" />}
          {this.state.movie && (
            <View style={{ flex: 1 }}>
              <MovieRow movie={this.state.movie} />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}