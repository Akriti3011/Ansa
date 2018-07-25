import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
     
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator } from 'react-navigation';

export default class NavTab extends Component {
    render()
     { //console.log(this.props);
        return (
            
          <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem} onPress={() => this.props.navigation.navigate("Login")}>
            <Icon name="home" size={25} color={'#fff'} />
            <Text style={styles.tabText}>Home</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.tabItem} onPress={() => this.props.navigation.navigate("Menu")}>
            <Icon name="restaurant-menu" size={25} color={'#fff'} />
            <Text style={styles.tabText}>Food Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => this.props.navigation.navigate("Profile")}>
            <Icon name="account-circle" size={25} color={'#fff'}/>
            <Text style={styles.tabText}>Account</Text>
          </TouchableOpacity>
        </View>
            
        )
    }
}

const styles = StyleSheet.create({
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