import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import GetDate from "./GetDate"
import PhoneUse from "./PhoneUse"
import {AdMobBanner} from 'expo-ads-admob'

export default function PopUp_15() {
    return ( 
    <View style={styles.container}>
            <View style={styles.times}>
            <GetDate />   
            </View>
            <View style={styles.ad}>
        <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-8242453299394754/2639099805" // Test ID, Replace with your-admob-unit-id
            setTestDeviceIDAsync="SM-N950N"
            //servePersonalizedAds // true or false
            DidFailToReceiveAdWithError={this.bannerError}
                />
            </View>
            <View>
                <Text style={styles.empty}></Text>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    times: {
        backgroundColor: '#35477d',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
        alignItems: "center",
        
    },
    ad: {
        alignItems: "center",
        
        
    },
    empty: {
        backgroundColor: "black",
        margin:100
    }
})