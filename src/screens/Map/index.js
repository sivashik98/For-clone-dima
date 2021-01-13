import * as React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Map from '../../Pages/Map';

const MapScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Map />
    </SafeAreaView>
  );
};

export default MapScreen;
