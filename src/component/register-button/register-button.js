import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'

import style from './style'
const registerbutton = (props) =>{
    return(
    <View style={style.container}>
       <Text style={style.titleacc}>Don't have account?</Text>
       <Text style={style.titleres}>REGISTER</Text>
    </View>
      
    )
}
export default registerbutton