import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,TextInput} from 'react-native';
import BloodGroup from './BloodGroup'

export default class Details extends React.Component {

  constructor(){
    super();
    this.state={
      name:"",
      bloodGroup:""
    }
  }

    goToRecieveSreen=(bloodgroup)=>{
      this.props.navigation.navigate('Screen6', { blood: bloodgroup })
}
  render(){
    return(
      <View>
   <TextInput 
	                    placeholder="Enter Blood Group you need"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            name: text
	                        })
	                    }}
	                    placeholderTextColor='Black'
	                    value={this.state.name}
	                    style={{marginTop:50,borderWidth:5}}/>

                      <TouchableOpacity onPress={()=>this.goToRecieveSreen(this.state.name)
                          
                      }>search</TouchableOpacity>
             <Text>{this.state.bloodGroup}</Text>
     



      </View>
    )
  }
}