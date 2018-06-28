import React from 'react';
import { StyleSheet, Text, View, TextInput,StatusBar } from 'react-native';
import {Avatar, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
//import { createStackNavigator } from 'react-navigation';
import * as firebase from "firebase";

StatusBar.setHidden(true);

export default class Login extends React.Component {
  static navigationOptions= {
    
    header: null,
};
    state= {
      email: 'giovanni@gmail.com',
      password:'123456',
      isLogin: false,
      error:'',
      creatUser: 0,
    };

    _login = () => {
      this.setState({ isLoading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
          this.setState({ isLoading: false });
          //console.log(user);
          
          

          this.props.navigation.navigate("ListItemsScreen");
          //passa il current UID 
          //
          //const currentUID = firebase.auth().currentUser.uid;

          //const refUser = firebase.database().ref("users/"+currentUID+"/persona");
          
          
        })
        .catch(error => {
          this.setState({ isLoading: false, error: error.message });
          //alert(error.message);
        });
    };

    _signUp = () => {
      
      this.setState({ isLoading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
          this.setState({ isLoading: false });
          
          //console.log(user);
          //inserimento funzionante
          const persona = {nome:'ludovica', cognome:'cianci'}
          
          const currentUID = firebase.auth().currentUser.uid;

          const refUser = firebase.database().ref("users/"+currentUID+"/Persona");
          
          refUser.push(persona);
          
          console.log(currentUID);
          

          this.props.navigation.navigate("HomeScreen");
          
          
          
        })
        .catch(error => {
          this.setState({ isLoading: false, error: error.message });
          //alert(error.message);
        });
    };


  render() {
    return (
      
      <View style={styles.container}>
        
        <View style= {styles.box_1}>
              
              <View style= {styles.Avatar_box_1}>
              <Avatar
                rounded
                large
                title="Logo"
                //onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              </View> 
        </View> 
        
        <View style= {styles.box_2}>

          <FormLabel>Email</FormLabel>
          
          <FormInput onChangeText={(val)=> this.setState({email:val})} placeholder="Enter your username"/>
          
          <FormLabel>Password</FormLabel>
          
          <FormInput onChangeText={(val)=> this.setState({password:val})} placeholder="Enter your password" secureTextEntry/>

            
              <View style= {styles.view_button}>
            
                <Button
                  small
                  rounded
                  title='Login'
                  backgroundColor='blue'
                  buttonStyle= {{width:115}}
                  onPress= {this._login}
              
                />
            
              </View>
            
              <View style= {styles.view_button}>
            
              <Button
              small
              rounded
              title='Registrazione'
              backgroundColor='blue' 
              onPress= {this._signUp}
              />
        
              </View>
            
            <Text>{this.state.error}</Text>

        </View> 

        <View style= {styles.box_3}>
              
        </View> 
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
