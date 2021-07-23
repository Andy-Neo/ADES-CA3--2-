import React, { Component } from 'react';
import {View,Image, TextInput,Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';

import {
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableHighlightComponent,
    Linking
  } from 'react-native';
  
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  

import Line from './components/line';
import Seperator from './components/flatlistSeperator';
import Header from './components/header';
import DefaultFlatlist from './components/defaultFlatlist';
import RecentSearch from './components/recentSearches';
import Links from './components/links';

const Tab = createMaterialTopTabNavigator();

const images = [
  'https://www.topendsports.com/sport/images/skateboard-downhill-pixa.jpg',
  'https://i2.wp.com/www.knklongboardcamp.com/wp-content/uploads/knk-longboard-camp-2018-presente.jpg?resize=1280%2C500&ssl=1',
  'https://thenotesfromtheocean.files.wordpress.com/2017/11/023val_7730.jpg?w=880'
]

class settings extends Component{
      
    constructor(props){
        super(props);
        this.state ={
            rowData : [
            ],
            
            searchInput :"",
            active:0,
            wishlistData:[]
        }
        
    }

    change(nativeEvent) {
        // console.log("nativeEvent:", nativeEvent)
        if(nativeEvent) {
          const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
          if (slide !== this.state.active) {
          this.setState({
            active:slide
          })
          }
        }
      
      }

     componentDidMount = () => {
      fetch('http://10.0.2.2:8001/longboards', {
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

   getItemById = (id) => {
      fetch('http://10.0.2.2:8001/longboards/' + id, {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson)
         fetch('http://10.0.2.2:8001/addWishlist',{
             method:'POST',
             body:JSON.stringify({          
                 name:"test",
                 category:"test2"
             })
         })
         .then((response) => response.json())
         .then((responseJson) => { console.log('response:', responseJson); })
         .catch((error) => { console.error(error); });
         //console.log(body)
      })
      .catch((error) => {
         console.error(error);
      });
}

    renderItem = ({item}) =>{
        return(<TouchableOpacity onPress = {()=> Linking.openURL(item.produrl).catch(err => {console.log(err)})}>
                <View style = {styles.flatlistStyle}>
                <Image
                    source = {{uri:item.imgurl}} style={{height:80, width:80}}
                />
                <DefaultFlatlist text={item.name} subtext={item.category} subtext2 ={"$"+item.price}/>
                </View>
                <TouchableOpacity style = {{bottom:50,left:350}} onPress = {()=> this.getItemById(item.id)}>
                    <Icon name = "heart" style = {styles.deleteIcon} size = {12}/>
                </TouchableOpacity>
            </TouchableOpacity>)
    }

    renderSeparator = () => <Seperator/>;

    render(){
        const { active } = this.state;
        return(
            //parent container
            <View style = {styles.container}>

                <View style ={styles.topPart}>
                    <Icon name = "search1" style = {styles.searchIcon} size = {20}/>
                    <TextInput 
                        onChangeText={(searchInput) => this.setState({searchInput})} value={this.state.name}
                        style = {styles.searchBar}
                        placeholder = "Search for boards"
                    />

                    <TouchableOpacity style = {styles.logout}  onPress={() => this.props.navigation.popToTop()}>
                        <Icon3 name = "logout" size = {28} style = {{color:'red'}}/>
                    </TouchableOpacity>
                </View>        

                <View>
                    <View style={styles.wrap}>
                    <ScrollView
                        onScroll={({ nativeEvent })=>this.change(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={styles.wrap}
                    >
                    {
                    images.map((e, index) =>
                        <Image 
                        key={e}
                        resizeMode="stretch"
                        style={styles.wrap}
                        source={{ uri: e }}
                        />
                    )
                    }
                    </ScrollView>
                    <View style={styles.wrapDot}>
                    
                        <Text style = {{bottom:100}}>
                            
                        </Text>
                        {
                        images.map((e, index) =>
                            <Text
                            key={e}
                            style={active === index ? styles.dotActive : styles.dot}>●</Text>)
                        }
                    </View>
                </View>

                </View>

                <View>
                    <Header title='The place to find the' subTitle='best deals and prices'/>
                </View>
                
                <Line/>

                <FlatList          
                    /* data={this.state.rowData} */
                    data = {this.state.rowData.filter(item => item.name.includes(this.state.searchInput))}
                    renderItem={this.renderItem}
                    keyExtractor={item =>item.id.toString()}   
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
   
    header:{
        fontSize:22,
        fontWeight:"bold",
        marginRight:125,
        paddingTop:30,
    },
    header2:{
        fontSize:22,
        fontWeight:"bold",
        color:"rgb(121,202,237)",
    },
    topPart:{
        paddingBottom:15,
        marginRight:63,
        flexDirection:'row'
    },
    searchBar:{
        paddingTop:10,
        paddingBottom:10,
        width:265,
        marginTop:20,
        backgroundColor:'rgb(230, 230, 230)',
        borderRadius:15,
        fontSize: 15,
        left:15
    },
    searchIcon:{
        position:'absolute',
        top: 33,
        left: -18,
       
    },
    logout:{
        top:30,
        left:75,
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'grey',
        margin:10,
        width : 350,
        marginTop: 25,
    },
    lineStyle2:{
        borderWidth: 1,
        borderColor:'grey',
        width : 450,
    },
    lineStyle3:{
        borderWidth: 1,
        borderColor:'grey',
        margin:10,
        width : 450,
        marginBottom:20
    },
    deleteIcon:{
        //position:'absolute',
        //marginTop:10,
        color:'red'
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
        color:'rgb(58, 157, 207)'
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
    },
    wrap: {
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.25 ,// 25% window
        borderRadius:5
      },
      wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
      },
      dot: {
        margin: 3,
        color: '#888'
      },
      dotActive: {
        margin: 3,
        color: 'black'
      },
      iconStyle: {
        bottom:150,
        left:200
      }
});

export default settings;