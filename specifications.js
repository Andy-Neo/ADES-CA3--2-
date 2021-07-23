import React, { Component } from 'react';
import {View , Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Rows from './components/rows';
class specs extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Icon name = "arrow-back" style = {{right:180,top:48}} size ={25} onPress = {()=> this.props.navigation.goBack()}/>
                <Text style = {{fontWeight:'bold',fontSize:20,paddingVertical:20,marginBottom:20}}>Iphone 12 Pro Specifications</Text>
                <Rows title ="LAUNCH" text1 ="Year" text2 = "2020" text3="Month/Day" text4 ="October"/>
                <Rows title ="NETWORK" text1 ="Technology" text2 = "GSM/CDMA/HSPA/EVDO/LTE/5G" text3 ="Wifi" text4="Wi‑Fi 6 (802.11ax) with 2x2 MIMO"/>
                <Rows title ="DISPLAY" text1 = "Size" text2 = "6.1 inches, 90.2 cm2" text3 = "Resolution" text4 = "1170 x 2532 pixels, 19.5:9 ratio "/>
                <Rows title = "PLATFORM" text1 ="OS" text2 = "iOS 14.1, upgradable to iOS 14.4" text3 ="Chipset" text4 ="Apple A14 Bionic (5 nm)"/>
                <Rows title = "BATTERY" text1 = "Type" text2 ="Li-Ion 2815 mAh, non-removable" text3 = "Fast charging 20W, 50% in 30 min"/>
                <Rows title = "CAMERA" text1 = "Features" text2 ="Dual-LED dual-tone flash, HDR" text3 ="Video" text4 ="4K@24/30/60,1080p@30/60/120/240"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    }
})

export default specs;