import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  TextInput,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

import Store from 'react-native-simple-store';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff7e82',
  },
  pass: {
    color: 'white',
    fontSize: 13,
    marginLeft: 210,
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
 },
  h1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
},
  connexion: {
    marginTop: 20,
},
  pass: {
    color: 'white',
    fontSize: 13,
    marginLeft: 210,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
},
  connexion: {
    color: 'white',
    fontSize: 20,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
},
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
},
  textinput: {
    color: 'white',
    height: 30,
    fontSize: 15,
    marginTop: 10,
},
  viewinput: {
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
},
  viewbutton: {
    height: 40,
    width: 180,
    marginLeft: 175,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  }
});


class LoginScene extends React.Component {

  constructor(props) {
   super(props);
   this.state={
     email: "",
     password: ""
   };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChangeEmail(email) {
      this.setState({
        email,
      });
    }

  onChangePassword(password) {
      this.setState({
        password,
      });
    }

  onPress() {
      Actions.tab();
    }


  render() {

    return (
      <View style={styles.container}>
       <Text style={styles.h1}>
         Bienvenue !
       </Text>
       <Text style={styles.connexion}>
         Connexion
       </Text>
       <View style={styles.viewinput}>
         <TextInput
           style={styles.textinput}
           placeholder="Identifiant"
           onChangeText={this.onChangeEmail}
           />
       </View>
         <Text style={styles.text}>
           Mot de passe
         </Text>
       <View style={styles.viewinput}>
         <TextInput
           type="password"
           style={styles.textinput}
           placeholder="Mot de passe  "
           onChangeText={this.onChangePassword}
           />
       </View>
       <View style={styles.viewbutton}>
         <Button
           onPress={() => {this.onPress()}}
           title= 'Connexion'
           color= '#ff7e82'/>
       </View>
     </View>
    )
  }
}

export default LoginScene;
