import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ListView,
  Image
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';


class ProfilScene extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      dataFavoris: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    }
  }


  componentDidMount(){
    fetch(`http://localhost:3001/api/room/${this.props.rowData.user.account.rooms}`)
    .then(res => res.json())
    .then(cityrooms => {
      console.log('cityrooms', cityrooms);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(cityrooms.rooms)
      });
    });

    fetch(`http://localhost:3001/api/room/${this.props.rowData.user.account.favorites}`)
    .then(res => res.json())
    .then(cityrooms => {
      console.log('cityrooms', cityrooms);
      this.setState({
        dataFavoris: this.state.dataFavoris.cloneWithRows(cityrooms)
      });
    });
  }


  render() {
    console.log(this.props.rowData);
    return (
        <View>
          <ScrollView>
              <View
                style={{
                  flex: 1, alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: this.props.rowData.user.account.photos[0]}}
                  style={{
                    width: 150,
                    height: 130,
                    marginTop: 90,
                    borderRadius: 20,
                  }} />
                <View
                  style={{
                    marginTop: 5,
                    }}>
                  <Text>{this.props.rowData.user.account.username}</Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    }}>
                  <Text>{this.props.rowData.user.account.description}</Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginTop: 20,
                  backgroundColor: '#ff7e82',
                }}>
                <Text>Mon appartement</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri:this.props.rowData.photos[0]}}
                  style={{
                    width: 375,
                    height: 220,
                  }} />
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginTop: 20,
                  backgroundColor: '#ff7e82',
                  }}>
                <Text>Mes Favoris</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  }}>
                <Image
                  source={{
                    uri: rowData.favorites[0]}}
                  style={{
                    width: 375,
                    height: 220,
                    }} />
              </View>
          </ScrollView>
        </View>
      );
    }
  }

export default ProfilScene;
