import React,{Component} from 'react'
import {Alert, Modal, StyleSheet, Text, View, Button, Image,TouchableOpacity, Container, ImageBackground, TouchableHighlight} from 'react-native';
import  {AdMobBanner,AdMobInterstitial,PublisherBanner,AdMobRewarded}  from "expo-ads-admob";
import PopUp from './PopUp'
import Accelerate from './accelerator'
import {Linking} from 'expo'
import accelerate from './accelerator';

export default class App extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  bannerError() {
    Alert.alert("We have some problem")
  }
  
  render() {
    /*m.add(1, 'day').calendar()
    var tomorrow = m.format('YYYY년MM월DD일 hh시mm분')*/
    return (
      <View style={styles.container}>
         <ImageBackground 
            	style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
                source={require("./assets/background.png")}  //이미지경로
                resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                >
        <View style={styles.reward}>
        </View>
      
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
          <View style={{backgroundColor:"black"}}>
          <TouchableOpacity style={styles.exit_all}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
          }}>
          <Image
            style={styles.exit}
            source={require('./assets/exit.png')}
          />
          </TouchableOpacity>
          <PopUp style={styles.pop} />
          </View>
          </Modal>
        
          <View style={styles.button}>
          <View style={styles.button_time}>
            <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
              <Text style={styles.button_time1}>
                수면주기
              </Text>
            </TouchableOpacity>
            </View>
          <View style={styles.button_time}>
            <TouchableOpacity onPress={() => Linking.openURL('https://t08361.github.io/mongdang')}>
              <Text style={styles.button_time1}>
                몽 당
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_time}>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:jofficial1@naver.com')}>
              <Text style={styles.button_time1}>
                피 드 백
              </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.accelerate}>
              <Accelerate />
            </View>
        </View>
          <View style={styles.empty}>
          <TouchableOpacity style={styles.reward_btn}> 
            <Text style={styles.reward_text}></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.adbanner}>
          <AdMobBanner style={styles.adbanner1}
            bannerSize="banner"
            adUnitID="ca-app-pub-8242453299394754/9411687449" // Test ID, Replace with your-admob-unit-id
            setTestDeviceIDAsync="SM-N950N"
            //servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError}
          />
        </View>
        <View style={styles.last}><Text style={styles.lastinfo}>
         이용 약관ㅣ개인정보처리방침ㅣ법적 정보    .MongDang   Corp.</Text>
        </View>
            </ImageBackground>
      </View>

    );
  }
}
        /*
        <View style={styles.header}>
          <Text style={styles.header_text}></Text>
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
      flex: 0.4,
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
    marginBottom:5  
  },
  reward_btn: {
    position: "relative",
    marginBottom: 40,
    marginTop:0
  },
  reward_text: {
    fontSize:20
  },
    button: {
      flex: 0.35,
      flexDirection: 'row',
  },
  button_time: {
    padding:5
  },
  button_time1:{
    paddingHorizontal: 15,
    paddingVertical: 45,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    fontSize: 22,
    color: '#ff896b',
    backgroundColor: "#015668",
    borderRadius: 12,
    position: "relative",
    marginTop: 200,
            marginLeft: 0,
            marginRight: 0
  },
    last: {
      borderRadius: 0,
      padding: 5,
      marginBottom: 5,
      alignItems: "center",
      position: "absolute",
      bottom:0
  },
  empty: {
      flex:0.3
    },
    adbanner: {
      alignItems: "center",
      bottom:-290
      
  },
  adbanner1: {
    alignItems: "center",
    bottom:45
    
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
      
  },
  alarm: {
    color: 'white',
    fontSize: 20,
    alignItems:'center'
  },
  accelerate: {
    alignItems: 'center',
    position: "absolute",
  }
  });
  
  /*
  backgroundColor:'#263f44',

  <PublisherBanner
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
/*
====배너광고===
<PublisherBanner
        //bannerSize="mediumRectangle"
        //adUnitID="ca-app-pub-8242453299394754/9411687449" // Test ID, Replace with your-admob-unit-id
        //setTestDeviceIDAsync="SM-N950N"
        //onDidFailToReceiveAdWithError={this.bannerError}
        //onAdMobDispatchAppEvent={this.adMobEvent}
      />*/