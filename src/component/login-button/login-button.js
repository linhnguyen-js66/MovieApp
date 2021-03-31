import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import style from './style'
const buttonLogin = (props) => {
    return(
        <View style={style.container}>
            <Button style={style.buttonLogin} color='#ffac12' title={props.title}/>
        </View>
            )
}
export default buttonLogin