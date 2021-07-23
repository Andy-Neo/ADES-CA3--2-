import React, { Component } from 'react';
import { StyleSheet, View, Text,Image} from 'react-native';

export default class DefaultFlatlist extends Component {
    render(){
        return (
                <View style={{flexDirection: 'column', paddingLeft:30, justifyContent: 'center'}}>
                    <Text style={styles.flatlistText}>{this.props.text}</Text>
                    <Text style={styles.flatlistSub}>{this.props.subtext}</Text>
                    <Text style = {styles.flatlistSub2}>{this.props.subtext2}</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    flatlistStyle:{
        flex:1,
        flexDirection:'row',
        //marginRight:160,
        //paddingLeft:30,
        paddingVertical:10,
    },
    flatlistText:{
        fontSize:20,
        paddingBottom:5,
        fontWeight:'bold'
    },
    flatlistSub:{
        fontSize:15,
        color:'rgb(20,20,20)'
    },
    flatlistSub2:{
        fontSize:18,
        fontWeight:'bold',
        color:'rgb(237, 167, 2)'
    }
})