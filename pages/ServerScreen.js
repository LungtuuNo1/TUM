/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import { View ,Linking} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';

//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'GG.db', createFromLocation : 1});



export default class Server extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='room'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS room', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(SizeVARCHAR(50),Detail VARCHAR(50), Price INT(10))',
              []
            );
          }
        }
      );
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <Mytext text="Record" />
        <Mybutton
          title="Data room"
          customClick={() => Linking.openURL('http://2f478ea9.ngrok.io/img/w.PHP')}
        />
        <Mybutton
          title="                  QR code               "
          customClick={() => this.props.navigation.navigate('QR')}
        />


      </View>
    );
  }
}
