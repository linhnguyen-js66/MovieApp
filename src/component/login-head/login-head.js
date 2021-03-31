import React from 'react'
import {View, Text, TextInput, Button,Image} from 'react-native'

import style from './style'
const loginhead = (props) =>{
    return(
    <View style={style.container}>
      <Image style={style.image} source={require('../../img/logo.png')}/>
      <Text style={style.textLogo}>PHOTOPLAY</Text>
    </View>
      
    )
}
export default loginhead