import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'
import db from '../config'


export default class Homescreen extends React.Component {
     goToDonateScreen=()=>{
      this.props.navigation.navigate('Screen2')
}

     goToRecieveSreen=()=>{
      this.props.navigation.navigate('Screen3')
}

goToDonorsScreen=()=>{
      this.props.navigation.navigate('Screen5')
}


  render(){
    return(
      <View>
      <Text style={{backgroundColor:'red',textAlign:'center',
      marginTop:40,color:'white',fontSize:20}}>Blood donating App</Text>
        <Image style={{width:'20%',height:80,alignSelf:'center'}}
          source={require("../assets/blood.png")}
        />
        <TouchableOpacity onPress={this.goToRecieveSreen} style={{backgroundColor:'green',textAlign:'center',marginTop:80,fontSize:20,borderWidth:3,color:'white'}}>recieve</TouchableOpacity>

        <TouchableOpacity onPress={this.goToDonateScreen} style={{backgroundColor:'blue',textAlign:'center',marginTop:80,fontSize:20,borderWidth:3,color:'white'}} >donate</TouchableOpacity>

        <TouchableOpacity onPress={this.goToDonorsScreen} style={{backgroundColor:'red',textAlign:'center',marginTop:80,fontSize:20,borderWidth:3,color:'white'}}>view donors</TouchableOpacity>

      </View>
    )
  }
}