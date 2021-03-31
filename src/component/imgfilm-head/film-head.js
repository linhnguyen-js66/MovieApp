import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import style from './style'

const filmhead = (props) =>{
    // const image
    return(
        <View style={style.container}>
        
            <Image style={style.imghead} source={props.imagename}/>

        </View>
    )
}
export default filmhead