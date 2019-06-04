import React, {Component} from 'react';
import {Component1} from 'react';
import {Platform, StyleSheet, Text, View,Button,ToastAndroid, Dimensions, ViewPagerAndroid, Alert, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { AppRegistry, Image, WebView,Linking } from 'react-native';
import {Greeting } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class SizeScreen extends React.Component {
  render() {
    let pic1 = {
          uri: 'https://uppic.cc/d/KFzm'
    };
    let pic2 = {
          uri: 'https://uppic.cc/d/KFzH'
    };
    let pic3 = {
          uri: 'https://uppic.cc/d/KFzj'
    };


    return (


                 <View style={{ marginTop : 4, flex : 1, alignItems : "center" }}>
                 <ViewPagerAndroid initialPage={ 0 }
                  style={{ flex : 1, width : "100%", height : 100 }}>
                  <View style={{ alignItems : "center", padding : 10 }}>

                  <Image source={pic1} style={{width: 350, height: 250}}/>
                   <Text style={{ fontSize : 15 }}>
                   <Text style={{fontSize:17}}>อุปกรณ์</Text>{"\n"}
                         กลอง,กีต้าร์,เบส{"\n"}
                   <Text style={{fontSize:0.01}}></Text>{"\n"}
                   <Text style={{fontSize:17}}>ราคา</Text>{"\n"}
                    ชั่วโมงละ 500 {"\n\n"}
                   <Text style={{fontSize:0.01}}></Text>{"\n"}
                   <Text style={{fontSize:17}}>ขนาดห้อง</Text>{"\n"}
                          S {"\n\n"}
                   </Text></View>

                  <View style={{ alignItems : 'center', padding : 10 }}>
                  <Image source={pic2} style={{width: 350, height: 250}}/>
                   <Text style={{ fontSize : 15 }}>
                   <Text style={{fontSize:17}}>อุปกรณ์</Text>{"\n"}
                         กลอง,กีต้าร์ 2,เบส 2 ตัว{"\n"}
                   <Text style={{fontSize:0.01}}></Text>{"\n"}
                   <Text style={{fontSize:17}}>ราคา</Text>{"\n"}
                    ชั่วโมงละ 700{"\n"}
                   <Text style={{fontSize:0.01}}></Text>{"\n"}
                   <Text style={{fontSize:17}}>ขนาดห้อง</Text>{"\n"}
                          M{"\n\n"}
                   </Text></View>

                  <View style={{ alignItems : 'center', padding : 10 }}>
                  <Image source={pic3} style={{width: 350, height: 300}}/>
                   <Text style={{ fontSize : 15 }}>
                   <Text style={{fontSize:17}}>อุปกรณ์</Text>{"\n"}
                          กลอง,กีต้าร์ 2,เบส 2 ตัว,คีบอร์ด{"\n"}
                   <Text style={{fontSize:0.01}}></Text>{"\n"}
                   <Text style={{fontSize:17}}>ราคา</Text>{"\n"}
                    ชั่วโมงละ 900{"\n\n"}
                   <Text style={{fontSize:0.01}}></Text>{"\n"}
                   <Text style={{fontSize:17}}>ขนาดห้อง</Text>{"\n"}
                           L {"\n\n"}
                   </Text></View>




                </ViewPagerAndroid>
              <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
              </View></View>

            );
          }
        }



