import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';
import React, { useContext, useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MarkerContext } from '../context/MarkerContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FilterButton = () => {
  const {
    pressElectronicWaste,
    pressGlass,
    pressMaskGloves,
    pressOrganicWaste,
    pressPlasticMetal,
    setPressElectronicWaste,
    setPressGlass,
    setPressMaskGloves,
    setPressOrganicWaste,
    setPressPlasticMetal,
    isOpen,
    setMarkerPending,
    setIsOpen,
    getGlassMarker,
    getOrganicWasteMarker,
    getPlasticMetalMarker,
    getMaskGlovesMarker,
    getElectronicWasteMarker,
    setMarkerRegion,
    glassMarkers,
    organicWasteMarkers,
    plasticMetalMarkers,
    maskGlovesMarkers,
    electronicWasteMarkers,
  } = useContext(MarkerContext);
  const toggleAnimation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    const toValue = isOpen ? 0 : 1;
    Animated.timing(toggleAnimation, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TouchableWithoutFeedback
        onPress={async () => {
          setMarkerPending(true);
          let len = plasticMetalMarkers.length; let lat = await AsyncStorage.getItem('latitude');
          let lon = await AsyncStorage.getItem('longitude');
          len === 0 ? getPlasticMetalMarker(2, lat, lon, 1) : null;
          setPressPlasticMetal(!pressPlasticMetal);
          setMarkerPending(false);
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 40,
            flexDirection: 'row',
            transform: [
              {
                translateY: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0],
                }),
              },
              {
                translateX: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [167, 72],
                }),
              },
            ],
          }}>
          <Image
            style={styles.filterButton}
            source={require('../assets/images/plastikMetalButonu.png')}
          />
          {pressPlasticMetal && isOpen ? (
            <View style={styles.checkBadge}>
              <MaterialCommunityIcons name="check-bold" />
            </View>
          ) : null}
          {isOpen ? <Text style={styles.filter}>Plastic and Metal</Text> : null}
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={async () => {
          setMarkerPending(true);
          setPressOrganicWaste(!pressOrganicWaste);
          let len = organicWasteMarkers.length;
          let lat = await AsyncStorage.getItem('latitude');
          let lon = await AsyncStorage.getItem('longitude');
          console.log(len);
          len === 0
            ? getOrganicWasteMarker(12, lat, lon, 1)
            : null;
          setMarkerPending(false);
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 120,
            flexDirection: 'row',
            transform: [
              {
                translateY: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [80, 0],
                }),
              },
              {
                translateX: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [167, 97],
                }),
              },
            ],
          }}>
          <Image
            style={styles.filterButton}
            source={require('../assets/images/bitkiselAtıkButonu.png')}
          />
          {pressOrganicWaste && isOpen ? (
            <View style={styles.checkBadge}>
              <MaterialCommunityIcons name="check-bold" />
            </View>
          ) : null}
          {isOpen ? <Text style={styles.filter}>Organic</Text> : null}
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={async () => {
          setMarkerPending(true);
          console.log('loading screen geldi');
          let len = glassMarkers.length;
          let lat = await AsyncStorage.getItem('latitude');
          let lon = await AsyncStorage.getItem('longitude');
          len === 0
            ? getGlassMarker(3, lat, lon, 1)
            : null;
          setMarkerPending(false);
          setPressGlass(!pressGlass);
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 160,
            flexDirection: 'row',
            transform: [
              {
                translateY: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [120, 0],
                }),
              },
              {
                translateX: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [167, 167],
                }),
              },
            ],
          }}>
          <Image
            style={styles.filterButton}
            source={require('../assets/images/camButonu.png')}
          />
          {pressGlass && isOpen ? (
            <View style={styles.checkBadge}>
              <MaterialCommunityIcons name="check-bold" />
            </View>
          ) : null}
          {isOpen ? <Text style={styles.filter}>Glass</Text> : null}
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={async () => {
          setMarkerPending(true);
          setPressMaskGloves(!pressMaskGloves);
          let len = maskGlovesMarkers.length;
          let lat = await AsyncStorage.getItem('latitude');
          let lon = await AsyncStorage.getItem('longitude');
          console.log(len);
          getMaskGlovesMarker(10, lat, lon, 1)
          len === 0
            ? getMaskGlovesMarker(10, lat, lon, 1)
            : null;
          setMarkerPending(false);
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 120,
            flexDirection: 'row',
            transform: [
              {
                translateY: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [80, 0],
                }),
              },
              {
                translateX: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [167, 237],
                }),
              },
            ],
          }}>
          <Image
            style={styles.filterButton}
            source={require('../assets/images/maskeEldivenButonu.png')}
          />
          {pressMaskGloves && isOpen ? (
            <View style={styles.checkBadge}>
              <MaterialCommunityIcons name="check-bold" />
            </View>
          ) : null}
          {isOpen ? <Text style={styles.filter}>Mask</Text> : null}
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={async () => {
          setMarkerPending(true);
          setPressElectronicWaste(!pressElectronicWaste);
          let len = electronicWasteMarkers.length;
          let lat = await AsyncStorage.getItem('latitude');
          let lon = await AsyncStorage.getItem('longitude');
          len === 0
            ? getElectronicWasteMarker(6, lat, lon, 1)
            : null;
          setMarkerPending(false);
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 40,
            flexDirection: 'row',
            transform: [
              {
                translateY: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0],
                }),
              },
              {
                translateX: toggleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [167, 262],
                }),
              },
            ],
          }}>
          <Image
            style={styles.filterButton}
            source={require('../assets/images/elektronikAtıkButonu.png')}
          />
          {pressElectronicWaste && isOpen ? (
            <View style={styles.checkBadge}>
              <MaterialCommunityIcons name="check-bold" />
            </View>
          ) : null}
          {isOpen ? <Text style={styles.filter}>Electronic</Text> : null}
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          startAnimation();
        }}>
        <Animated.View style={styles.touchableOpacity}>
          {isOpen ? (
            <Image
              style={styles.recycleButton}
              source={require('../assets/images/çıkışButonu.png')}
            />
          ) : (
            <Image
              style={styles.recycleButton}
              source={require('../assets/images/geriDönüşümButonu.png')}
            />
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};
const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 1,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: 40,
  },
  filterButton: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    float: 'center',
  },
  recycleButton: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    float: 'center',
  },
  filter: {
    position: 'absolute',
    fontSize: 13,
    fontWeight: 'bold',
    backgroundColor: 'white',
    bottom: -25,
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 5,
  },

  checkBadge: {
    backgroundColor: `#7cfc00`,
    position: 'absolute',
    left: 30,
    bottom: 36,
    width: 18,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
});
export default FilterButton;
