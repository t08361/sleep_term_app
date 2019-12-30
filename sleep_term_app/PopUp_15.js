import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import GetDate_15 from "./GetDate_15"
import {AdMobBanner} from 'expo-ads-admob'

export default function PopUp_15() {
    return ( 
    <View style={styles.container}>
            <View style={styles.times}>
            <GetDate_15 />   
            </View>
            <View style={styles.ad}>
        <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-8242453299394754/9411687449" // Test ID, Replace with your-admob-unit-id
            setTestDeviceIDAsync="SM-N950N"
            //servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError}
                />
                </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        
    },
    times: {
        backgroundColor: '#35477d',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
        alignItems:"center"
    },
    ad: {
        alignItems: "center",
        
    }
})