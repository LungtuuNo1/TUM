import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'GG.db' });

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_contact: '',
      user_address: '',
    };
  }

  register_user = () => {
    var that = this;
    const { user_name } = this.state;
    const { user_contact } = this.state;
    const { user_address } = this.state;
    //alert(user_name, user_contact, user_address);
    if (user_name) {
      if (user_contact) {
        if (user_address) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
              [user_name, user_contact, user_address],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                  'สำเร็จ',
                    'กด OK เพื่อเข้าหน้า LOGIN',

                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('LoginScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('เกิดข้อผิดพลาดกรุณาทำรายการใหม่');
                }
              }
            );
          });
        } else {
          alert('***กรุณากรอก Password อีกครั้ง***');
        }
      } else {
        alert('***กรุณากรอก Password***');
      }
    } else {
      alert('***กรุณากรอกเวลา Username***');
    }
  };

  render() {
        let pic = {
               uri: 'https://uppic.cc/d/KHbZ'
           };
    return (
      <View style={{ backgroundColor: 'white',marginTop : 10, flex: 9, alignItems: 'center', justifyContent: 'center' }}>

        <Image source={pic} style={{width: 350, height:250}}/>

        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Username                                                           "
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Password"
              onChangeText={user_contact => this.setState({ user_contact })}
              maxLength={10}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Submit Password"
              onChangeText={user_address => this.setState({ user_address })}
              maxLength={10}
              style={{ padding:10 }}
            />

            <Mybutton
              title="Register"
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}