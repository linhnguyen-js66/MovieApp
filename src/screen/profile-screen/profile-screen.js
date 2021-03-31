import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import style from './style'
import ProfileHead from '../../component/profile head'
import ProfileBody from '../../component/profile-body'
const profilescreen = () =>{
    return(
       <View style={style.container}>
            <ProfileHead/>
            <ProfileBody/>
       </View>
    )
}
export default profilescreen