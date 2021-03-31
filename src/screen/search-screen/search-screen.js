import {useLinkProps, useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, Image,ScrollView,SectionList} from 'react-native'
import style from './style'

import SearchInput from '../../component/search-input'
const searchscreen = () => {
    return(
        <View style={style.container}>
        <ScrollView>
        <SearchInput/>
            <View style={style.body}>
            <Text style={style.title}>HOT MOVIE</Text>
             <ScrollView style={style.section} horizontal={true}>
                 <Image style={style.Image} source={require('../../img/busan.jpg')}/>
                 <Image style={style.Image} source={require('../../img/deadpool.jpg')}/>
                 <Image style={style.Image} source={require('../../img/anabel.webp')}/>
             </ScrollView>
            <Text style={style.title}>TV SHOWS</Text>
            <ScrollView style={style.section} horizontal={true}>
                 <Image style={style.Image} source={require('../../img/p3.jpg')}/>
                 <Image style={style.Image} source={require('../../img/hot.jpg')}/>
             </ScrollView>
             <Text style={style.title}>MOVIE</Text>
             <ScrollView style={style.section} horizontal={true}>
                 <Image style={style.Image} source={require('../../img/p2.jpg')}/>
                 <Image style={style.Image} source={require('../../img/p1.jpg')}/>
             </ScrollView>
            </View>
        </ScrollView>


        </View>
   )
}
export default searchscreen