import { View } from "react-native";

import React, { Component } from 'react';

export default class Line extends Component{
    render(){
        return(
            <View
                style = {{
                    borderWidth: 1,
                    borderColor:'grey',
                    width : 450,
                }}
            />
        )
    }
}