/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import {Component1} from 'react';
import {Platform, StyleSheet, Text, View,Button,ToastAndroid, Dimensions, ViewPagerAndroid, Alert, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import {Greeting } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user( user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20) , user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }

  render() {
      let pic = {
            uri: 'https://uppic.cc/d/KF7Q'
            };

    return (

      <View style={{ marginTop : 10, flex: 9, alignItems: 'center', justifyContent: 'center' ,flex: 1,
                   backgroundColor: 'white',flexDirection: 'column',}}>

       <Image source={pic} style={{width: 250, height:200}}/>


        <Mytext text="FUNCTIONS." />
         <Mybutton
                  title="             รีวิวห้อง             "
                  customClick={() => this.props.navigation.navigate('SizeScreen')}
                />
        <Mybutton
          title="             จองห้อง             "
          customClick={() => this.props.navigation.navigate('RegisterUser')}
        />
        <Mybutton
          title=" แก้ไขข้อมูลการจองห้อง "
          customClick={() => this.props.navigation.navigate('UpdateUser')}
        />
        <Mybutton
          title=" ค้นหาข้อมูลการจองห้อง "
          customClick={() => this.props.navigation.navigate('ViewUser')}
        />
        <Mybutton
          title="ข้อมูลการจองห้องทั้งหมด"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="      ยกเลิกการจองห้อง      "
          customClick={() => this.props.navigation.navigate('DeleteUser')}
        />
      </View>
    );
  }
}

