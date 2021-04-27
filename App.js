import React,{Component} from 'react'
import {Alert, Modal, StyleSheet, Text, View, Button, Image,TouchableOpacity, Container, ImageBackground, TouchableHighlight} from 'react-native';
import  {AdMobBanner,PublisherBanner,AdMobInterstitial,
  AdMobRewarded,}  from "expo-ads-admob";
import PopUp from './PopUp'
import Accelerate from './accelerator'
import {Linking} from 'expo'
import accelerate from './accelerator';

export default class App extends React.Component {

  setAd=(visible)=> {
    if (visible) {
      this.adInterstitial();
    }
  }
  adInterstitial = async () => {
    await AdMobRewarded.setAdUnitID('ca-app-pub-8242453299394754/1934814495'); // Test ID, Replace with your-admob-unit-id
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  }
  //위에 까지가 동영상광고 관련 
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  bannerError() {
    Alert.alert("오류가 생겼으니 앱을 껐다켜주세요.")
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
          
          <View style={styles.button} /*버튼들의 모임*/ >
          <View style={styles.button_time}>
            <TouchableOpacity style={styles.button1} onPress={() => { this.setModalVisible(true) }}>
              <Text style={styles.button_time1}>
                수면주기
              </Text>
            </TouchableOpacity>
            </View>
        
          <View style={styles.button_time}>
            <TouchableOpacity style={styles.button1} onPress={() => Linking.openURL('mailto:jofficial1@naver.com')}>
              <Text style={styles.button_time1}>
                피 드 백
              </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.button_time}>
            <TouchableOpacity style={styles.button1} onPress={() => Linking.openURL('https://t08361.github.io/mongdang')}>
              <Text style={styles.button_time1}>
                몽 당
              </Text>
            </TouchableOpacity>
          </View>
            <View style={styles.button_time}>
            <TouchableOpacity style={styles.button1} onPress={() => { this.setAd(true) }}>
              <Text style={styles.button_time1}>
                광고
              </Text>
            </TouchableOpacity>
            </View>
        </View>
          <View style={styles.empty}>
          <TouchableOpacity style={styles.reward_btn}> 
            <Text style={styles.reward_text}></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.adbanner}>
        </View>
          <View style={styles.last}>
            <Text style={styles.lastinfo}></Text>
        </View>
            </ImageBackground>
      </View>

    );
  }
}
        /*
        <View style={styles.button_time}>
            <TouchableOpacity style={styles.button1} onPress={() => Linking.openURL('https://t08361.github.io/mongdang')}>
              <Text style={styles.button_time1}>
                몽 당
              </Text>
            </TouchableOpacity>
          </View>
        <View style={styles.adbanner}>
          <AdMobBanner style={styles.adbanner1}
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-8242453299394754/9411687449" // Test ID, Replace with your-admob-unit-id
            setTestDeviceIDAsync="SM-N950N"
            //servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError}
          />
        </View>
        <View style={styles.last}><Text style={styles.lastinfo}>
         이용 약관ㅣ개인정보처리방침ㅣ법적 정보    .MongDang   Corp.</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.header_text}></Text>
        </View>
        <View style={styles.accelerate}>
              <Accelerate />
            </View>*/
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#263f44",
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      marginTop:40,
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
  reward: {
      flex:0.1
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
      flex: 1,
      
  },
  button1: {
    marginTop: 1,
    marginLeft: 12,
    marginRight: 14,
    paddingLeft: 35,
    paddingVertical:1,
    
    },
  button_time: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    
  },
  button_time1:{
    paddingHorizontal: 18,
    paddingVertical: 10,
    
    fontSize: 21,
    fontWeight:'bold',
    color: '#132743',
    backgroundColor: "#e8e8e8",//#015668
    borderBottomLeftRadius: 30,
	  borderBottomRightRadius: 30,
	  borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "relative",
    marginTop: 7,
    marginLeft: 12,
    marginRight: 140,
    alignContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
    last: {
      borderRadius: 0,
      padding: 5,
      marginBottom: 5,
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      flex:1
  },
  empty: {
      
    },
    adbanner: {
      alignItems: "center",
      bottom:0,
      flex:0.1
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