/*Screen to delete the user*/
import React from 'react';
import { Button, Text, View, Alert } from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_id: '',
    };
  }
  deleteUser = () => {
    var that = this;
    const { input_user_id } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [input_user_id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'สำเร็จ',
              'คุณได้ทำยกเลิกการจองห้องเเล้ว',
              [
                {
                  text: 'ตกลง',
                  onPress: () => that.props.navigation.navigate('Home1'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('กรุณากรอก User_id');
          }
        }
      );
    });
  };

  render() {
    let pic = {
                             uri: 'https://uppic.cc/d/KHa9'
                         };
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Mytextinput
          placeholder="Enter User Id"
          onChangeText={input_user_id => this.setState({ input_user_id })}
          style={{ padding:10 }}
        />
        <Mybutton
          title="ยกเลิกการจองห้อง"
          customClick={this.deleteUser.bind(this)}
        />
        <View style={{ backgroundColor: 'white',marginTop : 10, flex: 9, alignItems: 'center', justifyContent: 'center' }}>

                      <Image source={pic} style={{width: 190, height:220}}/>
      </View></View>
    );
  }
}
