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

class Scene1 extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Scene2');
        }}>
          <Text>Go to scene 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Scene3');
        }}>
          <Text>Go to scene 3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Scene1;