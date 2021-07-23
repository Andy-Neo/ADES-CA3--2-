import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlightComponent,
  Linking
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TouchableOpacity } from 'react-native-gesture-handler';


//components
import Links from './components/links';
import CustomButton from './components/customButton';

const Tab = createMaterialTopTabNavigator();

const images = [
  'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg',
  'https://m-cdn.phonearena.com/images/article/126835-two_1200/The-Apple-iPhone-12-Pro-and-Max-prices-tipped-a-5G-premium-over-iPhone-11.jpg',
  'https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/10/apple_iphone12pro-pacific-blue_10132020_full-bleed.jpg'
]

class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
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

  render() {
    const { active } = this.state;
    return (
      <View style={styles.container}>
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
          <Icon name = "closecircleo" color = {"white"}  size = {20} style = {styles.iconStyle} onPress = {()=> this.props.navigation.goBack()}/>
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
        
        <View style = {{flexDirection:'row', marginRight:120,paddingTop:20}}>
          <Text style = {styles.header}>Iphone 12 Pro</Text>
            <Links text='Critics Reviews: 4.8/5'/>
        </View>
        <View style = {styles.lineStyle}/>
        <TouchableOpacity  onPress = {()=> this.props.navigation.navigate("specs")}>
          <View style = {{flexDirection:'row'}}>
            <View style = {{marginRight:115}}>
              <Text style = {{fontWeight:'bold',fontSize:17}}>
                  Specifications
                </Text>
                <Text style = {{color:'rgb(100,100,100)'}}>
                  Brand,model,Processor Type, Release Date
                </Text>
            </View>
            <View>
              <Icon2 name = "angle-right" color = {"black"}  size = {20} style ={{top:12}}/>
            </View>
          </View>
          </TouchableOpacity>
          <View style = {styles.lineStyle}/>
        <View style = {{marginTop:20,paddingHorizontal:20,paddingBottom:60}}>
          <Text style = {styles.textStyle}>
              The latest release of the Iphone series as of February 2021
            </Text>
            <Text style = {styles.textStyle}>
              The Iphone 12 Pro is a worthy contender for the phone of the year. Great features and value all around.
            </Text>
            <Text style = {styles.textStyle}>
               With the fastest processor and a triple lens camera, this phone will be a good fit in anyone's hands.
            </Text>
            <Text style = {{fontSize:19,fontWeight:'bold',textAlign:'center',top:40}}>
              Verdict: Worth it!
            </Text>
        </View>
          
           <CustomButton text = "Best Price: $899"/>
        </View>

      
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25 // 25% window
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
  },
  header:{
    fontSize:24,
    paddingLeft:7
  },
  critics:{
    color : "rgb(121,202,237)",
    paddingTop:8,
    paddingLeft:10
  },
  textStyle:{
    fontSize:16
  },  
  lineStyle:{
    borderWidth: 0.7,
    borderColor:'grey',
    margin:20,
    width :'100%',
    marginTop: 25,
},
button:{        
  backgroundColor: "rgb(162, 221, 252)",
  marginHorizontal:10,
  paddingVertical: 5,
  borderRadius: 30,
  marginTop: 30,     
  height: 50,
  width:'40%'
},

});

export default product;

    