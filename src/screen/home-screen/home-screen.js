import {useLinkProps, useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, Image,ScrollView} from 'react-native'
import style from './style'
import FilmHead from '../../component/imgfilm-head'
import Description from '../../component/description'
import ScrollRow from '../../component/scroll-row'
const homescreen = () => {
    return(
        <View style={style.container}>
            <ScrollView>
                <FilmHead imagename={require('../../img/phim1.png')}/>
                <View style={style.container}>
                <Description point="4.0"/>
                <Text style={style.rating}>★★✰✰✰</Text>
                <View style={style.father}>
                   <Description title="Movie"/>
                   <Description title="Adventure"/>
                   <Description title="Comedy"/>
                   <Description title="Family"/>
                </View>
                <Text style={style.title}>Watching</Text>
                <ScrollView horizontal={true}>
                  <ScrollRow imagename={require('../../img/narcos.jpg')}/>
                  <ScrollRow imagename={require('../../img/deadpool.jpg')}/>
                  <ScrollRow imagename={require('../../img/anabel.webp')}/>
                  <ScrollRow imagename={require('../../img/busan.jpg')}/>
                </ScrollView>
                
                </View>
            </ScrollView>
        </View>
    )
}
export default homescreen