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

class MenuScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      token:'',
     refreshing: false,
      menus:[]
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
    this.fetchMenu();
  }



  fetchMenu = ()=>{
    const { token } = this.state;

    alert('fetching...');
    this.setState({refreshing: false});
     
     fetch(ipAddr+'/api/getMenu',{
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
      var  menus = [];
      responseJsonData.success.forEach(function(item){
        menus.push(item);

      });


      this.setState({menus:menus});
        
    }
    else{
      alert('Fetching Menu  Failed!');
    }
    });

    
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchMenu().done();
    this.setState({refreshing: false});
  }


  render() {
    
    let {menus} = this.state;
    return (
      <View 
        behavior="padding"
        enabled
        style={{ paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          flex: 1,
        }}>
        <View style={styles.navBar}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Food Menu</Text>
        </View>

       

        
        <View style={styles.body}>
        <FlatList refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            //onRefresh={this._onRefresh}
            onRefresh={this.fetchMenu}
          />
        }
           data={menus}
           renderItem={(menu)=> <MenuItem menu={menu.item,this.props.navigation} />}
           keyExtractor={(item)=>item.id.toString()}
           
           />
        
           <View>
         
        </View>
          
          <TouchableOpacity style={styles.fix} onPress={() => this.props.navigation.navigate("AddMenu")}>
            <Icon raised={true} name="add-circle" size={60} color={'#8BC34A'} />
          </TouchableOpacity> 
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
export default MenuScreen;
