import {useLinkProps, useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text,TextInput ,Button, StyleSheet, Image,ScrollView,SectionList} from 'react-native'
import style from './style'
import {Icon} from 'react-native-elements'
const searchinput = () =>{
    return(
        <View style={style.container}>
            <Icon name="search" type="fontisto" color="white" style={style.searchIcon}/>
            <TextInput placeholder="Search film"
            placeholderTextColor="rgb(200,200,200)"style={style.input}/>
        </View>
    )
}
export default searchinput