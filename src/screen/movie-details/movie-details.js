import React, {useState} from 'react'
import {View, Text, Button, StyleSheet,Image,ScrollView} from 'react-native'
import style from './style'
import Description from '../../component/description'
import ButtonWatch from '../../component/button-watch'
import ScrollRow from '../../component/scroll-row'
import {useNavigation} from '@react-navigation/native'
const moviedetails = () => {
    const navigation = useNavigation()
    const clickActorDetail = () => {
        navigation.navigate('castDetails')
    }
    return(
        <ScrollView style={style.container}>
            <Image style={style.cover} source={require('../../img/cover.png')}/>
        <View style={style.body}>
             <Text style={style.name}>Dora and the Lost city of gold</Text>
            <View style={{display:'flex',flexDirection:'row',marginLeft:10}}>
            <Description title="Movie"/>
            <Description title="Adventure"/>
            <Description title="Compedy"/>
            <Description title="Family"/> 
            </View>
            <Description  point="4.0"/>
            <Text style={style.rating}>★★✰✰✰</Text>  
            <Description title="Having spent most of her life exploring the jungle
            nothing could prepare Dora for her most dangerous 
            adventure yet - high school"/>
            <ButtonWatch title="WATCH NOW"/>
        </View>
        <Text style={{color:'white', fontWeight:"bold", marginLeft:10}}>Cast</Text>
        <ScrollView style={style.footer} horizontal={true}>
            <View>
            <ScrollRow imagename={require('../../img/a1.png')} handleClick={clickActorDetail}/>
            <Text style={style.film}>Michael Pẽna</Text>
            </View>
            <View>
            <ScrollRow imagename={require('../../img/a2.png')} handleClick={clickActorDetail}/>
            <Text style={style.film}>Eva Longoria</Text>
            </View>
            <View>
            <ScrollRow imagename={require('../../img/a3.png')} handleClick={clickActorDetail}/>
            <Text style={style.film}>Isabela Moner</Text>
            </View>
            <View>
            <ScrollRow imagename={require('../../img/leo.png')} handleClick={clickActorDetail}/>
            <Text style={style.film}>Leonardo DiCaprio</Text>
            </View>
        </ScrollView>
        </ScrollView>
    )
}
export default moviedetails