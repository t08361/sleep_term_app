import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
export default class GetDate_15 extends Component {
  constructor(props) {
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
    that.setState({
      //Setting the value of the date time
      date:
            `${hours-12-12}` + ':' + `${min}`
    })
    that.setState({
        //Setting the value of the date time
        date_1:
            `${hours-12-12+1}` + ':' + `${min+30}`
    })
    that.setState({
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
  }
  render() {
    return (
      <View>
        <View>
        <Text style={styles.mainText}>
            
        </Text>
        </View>
        <View style={styles.time}>
            <Text style={styles.time_1, styles.eachTime}>
         -{this.state.date_1}-
            </Text>
        <Text style={styles.time_2, styles.eachTime}>
        -{this.state.date_2}-
        </Text>
        <Text style={styles.time_3, styles.eachTime}>
          -{this.state.date_3}-
        </Text>
        <Text style={styles.time_4, styles.eachTime}>
          -{this.state.date_4}-
        </Text>
        <Text style={styles.time_5, styles.eachTime}>
          -{this.state.date_5}-
          </Text>
          <Text style={styles.time_6, styles.eachTime}>
          -{this.state.date_6}-
          </Text>
          <Text style={styles.time_7, styles.eachTime}>
          -{this.state.date_7}-
          </Text>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainText: {

  },
  time: {
  },
  eachTime: {
    color:"white",
    fontSize: 40,
    padding: 7,
    margin: 10,
    fontWeight:"bold"
  }
})