import React,{Component} from 'react'
import {Alert, Modal, StyleSheet, Text, View, Button, Image,TouchableOpacity, Container, ImageBackground, TouchableHighlight} from 'react-native';
import  {AdMobBanner,AdMobInterstitial,PublisherBanner,AdMobRewarded}  from "expo-ads-admob";
import PopUp_15 from './PopUp_15'

export default class App extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  bannerError() {
    alert("error")
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>수면 주기</Text>
        </View>
        <View style={styles.contents}>
          <Text>     </Text>
        </View>
      
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <TouchableOpacity style={styles.exit_all}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Image
                 style={styles.exit}
                 source={require('./exit.png')}
                />
            </TouchableOpacity>
            <PopUp_15 style={styles.pop} />
        </Modal>
          <View style={styles.button}>
          <View style={styles.button_time}>
            <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
              <Text style={styles.button_time1}>PUSH</Text>
            </TouchableOpacity>
          </View>
          </View>
        <View style={styles.adbanner}>
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-8242453299394754/9411687449" // Test ID, Replace with your-admob-unit-id
            setTestDeviceIDAsync="SM-N950N"
            //servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError}
          />
          <PublisherBanner
            bannerSize="mediumRectangle"
            adUnitID="ca-app-pub-8242453299394754/9411687449" // Test ID, Replace with your-admob-unit-id
            setTestDeviceIDAsync="SM-N950N"
            onDidFailToReceiveAdWithError={this.bannerError}
            //onAdMobDispatchAppEvent={this.adMobEvent}
          />
        </View> 
        </View>
    );
  }
}

         /*<View style={styles.last}><Text style={styles.lastinfo}>
          이용 약관 ㅣ 개인정보처리방침 ㅣ 법적 정보   .JYJ  Corp.</Text>
        </View>*/
const styles = StyleSheet.create({
  container: {
      flex: 1,
    backgroundColor: "#263f44",
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      marginTop:40,
      flex: 0.7,
      backgroundColor: "#263f44",
      borderRadius: 7,
      padding: 5,
    },
    header_text: {
      fontWeight:"bold",
      color: '#ff896b',
      alignItems: 'center',
      fontSize: 43,
    justifyContent: 'center',
      padding: 6,
    marginBottom:22
    },
    contents: {
      flex: 0.6,
        
    },
    button: {
      flexDirection: 'row',
      backgroundColor:'#015668',
      flex: 1,
      borderRadius: 800,
      marginBottom:8
    },
    button_time:{
      margin: 7,
      color: 'white',
      alignItems: 'center',
      justifyContent:'center'
    
  }  ,
  button_time1:{
    padding: 30,
    fontSize:33,
    color: '#ff896b',
    backgroundColor: "#015668",
    borderRadius: 40,
  },
    last: {
      flex: 1,
      backgroundColor: 'black',
      borderRadius: 10,
      padding: 5,
      marginBottom: 5,
    },
    adbanner: {
      flex: 2.3,
      backgroundColor: "#263f44",
      alignItems: "center",
      
    },
    lastinfo: {
      color: 'white',
      marginTop:2
  },
  pop: {
     backgroundColor:"black" 
    },
    exit: {
      margin: 10,
      width: 50,
      height: 50,
    },
    exit_all: {
      alignItems: 'center',
      justifyContent:"center"
      
    }
  });
  
  /*<PublisherBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            setTestDeviceIDAsync="SM-N950N"
            onDidFailToReceiveAdWithError={this.bannerError}
            //onAdMobDispatchAppEvent={this.adMobEvent}
          />
          <PublisherBanner  
            bannerSize="fullBanner"  
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            setTestDeviceIDAsync="SM-N950N"
            onDidFailToReceiveAdWithError={this.bannerError}
            //onAdMobDispatchAppEvent={this.adMobEvent}
          />
  /*<TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
<Text style={styles.button_time}>30분후</Text>
</TouchableHighlight>     
<TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
<Text style={styles.button_time}>60분후</Text>
</TouchableHighlight>
<TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
<Text style={styles.button_time}>90분후</Text>
</TouchableHighlight>*/
    
    
    /*`-o- 수면 후 첫 논렘90분이 가장 중요하다.

    -o- 수면에는 논렘수면, 렘수면으로 나뉜다.

    -o- 렘수면은 급속 안구 운동 상태로 뇌는
    깨어있고 몸은 자고 있는 상태다.
    
    -o- 논렘수면은 렘수면과 반대이다.

-o- 렘수면 상태에서 깨기위해 20분 
   간격으로 알람을 맞혀준다.

-o- 잠자기 90분 전 부터는 전자기기 사용을
   줄여 뇌가 쉬도록 돕는다.

-o- 수면주기는 대략 70분~90분사이이고
   하루 4회~6회의 주기로 수면을 취한다.

-o- 신체온도를 낮춰 숙면하기 좋게 한다. `}*/