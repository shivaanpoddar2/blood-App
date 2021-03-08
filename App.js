import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

import Donatescreen from './Screens/Donatescreen';
import Recievescreen from './Screens/Recievescreen';
import Homescreen from './Screens/Homescreen';
import Donorsscreen from './Screens/Donorscreen';
import aPositive from './Screens/aPositive';
import Details from './Screens/Details';
import BloodGroup from './Screens/BloodGroup'



export default class App extends React.Component {
  render(){
    return(
      <View>
    <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  
 
  Screen1:Homescreen,
  Screen2:Donatescreen,
  Screen3:Recievescreen,
  Screen4:Donorsscreen,
  Screen5:aPositive,
  Screen6:BloodGroup,
   screen6:Details,
  
})

const AppContainer = createAppContainer(AppNavigator)
