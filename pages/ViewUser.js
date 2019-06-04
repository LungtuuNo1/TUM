/*Screen to view single user*/
import React from 'react';
import { Text, View, Button } from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class ViewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_id: '',
      userData: '',
    };
  }
  searchUser = () => {
    const { input_user_id } = this.state;
    console.log(this.state.input_user_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [input_user_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            this.setState({
              userData: results.rows.item(0),
            });
          } else {
            alert('No user found');
            this.setState({
              userData: '',
            });
          }
        }
      );
    });
  };
  render() {
            let pic = {
                           uri: 'https://uppic.cc/d/KHax'
                       };
    return (
      <View style={{ backgroundColor: 'white',marginTop : 10, flex: 9, alignItems: 'center', justifyContent: 'center' }}>

              <Image source={pic} style={{width: 350, height:310}}/>
        <Mytextinput
          placeholder="Enter User Id"
          onChangeText={input_user_id => this.setState({ input_user_id })}
          style={{ padding:10 }}
        />
        <Mybutton
          title="Search User"
          customClick={this.searchUser.bind(this)}
        />
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>**USER ID**: {this.state.userData.user_id}</Text>
          <Text>**USERNAME**: {this.state.userData.user_name}</Text>
          <Text>**SIZE ROOM**: {this.state.userData.user_contact}</Text>
          <Text>**DATE/TIME**: {this.state.userData.user_address}</Text>
        </View>
      </View>
    );
  }
}