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
import MenuItem from '../components/menuItem';
import NavTab from '../components/navTab';
import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants  from '../components/constants';
const ipAddr = Constants.ipAddr;

class OrderDetailScreen extends React.Component {

  constructor(props){
    super(props);
    var order = this.props.navigation.getParam('orderItem', '');
    this.state = {
      token:'',
      refreshing: false,
      order_details:[],
      customer_details:'',
      order_no:order.order_no,
      total_amount: order.total_amount
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
    this.fetchOrderDetails();
  }


  fetchOrderDetails = ()=>{
    const { token } = this.state;
    var order = this.props.navigation.getParam('orderItem', '');
    alert('fetching...');
    this.setState({refreshing: false});
     
     fetch(ipAddr+'/api/getOrderDetails/'+order.id,{
      method:"GET",
      headers:{
        Accept:'application/json',
        Authorization: 'Bearer ' + token,
      }
      
          }).then((response) => response.json())
    
    .then((responseJsonData) =>{
      if(responseJsonData){
      var  order_details = [];
      responseJsonData.order_detail.forEach(function(item){
        order_details.push(item);
      });
      var  customer_details = responseJsonData.customer_detail ;
      
      this.setState({
        order_details:order_details,
        customer_details:customer_details,
      });
        
    }
    else{
      alert('Fetching Order Details Failed!');
    }
    });

    
  }
  
  
  render() {
    
    let {order_no} = this.state;
    let {total_amount} = this.state;
    let {order_details} = this.state;
    let {customer_details} = this.state;
    return (
      <View 
        behavior="padding"
        enabled
        style={{ paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          flex: 1,
        }}>
        <View style={styles.navBar}>
          <Text style={{ color: '#fff', fontSize: 20 }}>{order_no}</Text>
           <Text style={{ color: '#fff', fontSize: 20 }}>Total:{total_amount}</Text>
        </View>

       

        
       <View style={styles.body}>
         <KeyboardAwareScrollView>
          <View style={styles.inputs}>
          
           
                <Text style={styles.head}>Order Details</Text>

                <View style={styles.Container}>
                  <View style={styles.halfContainer}>
                    <View style={styles.half}>
                    <Text style={styles.cat}>Item</Text>
                    </View>
                    <View style={styles.rightHalf}>
                    <Text style={styles.cat}>Quantity</Text>
                    </View>
                    <View style={styles.rightHalf}>
                    <Text style={styles.cat}>Amount</Text>
                    </View>
                  </View>
                  {order_details.map(order_detail =>( 
                  <View style={styles.halfContainer} key={order_detail.id}>
                    <View style={styles.half}>
                    <Text style={styles.leadStats}>{order_detail.menu_name}</Text>
                    </View>
                    <View style={styles.rightHalf}>
                    <Text style={styles.num}>{order_detail.quantity}</Text>
                    </View>
                    <View style={styles.rightHalf}>
                    <Text style={styles.num}>{order_detail.amount}</Text>
                    </View>
                  </View>
                 ))}
                </View>

                <Text style={styles.head}>Customer Details</Text>
                 <View style={styles.Container}>
                <View style={styles.halfContainer}>
                    
                    <View style={styles.rightHalf}>
                    <Text style={styles.cat}>Name</Text>
                    </View>
                    <View style={styles.half}>
                    <Text style={styles.string}>{customer_details.name}</Text>
                    </View>
                </View>
                <View style={styles.halfContainer}>
                    
                    <View style={styles.rightHalf}>
                    <Text style={styles.cat}>Contact No</Text>
                    </View>
                    <View style={styles.half}>
                    <Text style={styles.string}>{customer_details.contact}</Text>
                    </View>
                </View>
                <View style={styles.halfContainer}>
                    
                    <View style={styles.rightHalf}>
                    <Text style={styles.cat}>Address</Text>
                    </View>
                    <View style={styles.half}>
                    <Text style={styles.string}>{customer_details.address}</Text>
                    </View>
                </View>
                <View style={styles.halfContainer}>
                    
                    <View style={styles.rightHalf}>
                    <Text style={styles.cat}>Pincode</Text>
                    </View>
                    <View style={styles.half}>
                    <Text style={styles.string}>{customer_details.pincode}</Text>
                    </View>
                </View>
                <View style={styles.halfContainer}>
                    
                    <View style={styles.rightHalf}>
                    <Text style={styles.cat}>Email</Text>
                    </View>
                    <View style={styles.half}>
                    <Text style={styles.string}>{customer_details.email}</Text>
                    </View>
                </View>

                </View>
                
          
          
  </View>
    
           </KeyboardAwareScrollView>
       
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
    backgroundColor:'#fff'
  },
  head:{
    fontSize:20,
    fontWeight:'400',
    color:'#8BC34A',
    paddingTop:20,
    paddingBottom:20,
  },
   inputs: {
    paddingHorizontal: 20,
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
  },
  leadStats:{
        fontSize:16,
        fontWeight:'400',
        color:'#455A64',   
    },
    half:{
        flex:3,
    },
    rightHalf:{
        flex:2,
    },
    halfContainer:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
    },
    Container:{
      backgroundColor:'#f5f5f5',
        marginBottom:10,
        padding:5,
    },
    cat:{
        fontSize:18,
        fontWeight:'600',
        color:'#607D8B',   
    },
     num:{
        fontSize:16,
        fontWeight:'400',
        color:'#455A64', 
        alignSelf:'center',  
    },
    string:{
        fontSize:18,
        fontWeight:'400',
        color:'#455A64',   
    },
  
});
export default OrderDetailScreen;
