//import liraries
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

class Scene2 extends Component {
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

export default Scene2;