import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ListView,
  Image,
  Button,
} from 'react-native';

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
    console.log(this.props.rowData);
    return (
      <View>
        <ScrollView>
          <View>
              <Image
                source={{uri: this.props.rowData.photos[0]}}
                style={{width: 375, height: 220, marginTop: 80,
                }} />
          </View>

          <View>
            <Text>{this.props.rowData.price+'€'}</Text>
          </View>

          <View>
            <View style={styles.container}>
              <Text
                style={styles.title}>
                {this.props.rowData.title}</Text>
            </View>

              <View>
                <View style={{
                    flexDirection: 'row',
                    }}>
                  <View style={{marginTop: 5, alignItems: 'flex-start', marginLeft: 15,
                      }}>
                      <Text>{this.props.rowData.ratingValue}</Text>
                  </View>

                  <View style={{marginTop: 5, alignItems: 'flex-start', marginLeft: 30,
                    }}>
                    <Text>{this.props.rowData.reviews+' reviews'}</Text>
                  </View>
                </View>
                <View>
                  <View style={{flex: 1, alignItems: 'flex-end', marginRight: 20,
                      }}>
                    <Image
                      source={{uri: this.props.rowData.user.account.photos[0]}}
                      style={{width: 70, height: 70, borderRadius: 35,
                      }} />
                  </View>
                </View>
              </View>

              <View>
                <View style={{marginTop: 100, margin: 15,
                    }}><Text>{this.props.rowData.description}</Text>
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
                }}/>
              </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

export default AboutScene;
