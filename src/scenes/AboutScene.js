import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ListView,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

import Map from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    alignItems: 'flex-start',
    marginLeft: 15,
    marginTop: 25,
  },
  title: {
    fontSize: 16,
  },
});

class AboutScene extends React.Component {
  render() {

    const {
        rowData,
      } = this.props;

    console.log(rowData);
    return (
      <View>
        <ScrollView>
          <View>
              <Image
                source={{uri: rowData.photos[0]}}
                style={{width: 375, height: 220, marginTop: 80,
                }} />
          </View>

          <View>
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
                <View style={{marginTop: 5, alignItems: 'flex-start', marginLeft: 25,
                    }}>
                    <Text>{rowData.ratingValue}</Text>
                </View>

                <View style={{marginTop: 5, alignItems: 'flex-start', marginLeft: 30,
                  }}>
                  <Text>{rowData.reviews+' reviews'}</Text>
                </View>
              </View>
            </View>

            <TouchableHighlight onPress={() => Actions.profil({rowData})}>
              <View style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    marginTop: 15,
                    marginLeft: 50,
                  }}>
                <Image
                  source={{uri: rowData.user.account.photos[0]}}
                  style={{width: 50, height: 50, borderRadius: 25,
                  }} />
              </View>
            </TouchableHighlight>
          </View>

            <View>
              <View style={{marginTop: 20, margin: 15,
                  }}><Text>{rowData.description}</Text>
              </View>
            </View>

          <View style={{
              alignItems: 'center',
              }}>
            <Map
              initialRegion={{
                latitude: 48.8564449,
                longitude: 2.4002913,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={{width: 375, height: 220, margin: 10,
              }}>
            <Map.Marker
              coordinate={{
                latitude: 48.8564449,
                longitude: 2.4002913,
                }}
              title={'Here !'}/>
            </Map>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AboutScene;
