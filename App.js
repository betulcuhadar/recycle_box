import { View, Text } from 'react-native';
import React from 'react';
import Navigation from './src/components/Navigation'
import { MarkerContext, MarkerProvider } from './src/context/MarkerContext';
import RNBootSplash from 'react-native-bootsplash'


const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <MarkerProvider>
      <Navigation />
    </MarkerProvider>

  );
};

export default App;