import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native'
import InputForm from '../../component/input-form'
import ButtonLogin from '../../component/login-button'
import SocialLogin from '../../component/social-login'
import style from './style'
import LoginHead from '../../component/login-head'
import RegisterButton from '../../component/register-button'
const loginscreen = () => {
    const [username,setUsername] = React.useState('')
    const [pwd,setPwd] = React.useState('')
    
    const getInputFormUsername = (text) =>{
        setUsername(text)
    } 
    const getInputFormPwd = (text) => {
        setPwd(text)
    }
    const navigation = useNavigation()
    return(
        <View style={style.container}>
              <Image source={require('../../img/Image1.jpg')} style={{position:'absolute',height:'100%',opacity:0.7}}/>
              <LoginHead/>
      
         
         <InputForm text="email here" title="Email" onChange={getInputFormUsername}/>
          <InputForm text="password here" title="Password" onChange={getInputFormPwd}/>
          <ButtonLogin onPress={()=> navigation.navigate('home')} title="Login"/> 
       
         
    
               <SocialLogin/>
   
            
    
              <RegisterButton onPress={()=> navigation.navigate('Register')} />
      
              
              <Text style={style.forgot} onPress={()=> navigation.navigate('Forgot')}>Forgot your account ?</Text>
              
        </View>
    )
}
export default loginscreen