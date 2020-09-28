import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';
import { Linking } from 'expo'
import moment from 'moment';

export default class GetDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
      };
  }
  componentDidMount() {
    let that = this;
    let m = moment();
    /*var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes*/
    //var sec = new Date().getSeconds(); //Current Seconds
    /*that.setState({
      //Setting the value of the date time
      date: `${hours}` + ':' + `${min}`
      //`${hours < 12 && min < 30 ? (): ${ hours > 12 || min > 30 ? (): ()} }`
    })*/
    /*that.setState({
        //Setting the value of the date time
      date_1 :  ( hours > 12 ) ? `0${hours-12}` : hours + ':' + min > 30 ? min-30 : min
           // `${hours-12-12+1}` + ':' + `${min+30}`
    })*/
    let time00 = m.format('YYYY. MM. DD. dddd hh:mm')
  that.setState({
    //Setting the value of the date time
    date_00:
        `${time00}`
  })
    m.add(1, 'day').calendar()
    let time0 = m.format('YYYY. MM. DD. dddd')
  that.setState({
    //Setting the value of the date time
    date_0:
        `${time0}`
  })
      m.add(1, 'hour').calendar()
      m.add(30, 'minute').calendar()
      var time1 = m.format('hh : mm')
    that.setState({
      //Setting the value of the date time
      date_1:
          `${time1}`
    })
      m = moment()
      m.add(3, 'hour').calendar()
    var time2 = m.format('hh : mm')
    that.setState({
      //Setting the value of the date time
      date_2:
          `${time2}`
    })
      m = moment()
      m.add(4, 'hour').calendar()
      m.add(30, 'minute').calendar()
      var time3 = m.format('hh : mm')
    that.setState({
        //Setting the value of the date time
        date_3:
            `${time3}`
    })
      m = moment()
      m.add(6, 'hour').calendar()
      var time4 = m.format('hh : mm')
    that.setState({
        //Setting the value of the date time
        date_4:
            `${time4}`
    })
      m = moment()
      m.add(7, 'hour').calendar()
      m.add(30, 'minute').calendar()
      var time5 = m.format('hh : mm')
    that.setState({
        //Setting the value of the date time
        date_5:
            `${time5}`
    })
      m = moment()
      m.add(9, 'hour').calendar()
      var time6 = m.format('hh : mm')
    that.setState({
      //Setting the value of the date time
      date_6:
          `${time6}`
    })
  }
  render() {
    return (
      <View>
        <View>
        <Text style={styles.mainText}>
            
        </Text>
        </View>
        <View style={styles.time}>
        <Text style={styles.time_2, styles.text}>
            `하루 열심히 보내고 누워서 힘 쭉 빼고 자자`
        </Text>
        <Text style={styles.time_3, styles.tomorrow}>
            내일
        </Text>
        <Text style={styles.time_3, styles.tomorrow}>
            {this.state.date_0}
        </Text>
        <Text style={styles.time_3, styles.eachTime}>
          *   {this.state.date_1}    1h30
        </Text>
        <Text style={styles.time_3, styles.eachTime}>
          *   {this.state.date_2}    3h00
        </Text>
        <Text style={styles.time_3, styles.eachTime}>
          *   {this.state.date_3}    4h30
        </Text>
        <Text style={styles.time_4, styles.eachTime}>
          *   {this.state.date_4}    6h00
        </Text>
        <Text style={styles.time_5, styles.eachTime}>
          *   {this.state.date_5}    7h30
          </Text>
          <Text style={styles.time_6, styles.eachTime}>
          *   {this.state.date_6}    9h00
          </Text>
          <Text></Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://apps.samsung.com/appquery/appDetail.as?appId=com.sec.android.app.clockpackage')}>
            <Text style={styles.alarm}>
              
              알림 맞추러 가기(클릭)
            </Text>
            <Text></Text>
          </TouchableOpacity>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainText: {
    
  },
  time: {
    alignItems:"center"
  },
  eachTime: {
    color:"pink",
    fontSize: 23,
    padding: 5,
    margin: 10,
    fontWeight:"bold"
  },
  tomorrow: {
    color:"#edc988",
    fontSize: 18,
    padding: 1,
    margin: 5,
    marginBottom:1,
    fontWeight:"bold"
  },
  text: {
    color: "#ecf4f3",
    fontSize: 19,
    padding: 2,
    
  },
  alarm: {
    color: "white",
    fontSize: 17,
  }
})
/*constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
      };
      
  }
  componentDidMount() {
    var that = this;
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    //var sec = new Date().getSeconds(); //Current Seconds
    /*that.setState({
      //Setting the value of the date time
      date: `${hours}` + ':' + `${min}`
      //`${hours < 12 && min < 30 ? (): ${ hours > 12 || min > 30 ? (): ()} }`
    })*/
    /*that.setState({
        //Setting the value of the date time
      date_1 :  ( hours > 12 ) ? `0${hours-12}` : hours + ':' + min > 30 ? min-30 : min
           // `${hours-12-12+1}` + ':' + `${min+30}`
    })*/
    /*that.setState({
      //Setting the value of the date time
      date_2:
          `${hours-12-12+3}` + ':' + `${min}`
  })
  that.setState({
      //Setting the value of the date time
      date_3:
          `${hours-12-12+4}` + ':' + `${min+30}`
  })
  that.setState({
      //Setting the value of the date time
      date_4:
          `${hours-12-12+6}` + ':' + `${min}`
  })
  that.setState({
      //Setting the value of the date time
      date_5:
          `${hours-12-12+7}` + ':' + `${min+30}`
  })
  that.setState({
    //Setting the value of the date time
    date_6:
        `${hours-12-12+9}` + ':' + `${min}`
  })
  that.setState({
    //Setting the value of the date time
    date_7: 
        `${hours-12-12+10}` + ':' + `${min+30}`
  });
}*/