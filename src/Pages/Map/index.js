import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {baseUrl} from '../../config';
import GreenStatusSvg from '../../../assets/svg/GreenStatus';

const coordinates = [[35, 36], [36, 37], , [37, 38]];

const Map = () => {
  const [coords, setCoords] = useState([]);
  const mapRef = useRef();

  useEffect(() => {
    // const test = async () => {
    //   const path = '/Api/0.5/Meteo/All';
    //
    //   const result = await fetch(`${baseUrl}${path}`).then((res) => res.json());
    //
    //   console.log(result);
    // };
    //
    // test();
    setCoords(coordinates);
  }, []);

  const handleMap = () => {
    mapRef.current.fitToCoordinates(true);
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        mapType={'none'}
        ref={mapRef}
        onMapReady={handleMap}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={
          {
            // latitude: 37.78825,
            // longitude: -122.4324,
            // latitudeDelta: 0.0922,
            // longitudeDelta: 0.0421,
          }
        }>
        {coords.map((el, i) => (
          <Marker key={i} coordinate={{latitude: el[0], longitude: el[1]}}>
            <GreenStatusSvg />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Map;
