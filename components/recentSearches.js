import React, { Component } from 'react';
import {View,Image, TextInput,Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';

export default class RecentSearch extends Component{
    render(){
        return(
            <TouchableOpacity style = {styles.recent}>
                <TouchableOpacity>
                    <Icon2 name = "cross" style = {styles.crossIcon}  size = {11}/>
                </TouchableOpacity>
                <Text>
                    {this.props.text}
                </Text>                       
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    crossIcon:{
        position:'absolute',
        top: -5,
        right:-47
    },
    recent:{
        borderRadius:5,
        backgroundColor:'rgb(230,230,230)',
        width:100,
        height:30,
        marginLeft:10,
        marginTop:5,
        alignItems:'center',
        justifyContent:'center'
    },
})