import React from 'react'
import {View, Text, TextInput, Button,Image} from 'react-native'

import style from './style'
const sociallogin = (props) =>{
    return(
    <View>
        <Text style={style.texthead}>Social Logins</Text>
        <View style={style.container}>
            <Image style={style.image} source={require('../../img/logo-fb.png')}/>
            <Image style={style.imageGoogle}source={require('../../img/logo-gg.png')}/>
        </View>
    </View>
      
    )
}
export default sociallogin