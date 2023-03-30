import React, {
  createContext,
  useState,
  useRef,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../../firebase';

export const MarkerContext = createContext();


export const MarkerProvider = ({ children }) => {
  const [pressGlass, setPressGlass] = useState(false);
  const [pressOrganicWaste, setPressOrganicWaste] = useState(false);
  const [pressPlasticMetal, setPressPlasticMetal] = useState(false);
  const [pressMaskGloves, setPressMaskGloves] = useState(false);
  const [pressElectronicWaste, setPressElectronicWaste] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [MarkerPending, setMarkerPending] = useState(false);
  const [markerInfo, setMarkerInfo] = useState();
  const [glassMarkers, setGlassMarkers] = useState([]);
  const refRBSheet = useRef();
  const [markerRegion, setMarkerRegion] = useState({});
  const [organicWasteMarkers, setOrganicWasteMarkers] = useState([]);
  const [plasticMetalMarkers, setPlasticMetalMarkers] = useState([]);
  const [maskGlovesMarkers, setMaskGlovesMarkers] = useState([]);
  const [electronicWasteMarkers, setElectronicWasteMarkers] = useState([]);

  const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [currentPositon, setCurrentPosition] = useState(initialState);

  const getGlassMarker = async () => {
    const markers = await db.collection('glassMarkers').get();
    //console.log(markers);
    db.collection('glassMarkers')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          glassMarkers[glassMarkers.length] = { id: documentSnapshot.id, coordinate: { latitude: documentSnapshot.data().lat, longitude: documentSnapshot.data().lon } }
        });
      });
  };

  const getOrganicWasteMarker = async () => {
    db.collection('organicWasteMarkers')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          organicWasteMarkers[organicWasteMarkers.length] = { id: documentSnapshot.id, coordinate: { latitude: documentSnapshot.data().lat, longitude: documentSnapshot.data().lon } }
        });
      });
  };

  const getPlasticMetalMarker = async () => {
    db.collection('plasticMetalMarkers')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          plasticMetalMarkers[plasticMetalMarkers.length] = { id: documentSnapshot.id, coordinate: { latitude: documentSnapshot.data().lat, longitude: documentSnapshot.data().lon } }
        });
      });
  };

  const getMaskGlovesMarker = async () => {
    db.collection('maskGlovesMarkers')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          maskGlovesMarkers[maskGlovesMarkers.length] = { id: documentSnapshot.id, coordinate: { latitude: documentSnapshot.data().lat, longitude: documentSnapshot.data().lon } }
        });
      });
  };

  const getElectronicWasteMarker = async () => {
    db.collection('electronicWasteMarkers')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          electronicWasteMarkers[electronicWasteMarkers.length] = { id: documentSnapshot.id, coordinate: { latitude: documentSnapshot.data().lat, longitude: documentSnapshot.data().lon } }
        });
      });
  };

  const getMarkerInfo = async (id, markerName) => {
    db.collection(markerName)
      .doc(id)
      .collection('address')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setMarkerInfo({ adrT: documentSnapshot.data().address });
        });
      });
  };
  const getButtonInfo = async (kID, bil) => {
    /*
    var axios = require('axios');
    var data = '';
    var config = {
      method: 'post',
      url: '//',
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
  };
  return (
    <MarkerContext.Provider
      value={{
        MarkerPending,
        setMarkerPending,
        glassMarkers,
        organicWasteMarkers,
        getMarkerInfo,
        markerInfo,
        pressGlass,
        pressElectronicWaste,
        pressMaskGloves,
        pressOrganicWaste,
        pressPlasticMetal,
        isOpen,
        MarkerPending,
        refRBSheet,
        markerRegion,
        plasticMetalMarkers,
        maskGlovesMarkers,
        electronicWasteMarkers,
        currentPositon,
        setCurrentPosition,
        setMarkerRegion,
        setMarkerPending,
        setIsOpen,
        setPressElectronicWaste,
        setPressGlass,
        setPressMaskGloves,
        setPressOrganicWaste,
        setPressPlasticMetal,
        getGlassMarker,
        getOrganicWasteMarker,
        getPlasticMetalMarker,
        getMaskGlovesMarker,
        getElectronicWasteMarker,
        getButtonInfo,
      }}>
      {children}
    </MarkerContext.Provider>
  );
};
