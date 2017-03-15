import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
  },
});


class HomeScene extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }),
  }
}


componentDidMount(){
  fetch(`http://localhost:3001/api/room?city=paris`)
  .then(res => res.json())
  .then(cityrooms => {
    console.log('cityrooms', cityrooms);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(cityrooms.rooms)
    });
  });
}


render() {
  return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
        <View>
            <TouchableHighlight onPress={() => Actions.about({rowData})}>
              <View style={{flex: 1, alignItems: 'center',
                }}>
                  <Image
                    source={{uri: rowData.photos[0]}}
                    style={{width: 310, height: 200, marginTop: 80, borderRadius: 4,
                    }} />
              </View>
            </TouchableHighlight>

            <View style={{marginTop: 10,   alignItems: 'flex-start', marginLeft: 30,
                  }}>
                  <Text>{rowData.price+'€'}</Text>
            </View>

              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  }}>
                <View>
                  <View style={styles.container}>
                    <Text
                      style={styles.title}>
                      {rowData.title}</Text>
                  </View>

                  <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      }}>
                    <View style={{marginTop: 5, alignItems: 'flex-start', marginLeft: 30,
                        }}>
                        <Text>{rowData.ratingValue}</Text>
                    </View>

                    <View style={{marginTop: 5, alignItems: 'flex-start', marginLeft: 30,
                      }}>
                      <Text>{rowData.reviews+' reviews'}</Text>
                    </View>
                  </View>
                </View>

                <View style={{
                      flex: 1,
                      alignItems: 'flex-end',
                    }}>
                  <Image
                    source={{uri: rowData.user.account.photos[0]}}
                    style={{width: 70, height: 70, borderRadius: 35,
                    }} />
                </View>
              </View>
        </View>
      }/>
    );
  }
}


export default HomeScene;
