import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


const LoadingAnimation = () => {

    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>

            <LottieView source={require('../src/assets/images/loadingIndicator.json')}
                autoPlay loop
            />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1,
    },
});

export default LoadingAnimation;