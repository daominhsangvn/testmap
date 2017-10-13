import React from 'react';
import {
  StackNavigator
} from 'react-navigation';

import Scene1 from '../scenes/Scene1';
import Scene2 from '../scenes/Scene2';
import Scene3 from '../scenes/Scene3';

const MainStack = StackNavigator({
  Scene1: {
    screen: Scene1
  },
  Scene2: {
    screen: Scene2
  },
  Scene3: {
    screen: Scene3
  }
}, {
  headerMode: 'screen',
  navigationOptions: {
    gesturesEnabled: false,
    headerBackTitle: null
  }
});


export default RootNavigator = StackNavigator({
  Main: {
    screen: MainStack
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
    headerBackTitle: null
  }
});
