import React from 'react'
import {View, Text, Button, TextInput,Image} from 'react-native'
import style from './style'

const registerhead = () =>{
    return (
        <View>
           <Image source={require('../../img/user.png')} style={style.avatar}/>
           <Text style={style.title}>Add profile picture</Text>
        </View>
    )
}
export default registerhead