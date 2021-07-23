import React, {Component} from 'react';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import homePage from './homepage';
import wishlist from './wishlist';
import settings from './settings';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';


class navigationScreen extends Component {
    render(){
        return(
            
            <Tab.Navigator initialRouteName="Search" tabBarOptions={{activeTintColor: 'rgb(56, 190, 235)',}}>
                <Tab.Screen
                    name="Search"
                    component={homePage}
                    options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color}) => (
                        <Icon name="search1" color={color} size={22} />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Wishlist"
                    component={wishlist}
                    options={{
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: ({color}) => (
                        
                        <Icon name="heart" color={color} size={22} />
                        
                    ),
                    }}
                />
            </Tab.Navigator>
           
        )
    }
}

export default navigationScreen;