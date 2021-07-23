import React,{Component} from 'react';
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
import{createStackNavigator, StackView} from '@react-navigation/stack';

import loginPage from './login';
import navigationScreen from './navigation';
import settings from './settings';
import product from './mainFunction';
import specs from './specifications';
const Stack = createStackNavigator();

class stackNav extends Component {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName = "LoginPage" screenOptions={{headerShown: false}}>
                    <Stack.Screen name = "LoginPage" component = {loginPage}/>
                    <Stack.Screen name = "main" component = {navigationScreen}/>
                    <Stack.Screen name = "product" component = {product}/>
                    <Stack.Screen name = "specs" component = {specs}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default stackNav;