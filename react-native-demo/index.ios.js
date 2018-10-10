/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableHighlight,
  Alert
} from 'react-native';

const kf5sdk = NativeModules.KF5SDK;

export default class kf5sdkDemo extends Component {

 _callBack(result){
  Alert.alert(result.message);
}

 _init(){
  var param = {
    appId               : "00155bee6f7945ea5aa21c6ffc35f7aa7ed0999d7c6b6029",
    hostName            : "https://tianxiang.kf5.com",
    appName             : "测试公司",
    email               : "demo@qq.com",
    userName            : "test",
    phone               : "",
    verifyUserType      : 1,
    deviceToken         : ""
  };
  kf5sdk.initKF5(param,this._callBack);

  var param1 = {
    navColor            :"#00bffd",
    textColor           :"#FFFFFF",
    centerTextSize      : 22,
    rightTextSize       : 20,
    centerTextVisible   : true,
    rightTextVisible    : false
  };
  kf5sdk.setTopBarColor(param1);
        
  var param2 = {
    custom_fields:[
       {
         "name":"field_11175",
         "value":"12345678901"
       },
       {
         "name":"field_1003031",
         "value":"骑车"
       }
    ]
  };
  kf5sdk.setCustomFields(param2);
 }

 _showDoc(){
  var param = {
      type: 2,
  };
  kf5sdk.showHelpCenter(param);
 }

 _createTicket(){
  kf5sdk.showRequestCreation();
 }

 _showTicketList(){
  kf5sdk.showRequestList();
 }

 _showChat(){
  var metadata = [
      {
        "name":"来源",
        "value":"iOS"
      },
      {
        "name":"应用名称",
        "value":"测试应用"
      }
    ];
                  
  var param = {
    metadata: metadata
  };
  kf5sdk.showChatView(param);

  kf5sdk.noAgentAlertActionBlock(()=>{
    Alert.alert("当前没有在线客服");
  })
 }

 render() {
     this._init();
     return (
       <View style={styles.container}>
         <View style={styles.buttonContainer}>
           <TouchableHighlight style={styles.button}
            underlayColor='green'
             onPress={this._showDoc}>
             <Text style={styles.text}>查看文档</Text>
           </TouchableHighlight>
         </View>
         <View style={styles.buttonContainer}>
           <TouchableHighlight style={styles.button}
            underlayColor='green'
             onPress={this._createTicket}>
               <Text style={styles.text}>创建工单</Text>
            </TouchableHighlight>
         </View>
         <View style={styles.buttonContainer}>
           <TouchableHighlight style={styles.button}
            underlayColor='green'
             onPress={this._showTicketList}>
               <Text style={styles.text}>查看工单列表</Text>
            </TouchableHighlight>
         </View>
         <View style={styles.buttonContainer}>
           <TouchableHighlight style={styles.button}
            underlayColor='green'
             onPress={this._showChat}>
               <Text style={styles.text}>IM对话</Text>
            </TouchableHighlight>
         </View>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonContainer: {
     margin: 30,
   },
   button:{
     padding: 10,
     borderColor: 'blue',
     borderWidth: 1,
     borderRadius: 5,
   },
   text:{
     textAlign:'center',
   }
 })


AppRegistry.registerComponent('kf5sdkDemo', () => kf5sdkDemo);

