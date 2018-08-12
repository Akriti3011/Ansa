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

class RegisterScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      password:'',
      c_password:'',
      errorMessage:''
    };
  }

   static navigationOptions = {
    header:null,
  };

  componentDidMount(){
    
  }

  comparePassword = ()=> {
    var password = this.state.password;
    var c_password = this.state.c_password;
    if(password != c_password){
      this.setState({errorMessage:'password does not match'});
    }
    else{
      this.setState({errorMessage:''});
    }

  }

   register = ()=> {
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.password;
    var c_password = this.state.c_password;
    this.setState({email:'',password:'', name:'', c_password:''});
 
     var formData = new FormData();
     formData.append('name', name);
     formData.append('email',email);
     formData.append('password',password);
     formData.append('c_password', c_password);
    //var data = {email:email,password:password};
    //console.log("form DATA:",formData);
     fetch(ipAddr+'/api/register',{
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
       if(responseJsonData.success){
        alert("Successfully Registered!");
      
        this.props.navigation.navigate("Order");
      
    }
    else{
      alert('Unable to register!!');
    }
    
    });
      

   
  }

  

  render() {
    let {name} = this.state;
    let {email} =this.state;
    let {password} = this.state;
    let {c_password} = this.state;
    let {errorMessage} = this.state;
    return (
       
    <View behavior="padding"
        enabled
        style={{ paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          flex: 1,
        }}>
        <View style={styles.navBar}>
          <Text style={{color:'#fff', fontSize:20}}>Register</Text>
        </View>
        
        <View style={styles.body}>
        <KeyboardAwareScrollView>
        <View style={styles.welcomeWrap}>
          
          <Text style={styles.headText}>ANSA</Text>
                  </View>

        <View style={styles.inputs}>
        
         <TextField keyboardType='email-address'
        label='Name'
        value={name}
        onChangeText={ (name) => this.setState({ name })} 
        
      />

          <TextField keyboardType='email-address'
        label='Email Id'
        value={email}
        onChangeText={ (email) => this.setState({ email })} 
        
      />
      
      
      <TextField secureTextEntry={true}
        label='Password'
        value={password}
        onChangeText={ (password) => this.setState({ password }) }
      />
      

        <TextField secureTextEntry={true}
        label='Confirm Password'
        value={c_password}
        onChangeText={ (c_password) => this.setState({ c_password }) }
        onBlur = {this.comparePassword}
      />
      
      {errorMessage ?
      <Text>{errorMessage}</Text>
      : null}
     
      <View style={styles.inputsContainer}>
    <TouchableHighlight style={styles.fullWidthButton} onPress={this.register}>
        <Text style={styles.fullWidthButtonText}>Register</Text>
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
    fontSize:36,
    fontWeight:'bold',
    color:'#8BC34A',
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
    backgroundColor: '#8BC34A',
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

export default RegisterScreen;