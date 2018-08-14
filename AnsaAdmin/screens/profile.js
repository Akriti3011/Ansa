import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Keyboard,
  TouchableHighlight,
  Button,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavTab from '../components/navTab';

import { TextField } from 'react-native-material-textfield';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants  from '../components/constants';
const ipAddr = Constants.ipAddr;

class ProfileScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      token:'',
       userEmail:'',
       isSuperAdmin:''
    };
  }
  static navigationOptions = {
    header: null,

  };

  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var userToken = await AsyncStorage.getItem('userToken');
    var userEmail = await AsyncStorage.getItem('userEmail');
    var isSuperAdmin = await AsyncStorage.getItem('isSuperAdmin');
    this.setState({token:userToken,userEmail:userEmail, isSuperAdmin:isSuperAdmin});
  }

 

  logout = ()=>{
    const { token } = this.state;
    
     var formData = new FormData();
     
    //AsyncStorage.removeItem('userToken');
     formData.append('token',token);
     
     fetch(ipAddr+'/api/logout',{
      method:"GET",
      headers:{
        Accept:'application/json',
        //'Content-Type':'multipart/form-data',
        Authorization: 'Bearer ' + token,
        //'Content-Type':'application/json'
      }
      
          }).then((response) => response.json())
    
    .then((responseJsonData) =>{
      //console.log(responseJsonData);
       if(responseJsonData.success){
        AsyncStorage.removeItem('userToken');
        console.log("Logged Out!");
        
      
      
        this.props.navigation.navigate("Login");
      //alert('Token:'+responseJsonData.success.token);
      //Authorization: 'Bearer ${this.state.token.accessToken}',
    }
    else{
      alert('Log Out Failed!');
    }
    });

    
  }

  render() {
   const { token } = this.state;
   const { userEmail } = this.state;
   let {isSuperAdmin} = this.state;
    return (
      <View 
        behavior="padding"
        enabled
        style={{ paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          flex: 1,
        }}>
        <View style={styles.navBar}>
          <Text style={{ color: '#fff', fontSize: 20 }}> User Account</Text>
        </View>

        <KeyboardAwareScrollView>
        <View style={styles.body}>
           <View style={styles.welcomeWrap}>
          <Image source={require('./profile.png')} style={{height:120, width:120, borderRadius:60}} />
          <Text style={styles.userName}>Logged In as:</Text>
          <Text style={styles.userEmail} >{userEmail}</Text>
          </View> 
           <View style={styles.inputsContainer}>
              <TouchableHighlight
                style={styles.fullWidthButton}
                onPress={ this.logout}>
                <Text style={styles.fullWidthButtonText}>Log Out</Text>
              </TouchableHighlight>
            </View>
        </View>
        </KeyboardAwareScrollView>
         <NavTab navigation={this.props.navigation} isSuperAdmin={isSuperAdmin}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 55,
    backgroundColor: '#607D8B',
    elevation: 3,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
   welcomeWrap: {
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    paddingTop: (Platform.OS === 'android') ? 30 : 50,
  },
  userName:{
    fontSize:22,
    paddingTop:40,
    color:'#607D8B',
  },
  userEmail:{
    fontSize:20,
    paddingTop:20,
  },
  inputsContainer: {
    flex: 1,
    paddingTop:50,
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthButton: {
    backgroundColor: '#8BC34A',
    width: (Platform.OS === 'android') ? 220: 250,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,
  },
  fullWidthButtonText: {
    fontSize: 18,
    color: 'white',
  },
  tabBar:{
    height:(Platform.OS === 'android') ? 58: 60,
    paddingHorizontal:20,
    backgroundColor:'#607D8B',
    borderTopWidth:0.5,
    borderColor:'#e5e5e5',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  tabText:{
    color:'#fff',
    fontSize:11,
    paddingTop:(Platform.OS === 'android') ?2:4,
  },
  tabItem:{
    alignItems:'center',
    justifyContent:'center'
  }
});
export default ProfileScreen;
