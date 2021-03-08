import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase'
import db from '../config'

export default class Donatescreen extends React.Component {
  constructor(){
    super()
    this.state={
      name:'',
      address:'',
      number:'',
      blood:'',
      gender:''
    }
  }

        updateFirestore3=()=>{
   db.collection(this.state.blood).doc(this.state.name).set({
           
    'name': this.state.name,
    'address':this.state.address,
    'number':this.state.number,
    'gender':this.state.gender,
    'status':'donor'
  
       
      })
}

     goToHomeScreen=()=>{
      this.props.navigation.navigate('Screen1')
}


  render(){
    return(
      <View>
      <TextInput 
	                    placeholder="Enter Your Name"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            name: text
	                        })
	                    }}
	                    placeholderTextColor='Black'
	                    value={this.state.name}
	                    style={{marginTop:50,borderWidth:5}}/>

                      <TextInput 
	                    placeholder="Enter Your Address"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            address: text
	                        })
	                    }}
	                    placeholderTextColor='Black'
	                    value={this.state.address}
	                    style={{marginTop:50,borderWidth:5}}/>

                      <TextInput 
	                    placeholder="Contact number"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            number: text
	                        })
	                    }}
	                    placeholderTextColor='Black'
	                    value={this.state.number}
	                    style={{marginTop:50,borderWidth:5}}/>

                      <TextInput 
	                    placeholder="Blood group"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            blood: text
	                        })
	                    }}
	                    placeholderTextColor='Black'
	                    value={this.state.blood}
	                    style={{marginTop:50,borderWidth:5}}/>

                      <TextInput 
	                    placeholder="Gender"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                           gender: text
	                        })
	                    }}
	                    placeholderTextColor='Black'
	                    value={this.state.gender}
	                    style={{marginTop:50,borderWidth:5}}/>

                      <TouchableOpacity onPress={()=>{
                        this.updateFirestore3();
                        this.goToHomeScreen();
                                             }} 
                         style={{backgroundColor:'black',color:'white',marginTop:40,textAlign:'center',width:50,height:40,alignSelf:'center',borderRadius:10}}>Next</TouchableOpacity>
      </View>
    )
  }
}
