import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import InputForm from '../../component/input-form'
import LoginHead from '../../component/login-head'
import style from './style'
import ButtonLogin from '../../component/login-button'
import ViewOverflow from 'react-native-view-overflow'
const forgotScreen = () =>{
    return(
        <View style={style.container}>
          
            <LoginHead/>
            <Text style={style.titlehead}>FORGOT PASSWORD</Text>
            <Text style={style.title}>Enter the email address you used to 
                create your account and we will email
                you a link to reset your password</Text>
            <InputForm title="EMAIL"/>
            <ButtonLogin title="SEND EMAIL"/>
        </View>
    )
}
export default forgotScreen