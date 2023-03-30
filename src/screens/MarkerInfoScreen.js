import { View, Text, TouchableOpacity, StyleSheet, Image, Button, Dimensions } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { MarkerContext } from '../context/MarkerContext';
import { OpenMapDirections } from 'react-native-navigation-directions';
import { Center } from 'native-base';
import { Animated } from 'react-native-maps';
import CustomAlert from '../components/CustomAlert';


const MarkerInfoScreen = ({ navigation, lat, lon }) => {
  const { refRBSheet, markerInfo, getButtonInfo, currentPosition } = useContext(MarkerContext);
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] = useState(
    false,
  );
  const [showDonationErrPopup, setShowDonationErrPopup] = useState(
    false,
  );

  _callShowDirections = () => {
    const startPoint = {
      currentPosition,
    };

    const endPoint = {
      longitude: lon,
      latitude: lat,
    };
    console.log(lat);
    console.log(lon);
    const transportPlan = 'w';

    OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
      console.log(res);
    });
  };

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      height={700}
      // closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: '#00000029',
        },
      }}>
      <View style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
        <View style={{ wrapper: '50%' }}>


          <Text style={styles.header}>{markerInfo ? markerInfo.bAd : null}</Text>
          <Text style={styles.inputbold}>{markerInfo ? markerInfo.adr : null}</Text>
          <Text style={styles.input}>{markerInfo ? markerInfo.adrT : null}</Text>
          <TouchableOpacity
            onPress={() => {
              this._callShowDirections();
            }}
            title="Open map">
            <Image
              style={styles.imageicon}
              source={require('../assets/images/directions.png')}
            />



          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>

            <Image
              style={styles.icon}
              source={require('../assets/images/greenmarker.png')}
            />
            <Text style={styles.icontext}>{markerInfo ? markerInfo.ek : null}         </Text>

          </View>
          <Image
            style={styles.image}
            source={require('../assets/images/gorselyok2.png')}
          />

          <CustomAlert
            displayMode={'dolu'}
            displayMsg={'Are you sure this box is full?'}
            visibility={showDonationSuccessPopup}
            dismissAlert={setShowDonationSuccessPopup}
          />
          <CustomAlert
            displayMode={'failed'}
            displayMsg={'Are you sure this box is not in the location?'}
            visibility={showDonationErrPopup}
            dismissAlert={setShowDonationErrPopup}
          />



          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                setShowDonationSuccessPopup(true);
              }}>
              <Image
                style={styles.buttonLeft}
                source={require('../assets/images/full.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowDonationErrPopup(true);
              }}>
              <Image
                style={styles.buttonRight}
                source={require('../assets/images/nobox.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  adress: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  text: {
    fontSize: 28.8,
    color: '#ECF0F9',
    fontWeight: "600",
    fontFamily: "Avenir"
  },
  modalButton: {
    backgroundColor: 'transparent',
    borderRadius: 80,
    borderColor: '#BF1E1E',
    marginTop: 64,
    borderWidth: 1,
    paddingTop: 16,
    padddingbottom: 16,
    paddingLeft: 25,
    paddingRight: 25,
    marginHorizontal: 5,
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  wrap: {
    justifyContent: "center",
    padding: 30,
    margin: 20,
    marginBottom: 350,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#2D3953',
    shadowOffset: {
      width: 8.4,
      height: 8.4

    },
    shadowOpacity: 0.74,
    shadowRadius: 30,
    elevation: 10
  },

  buttonLeft: {
    resizeMode: 'contain',
    width: 170,
    marginTop: 25,
    height: 105,
    marginLeft: 20,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginTop: 15,
  },
  buttonRight: {
    resizeMode: 'contain',
    width: 170,
    marginTop: 15,
    height: 105,
    marginLeft: 10,
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  image: {
    minWidth: 50,
    margin: 10,
    marginTop: 15,
    height: 90,
    height: 150,
    width: 350,
    alignSelf: 'center',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    borderWidth: 3,
    borderColor: 'transparent',
    borderRadius: 9,
  },
  imageicon: {
    minWidth: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 60,
    alignSelf: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  inputbold: {
    marginTop: -28,
    fontSize: 20,
    marginTop: -15,
    padding: 20,
    width: 'auto',
    fontWeight: 'bold',
    marginStart: 10,
    textAlign: 'left',
  },
  input: {
    marginTop: -28,
    fontSize: 20,
    padding: 20,
    width: 'auto',
    marginStart: 10,
    textAlign: 'left',
  },
  header: {
    fontSize: 20,
    padding: 15,
    width: 'auto',
    marginStart: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  icon: {
    width: 44,
    height: 60,
    marginTop: 15,
    marginLeft: 30,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  icontext: {
    marginTop: 15,
    fontSize: 17.8,
    fontWeight: "600",
    fontFamily: "Avenir",
    marginRight: 100,
    marginLeft: 10,
    height: 100,
  }
});

export default MarkerInfoScreen;
