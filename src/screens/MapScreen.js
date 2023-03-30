import React, {useState, useRef, useEffect, useContext} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import FilterButton from '../components/FilterButton';
import MarkerInfoScreen from './MarkerInfoScreen';
import {MarkerContext} from '../context/MarkerContext';
import LoadingAnimation from '../LoadingAnimation';
import AsyncStorage from '@react-native-async-storage/async-storage';

Geolocation.getCurrentPosition(info => console.log(info));

//create component,


export default function MapScreen({navigation}) {
  const bottomSheet = useRef();
  const [lat, setLat] = useState({});
  const [lon, setLon] = useState({});
  const {
    glassMarkers,
    organicWasteMarkers,
    getMarkerInfo,
    pressGlass,
    pressOrganicWaste,
    MarkerPending,
    refRBSheet,
    plasticMetalMarkers,
    pressPlasticMetal,
    maskGlovesMarkers,
    pressMaskGloves,
    electronicWasteMarkers,
    pressElectronicWaste,
    markerRegion,
    setMarkerRegion,
    uID,
    getID,
    currentPositon,
    setCurrentPosition,
  } = useContext(MarkerContext);

  useEffect( () => {
    Geolocation.getCurrentPosition(
      async position => {
        //alert(JSON.stringify(position))
        const {longitude, latitude} = position.coords;
        await setCurrentPosition({
          ...currentPositon,
          latitude,
          longitude,
        });
        setMarkerRegion({
          ...currentPositon,
          latitude,
          longitude,
        });
        await AsyncStorage.setItem('latitude', String(latitude));
        await AsyncStorage.setItem('longitude', String(longitude));
      },
      error => alert(error.message),
      {timeout: 20000, maximumAge: 3600000},
    );
  }, []);

  return currentPositon.latitude ? (
    <View style={{flex: 1, margin: 3}}>
      <>
        {/*Render our MapView*/}
        <MapView
          //provider={PROVIDER_GOOGLE}
          style={styles.map}
          //specify our coordinates.
          //initialRegion={markerRegion}
          region={markerRegion}
          showsUserLocation={true}
          //onRegionChangeComplete={this.onRegionChangeComplete}
          zoomEnabled={true}>
          {glassMarkers && pressGlass
            ? glassMarkers.map((marker, index) => (
                <Marker
                  coordinate={marker.coordinate}
                  pinColor={'orange'}
                  key={index++}
                  onPress={() => {
                    refRBSheet.current.open();
                    getMarkerInfo(marker.id, 'glassMarkers');
                    setLat(marker.coordinate.latitude);
                    setLon(marker.coordinate.longitude);
                  }}
                />
              ))
            : null}

          {organicWasteMarkers && pressOrganicWaste
            ? organicWasteMarkers.map((marker, index) => (
                <Marker
                  coordinate={marker.coordinate}
                  title={marker.title}
                  pinColor={'green'}
                  key={index++}
                  onPress={() => {
                    refRBSheet.current.open();
                    getMarkerInfo(marker.id, 'organicWasteMarkers');
                    setLat(marker.coordinate.latitude);
                    setLon(marker.coordinate.longitude);
                  }}
                />
              ))
            : null}

          {plasticMetalMarkers && pressPlasticMetal
            ? plasticMetalMarkers.map((marker, index) => (
                <Marker
                  coordinate={marker.coordinate}
                  title={marker.title}
                  pinColor={'purple'}
                  key={index++}
                  onPress={() => {
                    refRBSheet.current.open();
                    getMarkerInfo(marker.id, 'plasticMetalMarkers');
                    setLat(marker.coordinate.latitude);
                    setLon(marker.coordinate.longitude);
                  }}
                />
              ))
            : null}

          {maskGlovesMarkers && pressMaskGloves
            ? maskGlovesMarkers.map((marker, index) => (
                <Marker
                  coordinate={marker.coordinate}
                  title={marker.title}
                  pinColor={'yellow'}
                  key={index++}
                  onPress={() => {
                    refRBSheet.current.open();
                    getMarkerInfo(marker.id, 'maskGlovesMarkers');
                    setLat(marker.coordinate.latitude);
                    setLon(marker.coordinate.longitude);
                  }}
                />
              ))
            : null}

          {electronicWasteMarkers && pressElectronicWaste
            ? electronicWasteMarkers.map((marker, index) => (
                <Marker
                  coordinate={marker.coordinate}
                  title={marker.title}
                  pinColor={'blue'}
                  key={index++}
                  onPress={() => {
                    refRBSheet.current.open();
                    getMarkerInfo(marker.id, 'electronicWasteMarkers');
                    setLat(marker.coordinate.latitude);
                    setLon(marker.coordinate.longitude);
                  }}
                />
              ))
            : null}
        </MapView>
        <FilterButton />
        <MarkerInfoScreen lat={lat} lon={lon}/>
        {MarkerPending ? <LoadingAnimation /> : null}
      </>
      <TouchableOpacity
        style={styles.button}
        onPress={() => bottomSheet.current.show()}></TouchableOpacity>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    color: 'black',
  },
});
