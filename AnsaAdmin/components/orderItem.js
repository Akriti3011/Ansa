import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { Avatar } from 'react-native-material-design';
import { Divider } from 'react-native-elements';
import Constants  from '../components/constants';
const ipAddr = Constants.ipAddr;
export default class OrderItem extends Component {

    render() {
        var order = this.props.order;        
        return (
            
            <View style={styles.container}>
               <TouchableOpacity>
            <Icon raised={true} name="bookmark" size={25} color={'#8BC34A'} />
          </TouchableOpacity>
                <View style={styles.descContainer}>
                  <View style={styles.halfContainer}>
                    <View style={styles.half}>
                    <Text style={styles.leadStats}>{order.order_no}</Text>
                    </View>
                    <View style={styles.rightHalf}>
                    <Text style={styles.leadStats}>{order.total_amount}</Text>
                    </View>
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
});