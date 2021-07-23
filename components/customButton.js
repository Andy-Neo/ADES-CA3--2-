import React, { Component } from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CustomButton extends Component{
    render(){
        return(
            <TouchableOpacity style = {styles.button} onPress ={this.props.function}>
                <Text style = {styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button:{        
        backgroundColor: "rgb(145, 130, 76)",
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
})