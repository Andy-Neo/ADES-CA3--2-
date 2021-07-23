import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default class Hyperlink extends Component{
    render(){
        return(
            <TouchableOpacity onPress ={this.props.function}>
              <Text style = {styles.links}>
                {this.props.text}
              </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    links:{
        color : "rgb(0, 165, 255)",
        paddingTop:8,
        paddingLeft:10
      },
})