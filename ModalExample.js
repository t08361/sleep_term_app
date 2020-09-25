import React,{Component} from 'react';
import { Modal,StyleSheet, Text, View, Button, TouchableOpacity,Container,ImageBackground, TouchableHighlight } from 'react-native';



export default class ModalExample extends Component {
    state = {
      modalVisible: false,
    };
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  
    render() {
      return (
        <View style={{marginTop: 22}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>30분후 취침 시 수면주기에 맞게 내일 일어나면 좋을 시간</Text>
  
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>X</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
  
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>30분후</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
  
