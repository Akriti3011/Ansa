import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Divider } from 'react-native-elements';
import Constants  from '../components/constants';
const ipAddr = Constants.ipAddr;
export default class MenuItem extends Component {
    constructor(props){
        super(props);
        this.state={
            token:'',
        };
    }

componentDidMount(){
    this._loadInitialState().done();

  }

  _loadInitialState = async () => {
    var userToken = await AsyncStorage.getItem('userToken');
    if(userToken){
      
      this.setState({token:userToken});
      
    }
  }

deleteMenu =(menu)=>{

    const { token } = this.state;
    //alert(token);

    this.setState({
     
     token:'',
    });

    fetch(ipAddr+'/api/deleteMenu/'+menu.id,{
      method:"POST",
      headers:{
        Accept:'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then((response) => response.json())
    
    .then((responseJsonData) =>{
      console.log(responseJsonData);
       if(responseJsonData.success){
        alert("Item deleted successfully!");
        this.props.navigation.navigate('Menu');
    }
    else{
      alert('Unauthorised user!');
    }
    }).catch(function(err) {
          console.log(err);
          return err;
        });
      
}
    render() {
        var menu = this.props.menu;        
        return (
            
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                  <Image source={{ uri: ipAddr+"/"+menu.imagePath}} style={{ height: 80, width:80 }} /> 
                </View>
                <View style={styles.descContainer}>
                  <View style={styles.halfContainer}>
                    <View style={styles.half}>
                    <Text style={styles.leadStats}>{menu.name}</Text>
                    </View>
                    <View style={styles.rightHalf}>
                    <Text style={styles.leadStats}>{menu.price}</Text>
                    </View>
                  </View>
                  <View style={styles.halfContainer}>
                    <Text style={styles.desc}>{menu.description}</Text>
                  </View>
                  <View style={styles.halfContainer}>
                  <View style={styles.half}></View>
                   <TouchableOpacity style={styles.crud} onPress={() => this.props.navigation.navigate("EditMenu", {menu:menu})}>
            <Icon name="create" size={20} color={'#455A64'} />
            
          </TouchableOpacity> 
          <TouchableOpacity style={styles.crud} onPress={()=>this.deleteMenu(menu)}>
            <Icon name="delete" size={20} color={'#FF5252'} />
            
          </TouchableOpacity>
                  </View>
                    
                </View> 
                </View>
                
                    
      
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex:1,
        flexDirection:'row',
        backgroundColor:'#f5f5f5',
        marginBottom:20,
    },
    iconContainer: {
        flex:2,
        alignContent:'center',
    },
    descContainer: {
        flex:5,
    },
    leadStats:{
        fontSize:18,
        fontWeight:'bold',
        color:'#455A64',   
    },
    desc:{
       fontSize:16,
       color:'#607D8B',
    },
    half:{
        flex:3,
    },
    rightHalf:{
        flex:1,
    },
    halfContainer:{
        flexDirection:'row',
        flex:1,

    },
    crud:{
        flex:1,
    }
});