import React, { Component } from 'react';
import {View,Text,StyleSheet,} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View>
                <Text style = {styles.header}>{this.props.title}</Text>
                <Text style = {styles.header2}>{this.props.subTitle}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:{
        fontSize:22,
        fontWeight:"bold",
        marginRight:160,
        marginTop:20,
    },
    header2:{
        fontSize:22,
        fontWeight:"bold",
        color:"rgb(255, 209, 8)",
        paddingBottom:20
    },
})
