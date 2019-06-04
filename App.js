import {Component1} from 'react';
import {Platform, StyleSheet, Text, View,Button,ToastAndroid, Dimensions, ViewPagerAndroid, Alert,
 ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import {Greeting } from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import LoginScreen from './pages/LoginScreen';
import Home1 from './pages/Home1';
import RegisterScreen from './pages/RegisterScreen';
import SizeScreen from './pages/SizeScreen';
import ServerScreen from './pages/ServerScreen';
import QR from './pages/QR';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#FF1493' },
      headerTintColor: '#ffffff',

    },
  },
  ViewUser: {
    screen: ViewUser,
    navigationOptions: {
      title: 'ต้นหาข้อมูลรายการจองห้อง',
      headerStyle: { backgroundColor: '#FF1493' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAllUser: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'แสดงรายการจองห้องทั้งหมด',
      headerStyle: { backgroundColor: '#FF1493' },
      headerTintColor: '#ffffff',
    },
  },
  UpdateUser: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'แก้ไขข้อมูลการจองห้อง',
      headerStyle: { backgroundColor: '#FF1493' },
      headerTintColor: '#ffffff',
    },
  },
  RegisterUser: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'จองห้อง',
      headerStyle: { backgroundColor: '#FF1493' },
      headerTintColor: '#ffffff',
    },
  },
  DeleteUser: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'ลบข้อมูลการจองห้อง',
      headerStyle: { backgroundColor: '#FF1493' },
      headerTintColor: '#ffffff',
    },
  },
   LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'LOGIN',
        headerStyle: { backgroundColor: '#FF1493' },
        headerTintColor: '#ffffff',
      },
    },
Home1: {
      screen: Home1,
      navigationOptions: {
        title: 'MENU',
        headerStyle: { backgroundColor: '#FF1493' },
        headerTintColor: '#ffffff',
      },
    },
RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'Register',
        headerStyle: { backgroundColor: '#FF1493' },
        headerTintColor: '#ffffff',
      },
    },
SizeScreen: {
      screen: SizeScreen,
      navigationOptions: {
        title: 'Review Room',
        headerStyle: { backgroundColor: '#FF1493' },
        headerTintColor: '#ffffff',
      },
    },
ServerScreen: {
          screen: ServerScreen,
          navigationOptions: {
            title: 'Server/QR Code',
            headerStyle: { backgroundColor: '#FF1493' },
            headerTintColor: '#ffffff',
          },
        },
QR : {
      screen: QR,
      navigationOptions: {
        title: 'QR code',
        headerStyle: { backgroundColor: '#FF1493' },
        headerTintColor: '#ffffff',
      },
    },

});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);

