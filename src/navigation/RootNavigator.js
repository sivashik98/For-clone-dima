import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MapScreen from '../screens/Map';

const {Navigator, Screen} = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName={MapScreen} detachInactiveScreens={true}>
      <Screen name="Map" component={MapScreen} />
    </Navigator>
  );
};

export default RootNavigator;
