import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { AdMobBanner } from 'react-native-admob'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>숙면의 시작과 끝</Text>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="your-admob-unit-id"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
      <View>
        <TouchableOpacity>
          <Text style={styles.button_time}>30분후</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.button_time}>60분후</Text>
        </TouchableOpacity>    
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.button_time}>90분후</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 220,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily:'Roboto'
  },
  button_time: {
    color:'white',
    backgroundColor: '#FFC37B',
    padding: 26,
    borderRadius: 23,
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
