//import liraries
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import MapView from 'react-native-maps';

class Scene3 extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
              this.props.navigation.goBack();
        }}>
          <Text>Back to scene 1</Text>
        </TouchableOpacity>

        <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: -37.536612,
              longitude: 144.911374,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            provider="google"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
});

export default Scene3;
