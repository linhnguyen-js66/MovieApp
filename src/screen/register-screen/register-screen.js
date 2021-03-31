import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, TextInput, ScrollView} from 'react-native'
import InputForm from '../../component/input-form'
import RegisterHead from '../../component/register-head'
import styles from './style'
import ButtonLogin from '../../component/login-button'

const registerScreen = () =>{
    const navigation = useNavigation()
    return(
        <ScrollView>
        <View style={styles.container}>
            <RegisterHead/>
           
            <InputForm title="FIRSTNAME"/>
            <InputForm title="LASTNAME"/>
            <InputForm title="EMAIL"/>
            <InputForm title="PASSWORD"/>
            <InputForm title="CONFIRMPASSWORD"/>
            <ButtonLogin title="REGISTER" onPress={()=>navigation.navigate('Login')}/>
        </View>
        </ScrollView>
    )
}
export default registerScreen