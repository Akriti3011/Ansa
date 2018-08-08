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
  FlatList,
  RefreshControl
  
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OrderItem from '../components/orderItem';
import NavTab from '../components/navTab';
import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants  from '../components/constants';
const ipAddr = Constants.ipAddr;

class OrderScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      token:'',
      refreshing: false,
      orders:[]
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
    
    this.setState({token:userToken});
    this.fetchOrder();
  }



  fetchOrder = ()=>{
    const { token } = this.state;

    alert('fetching...');
    this.setState({refreshing: false});
     
     fetch(ipAddr+'/api/getOrder',{
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
      var  orders = [];
      responseJsonData.success.forEach(function(item){
        orders.push(item);

      });

      console.log(orders);
      this.setState({orders:orders});
        
    }
    else{
      alert('Fetching Order Failed!');
    }
    });

    
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchOrder().done();
    this.setState({refreshing: false});
  }


  render() {
    
    let {orders} = this.state;
    return (
      <View 
        behavior="padding"
        enabled
        style={{ paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          flex: 1,
        }}>
        <View style={styles.navBar}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Orders</Text>
        </View>

       

        
        <View style={styles.body}>
        <FlatList refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            //onRefresh={this._onRefresh}
            onRefresh={this.fetchOrder}
          />
        }
           data={orders}
           renderItem={(order)=><TouchableOpacity onPress={() => this.props.navigation.navigate("OrderDetail",{orderItem:order.item})} ><OrderItem order={order.item} /></TouchableOpacity>}
           keyExtractor={(item)=>item.id.toString()}
           
           />
        
           
        </View>
        
        <NavTab navigation={this.props.navigation}/>
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
    justifyContent:'space-between'
  },
  body: {
    flex: 1,
    padding:20,
    backgroundColor:'#fff'
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
  },
  fix:{
    position:'absolute',
    bottom:20,
    right:20,
  }
  
});
export default OrderScreen;
