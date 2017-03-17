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

import Icon from 'react-native-vector-icons/Ionicons';


import HomeScene from './src/scenes/HomeScene';
import AboutScene from './src/scenes/AboutScene';
import ProfilScene from './src/scenes/ProfilScene';
import LoginScene from './src/scenes/LoginScene';

class App extends React.Component {
  render() {
    return (
      <Router
          leftButtonIconStyle={{ tintColor: 'white' }}
          navigationBarStyle={{ backgroundColor: 'white' }}>

        <Scene
          titleStyle= {{color: '#ff7e82', fontWeight: 'bold'}}
          key={'login'}
          title={'Login'}
          component={LoginScene} />

        <Scene
          titleStyle= {{color: '#ff7e82', fontWeight: 'bold'}}
          key={'profil'}
          title={'Profil'}
          component={ProfilScene} />

        <Scene
          key={'tab'}
          tabs
          type={'replace'}>
          <Scene
            titleStyle= {{color: '#ff7e82', fontWeight: 'bold'}}
            key={'home'}
            title={'Mon AirBnB'}
            component={HomeScene}
            icon={(props) =>
              <Icon
                name={'md-play'}
                color={props.selected ? '#AAA' : '#000' } />
            } />
        <Scene
          titleStyle= {{color: '#ff7e82', fontWeight: 'bold'}}
          key={'about'}
          title={'About'}
          component={AboutScene}
          icon={(props) =>
            <Icon
              name={'md-star'}
              color={props.selected ? '#AAA' : '#000' } />
            } />
         </Scene>
      </Router>
    );
  }
}


export default App;
