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
  Picker
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavTab from '../components/navTab';
import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Expo,{ ImagePicker } from 'expo';
import Constants  from '../components/constants';
const ipAddr = Constants.ipAddr;
async function registerPer(){
  var {statusCameraRoll} = await Expo.Permissions.getAsync(Expo.Permissions.CAMERA_ROLL);
  var {statusCamera} = await Expo.Permissions.getAsync(Expo.Permissions.CAMERA);

  
  if(!statusCameraRoll ){
    var grantCameraRoll = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);
    //if(grantCameraRoll!== 'granted') alert('Gallery permission not granted!');
  }
  if(statusCamera !== 'granted'){
    grantCamera = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA);
    //if(grantCamera!== 'granted') alert('Camera permission not granted!');
  }
  return;
}

class EditMenuScreen extends React.Component {
  constructor(props) {
    super(props);
    var menu = this.props.navigation.getParam('menu', '');
    this.state = {
      sendImage:true,
      imageName:'',
      imageUri:ipAddr+"/"+menu.imagePath,
      imageType:'',
      token:'',
      name:menu.name,
      price:menu.price,
      description:menu.description,
      newImage:false,
      isSuperAdmin:''


    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
    this._loadInitialState().done();
    //var menu = this.props.navigation.getParam('menu', '');
    // this.setState({
    //     name:menu.name,
    //     price:menu.price,
    //     description:menu.description,
    //     imageUri:ipAddr+"/"+menu.imagePath});
  }

  _loadInitialState = async () => {
    var userToken = await AsyncStorage.getItem('userToken');
    var isSuperAdmin = await AsyncStorage.getItem('isSuperAdmin');
    if(userToken){
      
      this.setState({token:userToken, isSuperAdmin:isSuperAdmin});
      
    }
  }

  componentWillMount(){
    registerPer();
  }


    _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      //aspect: [4, 3],
    });

    if (!result.cancelled) {
       // ImagePicker saves the taken photo to disk and returns a local URI to it
      let localUri = result.uri;
      let filename = localUri.split('/').pop();
      


      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      
      this.setState({
        imageName:filename,
        imageUri:localUri,
        imageType:type,
        newImage:true});

    }
    
  }

  _captureImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      //aspect: [4, 3],
    });

    if (!result.cancelled) {
       // ImagePicker saves the taken photo to disk and returns a local URI to it
      let localUri = result.uri;
      let filename = localUri.split('/').pop();
     
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      this.setState({
        imageName:filename,
        imageUri:localUri,
        imageType:type,
      newImage:true});

    }
  }


  editMenu = ()=>{
    
    var sendImage = this.state.sendImage;
    var newImage = this.state.newImage;
    var name = this.state.name;
    var price = this.state.price;
    var description = this.state.description;
    const { navigation } = this.props;
    const { token } = this.state;
    var imageType = this.state.imageType;
      var imageName = this.state.imageName;
   
    var menu = this.props.navigation.getParam('menu', '');
    
    if(newImage){
      var imageUri = this.state.imageUri;
      

    }
    else{
      var imageUri = menu.imagePath; 
    }
      
      
      console.log(token);
 var formData = new FormData();
  formData.append('name',name);
  formData.append('price',price);
  formData.append('description',description);

     if(sendImage){
      if(newImage){
      formData.append('Image',{ uri: imageUri, name: imageName, type:imageType });
      }
     }

     console.log(formData);
     this.setState({
      sendImage:false,
      imageName:'',
      imageUri:'',
      imageType:'',
      token:'',
      name:'',
      price:'',
      description:'',
      newImage:false,

    });
     fetch(ipAddr+'/api/editMenu/'+menu.id,{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'multipart/form-data',
        Authorization: 'Bearer ' + token,
      },
      body:formData
    }).then((response) => response.json())
    
    .then((responseJsonData) =>{
      console.log(responseJsonData.success);
       if(responseJsonData.success){
        alert("Item updated successfully!");
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

  clearImage = ()=>{
    const {sendImage} = this.state;
    if(sendImage) {
      this.setState({sendImage:false});
      alert('Image Cleared!');
    }
    else alert('No Image Selected!');
  }

  render() {

    let {name} = this.state;
    let {price} = this.state;
    let {description} = this.state;    
    let {sendImage} = this.state;
    let {imageUri} = this.state;
    let {isSuperAdmin} = this.state;

    return (
      <View 
        behavior="padding"
        enabled
        style={{ paddingTop: (Platform.OS === 'ios') ? 20 : 0,
          flex: 1,
        }}>
        <View style={styles.navBar}>
         
          <Text style={{ color: '#fff', fontSize: 20 }}> Edit Menu Item</Text>
        </View>
        <View style={styles.body}>
         <KeyboardAwareScrollView>
          <View style={styles.inputs}>
              <TextField
                label="Item Name"
                value={name}
                onChangeText={name => this.setState({ name:name })}
              />
               <TextField
                label="Price"
                value={price} keyboardType='numeric'
                onChangeText={price => this.setState({ price:price })}
              />
               <TextField
                label="Description"
                value={description}
                onChangeText={description => this.setState({ description:description})}
              />
               
          <View style={styles.imageWrapper}>
           <TouchableHighlight
                onPress={this._pickImage}>
                <Text style={{fontSize:16, color:'#607D8B'}}>Browse</Text>
              </TouchableHighlight>
          <TouchableHighlight
                onPress={this._captureImage}>
                <Text style={{fontSize:16, color:'#607D8B'}}>Capture</Text>
              </TouchableHighlight>
                
           <Text style={{width:(Platform.OS === 'android') ? 100 : 130,  height: (Platform.OS === 'android') ? 100:130}}>
           {sendImage && <Image source={{ uri: imageUri }} style={{ width:(Platform.OS === 'ios') ? 130 : 300, height: (Platform.OS === 'ios') ? 130 : 300 }} />}
           </Text>
           <TouchableHighlight
                onPress={this.clearImage}>
                <Icon name="clear" size={25} color={'#8BC34A'} />
              </TouchableHighlight>
        </View>

            
          </View>
          <View style={styles.inputsContainer}>
              <TouchableHighlight
                style={styles.fullWidthButton}
                onPress={ this.editMenu}>
                <Text style={styles.fullWidthButtonText}>Update Item</Text>
              </TouchableHighlight>
            </View>
           </KeyboardAwareScrollView>
        </View>
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
    justifyContent:'space-between'
  },
  body: {
    flex: 1,
    backgroundColor:'#fff'
  },
  inputs: {
    paddingHorizontal: 20,
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
  imageWrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    paddingTop:10
  },
  tabBar:{
    height:(Platform.OS === 'android') ? 58: 60,
    paddingHorizontal:20,
    backgroundColor:'#3F51B5',
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
export default EditMenuScreen;
