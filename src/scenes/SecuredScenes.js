import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

class SecuredScene extends React.Component {
  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text
          style={{fontSize: 27}}>
          Welcome
        </Text>
        <View style={{margin:20}} />
        <Button
          onPress={this.props.onLogoutPress}
          title="Logout"
          />
      </ScrollView>
          )
    }
}

export default SecuredScene;
