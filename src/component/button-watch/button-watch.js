import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import style from './style'
const buttonwatch = (props) => {
    return(
        <View style={style.container}>
            <Button color="#ffbb3b" style={style.button} title={props.title}/>
        </View>
            )
}
export default buttonwatch