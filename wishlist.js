import React, { Component } from 'react';
import {View,Image, Button, TextInput,Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome';

import Line from './components/line';
import Seperator from './components/flatlistSeperator';
import Header from './components/header';
import DefaultFlatlist from './components/defaultFlatlist';

class wishlist extends Component {

    constructor(props){
        super(props);
        this.state = {
            rowData : [],

            iconColour : "red"
    
        }
        
       
    }

    componentDidMount = () => {
        fetch('http://10.0.2.2:8001/wishlist', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
           this.setState({
              rowData: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
     }

    deleteItemById = (id) => {
        const filteredData = this.state.rowData.filter(item => item.id !== id);
        this.setState({rowData: filteredData});
        fetch('http://10.0.2.2:8001/wishlist/' + id, {
           method: 'DELETE'
        })
        /* componentDidMount = () => {
        fetch('http://10.0.2.2:8001/wishlist' + item.id, {
           method: 'DELETE'
        })
         .then((response) => response.json())
        .then((responseJson) => {
           //console.log(responseJson);
           this.setState({
              rowData: responseJson
           })
        }) 
        .catch((error) => {
           console.error(error);
        });
     }  */
    }

    

    renderItem = ({item}) =>{
        return(<TouchableOpacity onPress = {()=> this.props.navigation.navigate("product")}>
            <View style = {styles.flatlistStyle}>
                <Image
                    source = {{uri:item.imgurl}} style={{height:80, width:80}}
                />
                <DefaultFlatlist text={item.name} subtext={item.category}/>

                <TouchableOpacity onPress = {()=> this.deleteItemById(item.id)}>
                    <Icon name = "delete" style = {styles.deleteIcon} size = {12}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>)
    }

    renderSeparator = () => <Seperator/>;
    
    render(){
        return(
            <View style = {styles.container}>  
                <ImageBackground style = {styles.backgroundImage} source = {require('./images/wish.jpg')}>
                    <View style = {styles.subContainer}>
                        <Icon4 name = "bars" style = {styles.barIcon} size = {22}/>    
                        <Text style = {styles.header}>
                            Your Wishlist
                        </Text>
                    </View>

                    <View style = {{marginLeft:20,marginTop:-20}}>  
                        <Header title = 'Time to Start' subTitle = 'Saving'/>
                    </View>
                </ImageBackground>


                <Line/>

                <FlatList          
                    data={this.state.rowData}
                    keyExtractor={item =>item.id.toString()}   
                    extraData = {this.state}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator} 
                />
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    subContainer:{
        flexDirection:'row',
    },
    backgroundImage:{
        width:'100%',
       height:140
    },
    barIcon:{
        paddingRight:7,
        paddingTop:37,
        marginLeft:20
    },
    header:{
        fontSize:25,
        marginTop:30
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'grey',
       
        width : '100%',
        
    },
    lineStyle3:{
        borderWidth: 1,
        borderColor:'grey',
        margin:10,
        width : 450,
        marginBottom:20
    },
    flatlistStyle:{
        flex:1,
        flexDirection:'row',
        marginRight:160,
        paddingLeft:30,
        paddingVertical:10,
    },
    flatlistText:{
        fontSize:20,
        paddingBottom:5
    },
    flatlistSub:{
        fontSize:15,
        color:'rgb(120,120,120)',
        fontWeight:'bold'
    },
    bell:{
        marginTop:35,
        
        marginLeft:40
    },
    deleteIcon:{
        //position:'absolute',
        marginLeft:40,
        marginTop:10,
        color:'red'
    },
    navigateIcon:{
        color:'grey',
        paddingHorizontal:40,
        paddingBottom:15
    },
    navigateIcon1:{
        color:'rgb(56, 190, 235)',
        paddingHorizontal:40,
        paddingBottom:15
    },
    iconText:{
        textAlign:'center',
        bottom:10
    }
});
export default wishlist;