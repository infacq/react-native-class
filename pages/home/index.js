import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={ styles.butang } onPress={Actions.GPS}>
          <Text style={ styles.welcome }>GPS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.butang } onPress={Actions.REST}>
          <Text style={ styles.welcome }>REST API</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  butang: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    padding: 10, 
    alignItems: 'center',
    borderColor: 'steelblue',
    borderWidth: 1,
    marginBottom: 10
  }
});