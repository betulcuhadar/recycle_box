import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native'
import React from 'react'
import { Card } from 'react-native-shadow-cards';


const MarkerScreen = ({ route: { params } }) => {
  const { text } = params;
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
      <View style={{ wrapper: '80%' }}>
        <Text style={styles.adress}>Adres</Text>

        <Card style={{ padding: 2, margin: 15, }}>
          <Text style={styles.input}>{text}</Text>
        </Card>
        <Image
          style={styles.image}
          source={require('../assets/images/gorselyok2.png')}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
          //onPress={()=>this.moveToAddNewCustomer()}
          >
            <Image
              style={styles.buttonLeft}
              source={require('../assets/images/full.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              style={styles.buttonRight}
              source={require('../assets/images/nobox.png')}
            />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  adress: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  input: {
    fontSize: 20,
    width: "auto",
    marginStart: 10,
    textAlign: 'left',
  },
  inputsaat: {
    fontSize: 10,
    width: "auto",
    textAlign: 'right',
  },
  buttonLeft: {
    resizeMode: 'contain',
    width: 150,
    height: 170,
    marginLeft: 30,
  },
  buttonRight: {
    resizeMode: 'contain',
    width: 150,
    height: 170,
    marginLeft: 30,
  },
  image: {
    width: "auto",
    minWidth: 50,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    maxHeight: 170,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 9,

  },
  user: {
    margin: 3,
    height: 25,
    width: 25
  }


});

export default MarkerScreen