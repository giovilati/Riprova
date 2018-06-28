import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';
//import {Avatar, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
//import * as firebase from 'firebase';

import Login from './screens/Login.js'
import Home from './screens/Home.js'
//import ListaItems from './screens/ListaItems.js'

StatusBar.setHidden(true);
/* 
var config = {
  apiKey: "AIzaSyBoTWUjUXStrfrsQ9eKV-urKFsMh1rhd54",
  authDomain: "primaprova-d6a66.firebaseapp.com",
  databaseURL: "https://primaprova-d6a66.firebaseio.com",
  projectId: "primaprova-d6a66",
  storageBucket: "primaprova-d6a66.appspot.com",
  messagingSenderId: "325686771785"
};

!firebase.apps.length ? firebase.initializeApp(config) : null;
*/
const RootStack = createStackNavigator({
 
  LoginScreen: {
    screen: Login
  },

  HomeScreen: {
    screen: Home,
  },
/*
  ListItemsScreen: {
    screen: ListaItems,
  },

*/

},
  {

    initialRouteName: "LoginScreen",
    
  
});


export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>

       {<RootStack/>
       }       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
