import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import Home from './pages/home'
import GPS from './pages/GPS'
import REST from './pages/REST'
 
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: "0",
      longitude: "0",
      timestamp: "0"
    }
  }
  reloadgeo = (lon,lat,times) => {
    this.setState({latitude:lat, longitude:lon, timestamp:times})
  }
  GEO = () => {
    return <GPS showlabel="1" reloadgeo={this.reloadgeo} />
  }
  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene key="home" hideNavBar={true} component={Home} title="Welcome"/>
            <Scene key="GPS" hideNavBar={false} component={this.GEO} title="GLOBAL POSITIONING SYSTEM"/>
            <Scene key="REST" hideNavBar={false} component={REST} title="REST API"/>
          </Scene>
        </Router>)
  }
}

AppRegistry.registerComponent('projectPetang', () => App)