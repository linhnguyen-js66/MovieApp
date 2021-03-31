import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import style from './style'
const inputForm = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>{props.title}</Text>
            <TextInput placeholder={props.text} style={style.inputContainer} onChangeText={props.onChange}/>
        </View>
    )
}
export default inputForm