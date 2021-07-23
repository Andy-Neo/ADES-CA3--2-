import React, { Component } from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';


import Line from './line';

export default class Rows extends Component{
    render(){
        return(
            <View style = {{flexDirection:'column'}}>
                <Line/>
                    <View style = {styles.scale}>
                        <Text style ={{fontWeight:'bold', fontSize:19,left:6,bottom:11}}>{this.props.title}</Text>
                        <View style ={{flexDirection:'row',bottom:9}}>
                            <Icon2 name = "dot-single" size = {20} style ={{top:2}}/>
                            <Text style = {{fontSize:17}}>{this.props.text1} :</Text>
                            <Text style = {{fontSize:17}}> {this.props.text2}</Text>
                        </View>  
                        <View style ={{flexDirection:'row',bottom:9}}>
                            <Icon2 name = "dot-single" size = {20} style ={{top:2}}/>
                            <Text style = {{fontSize:17}}>{this.props.text3} :</Text>
                            <Text style = {{fontSize:17}}> {this.props.text4}</Text>
                        </View>  
                    </View>
                <Line/>
            </View>          
        );
    }
}
const styles = StyleSheet.create({
    scale:{
        marginLeft:30,
        marginVertical:15
    }
});