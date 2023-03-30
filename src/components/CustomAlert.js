import React, { useState } from 'react';

import { Modal, Text, View, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomAlert({
    displayMode,
    displayMsg,
    visibility,
    dismissAlert,
}) {
    return (
        <View>
            <Modal
                visible={visibility}
                animationType={'fade'}
                transparent={true}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(52, 52, 52, 0.3)',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: 230,
                            width: '85%',
                            borderRadius: 20,
                        }}>
                        <View style={{ alignItems: 'center', marginRight: 70, marginLeft: 30, marginTop: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ height: 93, width: 62, marginLeft: 50, marginRight: 10 }}
                                    source={require('../assets/images/mavikutu.png')}
                                />
                                <Text style={{
                                    fontSize: 22, marginTop: 5, marginLeft: 10, marginStart: 10, fontFamily: "Avenir",
                                    fontWeight: 'bold',
                                }}>{displayMsg}</Text>


                            </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => dismissAlert(false)}
                                style={{
                                    backgroundColor: '#E4484F',
                                    borderRadius: 20,
                                    borderColor: '#E4484F',
                                    marginTop: 25,
                                    marginBottom: 52,
                                    borderWidth: 2,
                                    marginLeft: 25,
                                    marginRight: 15,
                                    marginHorizontal: 5,
                                    flex: 1,
                                }
                                }>
                                <Text style={{
                                    color: 'white', margin: 15, fontSize: 25,
                                    color: '#ECF0F9',
                                    fontWeight: "600", alignSelf: "center",
                                    fontFamily: "Avenir",
                                }}>HAYIR</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => dismissAlert(false)}
                                style={{
                                    backgroundColor: '#73A64D',
                                    borderRadius: 20,
                                    borderColor: '#73A64D',
                                    marginTop: 25,
                                    marginBottom: 52,
                                    borderWidth: 2,
                                    marginLeft: 15,
                                    marginRight: 30,
                                    marginHorizontal: 5,
                                    flex: 1,
                                }
                                }>
                                <Text style={{
                                    margin: 15, color: 'white', fontSize: 25,
                                    alignSelf: "center",
                                    color: '#ECF0F9',
                                    fontWeight: "600",
                                    fontFamily: "Avenir"
                                }}>EVET</Text>
                            </TouchableOpacity>

                        </View>


                    </View>
                </View>
            </Modal >
        </View >
    );

}