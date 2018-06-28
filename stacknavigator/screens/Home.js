import React from 'react';
import { StyleSheet, Text, View, TextInput,StatusBar } from 'react-native';
import {Avatar, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

StatusBar.setHidden(true);

export default class Home extends React.Component {
  static navigationOptions= {
    
    header: null,
};
    state= {
      email: 'giovanni@gmail.com',
      password:'123456',
      isLogin: false,
      error:'',
    };
  
  
    render() {
    return (
      
      <View style={styles.container}>
                
                
            <Button
                small
                rounded
                title='+'
                backgroundColor='blue'
                buttonStyle= {{width:115}}
                //onPress= {}
            />  

             
             <Button
                small
                rounded
                title='-'
                backgroundColor='blue'
                buttonStyle= {{width:115}}
                //onPress= {}
            /> 


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box_1: {
    flex:1/4,
    flexDirection: 'row',
    //borderWidth: 2,
    //borderColor: "red",
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  box_2: {
    flex:2/4,
    //borderWidth: 2,
    //borderColor: "black",
    //backgroundColor: "#fff",
  },
  box_3: {
    flex: 1/4,
    //borderWidth: 2,
    //borderColor: "yellow",
    //backgroundColor: "#fff",
  },

  /*box_button:{
    //flex:1/3,
    //padding:10,
    //flexDirection:'column',
    borderWidth: 2,
    borderColor: "red",
    //backgroundColor: 'yellow',

  },*/

  view_button: {
    flexDirection:'row',
    justifyContent:'center',
    //borderWidth: 2,
    //borderColor: "orange",
    //backgroundColor: 'green',
    paddingTop:15,
  },


});
