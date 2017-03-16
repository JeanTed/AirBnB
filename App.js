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
import ProfilScene from './src/scenes/ProfilScene';
import LoginScene from './src/scenes/LoginScene';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'login'} title={'Login'} component={LoginScene} />
        <Scene key={'home'} title={'Mon AirBnB'} component={HomeScene} />
        <Scene key={'about'} title={'About'} component={AboutScene} />
        <Scene key={'profil'} title={'Profil'} component={ProfilScene} />
      </Router>
    );
  }
}


export default App;
