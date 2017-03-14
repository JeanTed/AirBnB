import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  }
});


class App extends React.Component {

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
            <View style={{flex: 1, alignItems: 'center',
              }}>
                <Image
                  source={{uri: rowData.photos[0]}}
                  style={{width: 310, height: 200, marginTop: 80, borderRadius: 4,
                  }} />
            </View>

            <View style={{marginTop: 10,   alignItems: 'flex-start', marginLeft: 30,
                }}>
              <Text>{rowData.price+'€'}</Text>
            </View>

              <View>
                <View style={{}}>
                  <View style={styles.container}>
                    <Text
                      style={styles.title}>
                      {rowData.title}</Text>
                  </View>

                  <View>
                    <View style={{marginTop: 2, alignItems: 'flex-start', marginLeft: 30,
                        }}>
                      <Text>{rowData.ratingValue}</Text>
                    </View>

                    <View style={{marginTop: 2, alignItems: 'flex-start', marginLeft: 30,
                      }}>
                      <Text>{rowData.reviews+' reviews'}</Text>
                    </View>
                  </View>
                </View>


                <View>
                  <Image
                    source={{uri: rowData.user.account.photos[0]}}
                    style={{width: 70, height: 70, borderRadius: 35,
                    }} />
                </View>
              </View>

              <View style={{textAlign: 'center', alignItems: 'center', padding: 30,
                  }}>
                <Text>{rowData.description}</Text>
              </View>
        </View>
      }/>
    );
  }
}


export default App;
