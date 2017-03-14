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

import HomeScene from './src/HomeScene';
import AboutScene from './src/AboutScene';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'home'} title={'Mon Airbnb'} component={HomeScene} />
        <Scene key={'about'} title={'About'} component={AboutScene} />
      </Router>
    );
  }
}

export default App;
