import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class GPS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: '{"coords":{"speed":"0","longitude":"0","latitude":"0"}}',
      longitude:"0",
      latitude:"0",
      speed:"0",
      timestamp:"000"
    }
  }
  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      // (error) => alert(JSON.stringify(error)),
      (error) => {},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
      this.setState({longitude:position.coords.longitude});
      this.setState({latitude:position.coords.latitude});
      this.setState({timestamp:new Date(position.timestamp).toLocaleString()});
      this.props.reloadgeo(position.coords.longitude,position.coords.latitude,new Date(position.timestamp).toLocaleString());
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    if(this.props.showlabel=="0"){
      return(false);
    }
    return (
      <View style={styles.container}>
        <Text style={ styles.welcome }>Latest Time Stamp: {"\n"}{this.state.timestamp}{"\n"}{"\n"}</Text>
        <Text>{"\n"}{"\n"}Longitude: {this.state.longitude}</Text>
        <Text>{"\n"}{"\n"}Latitude: {this.state.latitude}</Text>
      </View>
    );
  }
  getlongitude(){
    return this.state.longitude;
  }
  getlatitude(){
    return this.state.latitude;
  }
  gettimestamp(){
    return this.state.timestamp;
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