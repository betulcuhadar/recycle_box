import { View, Text, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen';
import MarkerScreen from '../screens/MarkerScreen';
import { Icon } from 'react-native-vector-icons/Icon';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: 'Recycle Map', headerStyle: { backgroundColor: '#ADD292' }, headerTintColor: 'white',

            headerLeft: () => (


              <Image
                style={{ paddingLeft: 10, width: 50, height: 40 }}

                source={require('../assets/images/appicon.png')}
                size={25}
              />

            ),
          }}



        />
        <Stack.Screen name="Marker" component={MarkerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
