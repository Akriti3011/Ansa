import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Divider } from 'react-native-elements';
export default class MenuItem extends Component {

    render() {
        var menu = this.props.menu;
         console.log("gvhj",menu);
        
        return (
            
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                   
                </View>
                <View style={styles.descContainer}>
                  <View style={styles.halfContainer}>
                <View style={styles.half}>
                    <Text style={styles.leadStats}>{menu.name}</Text>
                </View>
                <View style={styles.half}>
                     <Text style={styles.leadStats}>{menu.price}</Text>
                </View>
                    
                </View>
                <View style={styles.halfContainer}>
                <View style={styles.half}>
                 <Text style={styles.leadStats}>{menu.description}</Text>
                   
                </View>
                <View style={styles.half}>
                   
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
        flex:1,
        alignContent:'center'
    },
    descContainer: {
        flex:4,
    },
    leadStats:{
        fontSize:16,
    },
    half:{
        flex:1,
    },
    halfContainer:{
        flexDirection:'row',
        flex:1
    }
});