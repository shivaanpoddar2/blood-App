import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView, TouchableOpacity} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import db from '../config'




export default class bNegative extends React.Component {
  constructor(){
    super();
    this.state ={
      allData:[],
      dataSource:[],
      search : ''
    }
  }
  componentDidMount(){
    this.retrieveStories()
  }

  updateSearch = search => {
    this.setState({ search });
  };


  retrieveStories=()=>{
    try {
      var allData= []
      var stories = db.collection("bNegative")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
             
              allData.push(doc.data())
             
          })
          this.setState({allData})
          console.log(this.state.allData)
        })
    }
    catch (error) {
      console.log(error);
    }
  };


  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.allData.filter((item)=> {
      //applying filter for the inserted text in search bar
     const itemData = item.status ? item.status.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

    render(){
      return(
        <ScrollView style ={styles.container}>
           
          <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Type Here..."
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              value={this.state.search}
            />
          </View>
          
          <FlatList
                data={this.state.search === "" ?  this.state.allData: this.state.dataSource}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                  <Text>  name : {item.name}</Text>
                    <Text>  address: {item.address}</Text>
                    <Text>  number: {item.number}</Text>
                    <Text>  status: {item.status}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                /> 
          
          
          
        </ScrollView>  
      );      
    }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'pink',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent:'center',
    alignSelf: 'center',
  },
  hi3: {
    height: 50,
    width:'50%',
    
  }
});
