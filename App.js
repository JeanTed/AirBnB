import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import HomeScene from './src/scenes/HomeScene';
import AboutScene from './src/scenes/AboutScene';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'home'} title={'Mon AirBnB'} component={HomeScene} />
        <Scene key={'about'} title={'About'} component={AboutScene} />
      </Router>
    );
  }
}


export default App;
