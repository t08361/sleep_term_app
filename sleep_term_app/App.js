import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>자기관리 끝판왕</Text>

      <Text style={styles.contents}>
        {
`-o- 수면 후 첫 논렘90분이 가장 중요하다. 

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
 
 -o- 신체온도를 낮춰 숙면하기 좋게 한다. `}
      </Text>

      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.button_time}>30분후</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button_time}>60분후</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button_time}>90분후</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.last}><Text style={styles.lastinfo}>이용 약관 ㅣ 개인정보처리방침 ㅣ 법적 정보   .JYJ  Corp.</Text></View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#410E02',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop:27,
    flex: 0.088,
    backgroundColor:'#232323',
    fontSize: 30,
    color: 'white',
    borderRadius: 10,
    padding: 5,
    marginBottom:5
  },
  contents: {
    flex: 1,
    backgroundColor: '#440739',
    color:'#B6B673',
    borderRadius: 20,
    padding: 5,
    marginBottom: 5,
    fontSize: 20,   
  },
  button: {
    flexDirection: 'row',
    backgroundColor:'#5F024E',
    flex: 0.13,
    borderRadius: 10,
    padding: 2,
    marginBottom: 125,
  },
  button_time: {
    color:'#F67CE0',
    backgroundColor: '#910477',
    padding: 11,
    borderRadius: 13,
    margin: 5,
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal:10
  },
  last: {
    flex: 0.04,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
  },
  lastinfo: {
    color: 'white',
    marginTop:2
  }
});
