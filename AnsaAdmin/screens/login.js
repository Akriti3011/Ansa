import React from 'react';
import { Platform,
         StyleSheet,
         Text,
         View,
         Image,
         TouchableHighlight,
         Button,
         TouchableOpacity,
         AsyncStorage, 
       } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { TextField } from 'react-native-material-textfield'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants  from '../components/constants';
const ipAddr = Constants.ipAddr;

class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    };
  }

   static navigationOptions = {
    header:null,
  };

  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var userToken = await AsyncStorage.getItem('userToken');
    if(userToken){
      
      this.props.navigation.navigate("Profile",userToken);
    }
  }


   login = ()=> {
    var email = this.state.email;
    var password = this.state.password;
    this.setState({email:'',password:''});
 
     var formData = new FormData();
     formData.append('email',email);
     formData.append('password',password);
    //var data = {email:email,password:password};
    //console.log("form DATA:",formData);
     fetch(ipAddr+'/api/login',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'multipart/form-data'
        //'Content-Type':'application/json'
      },
      //body:JSON.stringify(data)
      body:formData
    }).then((response) => response.json())
    
    .then((responseJsonData) =>{
      console.log(responseJsonData);
       if(responseJsonData.success){
        console.log("Logged in!");
        AsyncStorage.setItem('userToken',responseJsonData.success.token);
        AsyncStorage.setItem('userEmail',responseJsonData.success.user);
      
        this.props.navigation.navigate("Profile");
      //alert('Token:'+responseJsonData.success.token);
      //Authorization: 'Bearer ${this.state.token.accessToken}',
    }
    else{
      alert('Invalid username or password');
    }
    });
      

   
  }

  

  render() {
    let {email} =this.state;
    let {password} = this.state;
    return (
       
    <View behavior="padding"
        enabled
        style={{ paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          flex: 1,
        }}>
        <View style={styles.navBar}>
          <Text style={{color:'#fff', fontSize:20}}>Log in</Text>
        </View>
        
        <View style={styles.body}>
        <KeyboardAwareScrollView>
        <View style={styles.welcomeWrap}>
          
          <Text style={styles.headText}>ANSA ADMIN</Text>
          <Text style={styles.welcomeText}>Welcome Back !</Text>
                  </View>

        <View style={styles.inputs}>
        
          <TextField keyboardType='email-address'
        label='Email Id'
        value={email}
        onChangeText={ (email) => this.setState({ email })} 
        
      />
      
      <View>
      <TextField secureTextEntry={true}
        label='Password'
        value={password}
        onChangeText={ (password) => this.setState({ password }) }
      />
      </View>
     
      <View style={styles.inputsContainer}>
    <TouchableHighlight style={styles.fullWidthButton} onPress={this.login}>
        <Text style={styles.fullWidthButtonText}>LOG IN</Text>
    </TouchableHighlight>
</View>
        </View>
 </KeyboardAwareScrollView>
        </View>   
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
    flexDirection:'row',
    alignItems:'center',
  },
  body:{
    flex:1,
    backgroundColor:'#fff'
  },
  welcomeWrap: {
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    paddingTop: (Platform.OS === 'android') ? 30 : 50,
  },
  headText:{
    fontSize:38,
    paddingTop:20,
  },
  welcomeText:{
    fontSize:24,
    paddingTop:20
  },
  inputs:{
    paddingHorizontal:20,
    paddingTop:10
  },
   inputsContainer: {
    flex: 1,
    paddingTop:50,
  },
  fullWidthButton: {
    backgroundColor: '#607D8B',
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },
  fullWidthButtonText: {
    fontSize:18,
    color: 'white'
  },
   
});

export default LoginScreen;