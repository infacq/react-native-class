import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class GPS extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetch("https://facebook.github.io/react-native/movies.json", {method: "GET"})
        .then(response => response.json())
        .then(responseData => this.setState({movies: responseData.movies}))
        .done()
  }
  render() {
    if (!this.state.movies.length) return <ActivityIndicator animating={this.state.animating} style={[styles.centering, {height: 80}]} size="large" />
    return (
      <View style={ styles.container }>
          <Text style={ styles.welcome }>REST API</Text>
          <ScrollView>
            {this.state.movies.map(movie => {
              return (<View key={movie.releaseYear} style={ styles.movies }>
                        <Text style={ styles.teks }>{movie.title}</Text>
                        <Text style={ styles.teks }>{movie.releaseYear}</Text>
                      </View>)
            })}
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
    padding: 10
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  movies: {
    flex: 1,
    flexDirection: 'row'
  },
  teks: {
    flex: 1
  }
})