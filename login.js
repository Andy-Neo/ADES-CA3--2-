//Log in Screen (Page 1)

import React, { Component } from 'react';
import {View,Image, Button, TextInput,Text, StyleSheet, TouchableOpacity,TouchableHighlight,rgb,Linking,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Links from './components/links';
import CustomButton from './components/customButton';


const userInfo = {username:'admin',password:'12'}

class loginPage extends Component{
    
   

    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    forgotPassword = () =>{
        Alert.alert("\nYour password is : 12345678")
    }

    createAccount = () => {
        Alert.alert("Username:admin\npassword:123456789")
    }
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <Image
                    source = {require('./images/logo2.png')}
                    style = {styles.logo}
                    />
                </View>
                <Text style ={styles.text}>The one stop solution for all your skating needs</Text>
                <View>
                 <TextInput  onChangeText = {(username)=>this.setState({username})} value = {this.state.username}
                    style = {styles.textInput}
                    placeholder = "Username"
                /> 
                <TextInput onChangeText = {(password)=>this.setState({password})} value = {this.state.password}
                    style = {styles.textInput2}
                    placeholder = "Password"
                />
                <Links function = {this.forgotPassword} text = "Forgot password?"/>
                </View>
                
                <CustomButton function = {this._login} text = "Log In"/>
                
                <Links function = {this.createAccount} text = "Don't have an account? Sign up now"/>
                
            </View>
        );
    }
    _login = async()=>{
        if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            this.props.navigation.navigate("main")
        }else{
            alert('Username or Password is incorrect')
        }
    }
}
export default loginPage;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgb(250, 250, 250)'
    },
    text:{
        fontSize: 25,
        textAlign : 'center'
    },
    textInput:{
        paddingLeft:10,
        height: 45,
        width: 225,
        borderRadius:12,
        marginTop:60,
        marginBottom:10,
        backgroundColor:'rgb(232, 232, 232)'
    },
    textInput2:{
        paddingLeft:10,
        height: 45,
        width: 225,
        borderRadius:12,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'rgb(232, 232, 232)'
    },
    button:{        
        backgroundColor: "rgb(162, 221, 252)",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30,
        marginTop: 30,     
        height: 40,
    },
    buttonText:{
        fontSize: 20,
        color: "rgb(255,255,255)",
    },
    logo:{
        width:200,
        height:200,
        marginBottom: 50
    }
});

