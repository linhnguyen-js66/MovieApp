import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, Image,ScrollView} from 'react-native'
import style from './style'
import FilmHead from '../../component/imgfilm-head'
import Description from '../../component/description'
import ScrollRow from '../../component/scroll-row'
const actorscreen = () => {
    const navigation = useNavigation()
    const movieDetails = () =>{
        navigation.navigate('detail')
    }
    return(
        <View style={style.container}>
           <ScrollView>
             
          
               <FilmHead imagename={require('../../img/actor1.png')}/>
                <Description actor='Michael Pẽna'/>
                <Description title='Michael Penxa was born and raised in Chicago,
                to Nicolasa, a social worker. and Eleu Terio Pexna, who
                worked at button factory. His parents were 
                originally from mexico'/> 
                <Text style={style.displaytext}>Known for</Text>
                <ScrollView horizontal={true}>
                       <ScrollRow imagename={require('../../img/micheal1.jpg')} movieClick={movieDetails}/>
                       <ScrollRow imagename={require('../../img/micheal2.jpg')} movieClick={movieDetails}/>
                       <ScrollRow imagename={require('../../img/micheal3.jpg')} movieClick={movieDetails}/>
                       <ScrollRow imagename={require('../../img/micheal4.jpg')} movieClick={movieDetails}/>
                </ScrollView>
            </ScrollView> 
        </View>
    )
}
export default actorscreen