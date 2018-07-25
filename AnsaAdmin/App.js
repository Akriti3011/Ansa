import React from 'react';
import {  Text, View, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import LoginScreen from './screens/login';
import ProfileScreen from './screens/profile';
import MenuScreen from './screens/menu';

const App = createStackNavigator({
  Login:{ screen: LoginScreen},
  Profile:{ screen: ProfileScreen},
  Menu:{ screen: MenuScreen},

});

export default App;

