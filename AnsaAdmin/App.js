import React from 'react';
import {  Text, View, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import LoginScreen from './screens/login';
import ProfileScreen from './screens/profile';
import MenuScreen from './screens/menu';
import AddMenuScreen from './screens/addMenu';
import OrderScreen from './screens/order';
import OrderDetailScreen from './screens/orderDetail';
import EditMenuScreen from './screens/editMenu';



const App = createStackNavigator({
  Login:{ screen: LoginScreen},
  Profile:{ screen: ProfileScreen},
  Menu:{ screen: MenuScreen},
  AddMenu:{screen:AddMenuScreen},
  Order:{ screen: OrderScreen},
  OrderDetail:{screen:OrderDetailScreen},
  EditMenu:{screen:EditMenuScreen},
});

export default App;

