import React from 'react'
import {View,Text,Button,Image} from 'react-native'
import style from './style'
const profilehead = () =>{
    return (
         <View style={style.container}>
             <Image style={style.img} source={require('../../img/sontung.jpg')}/>
             <Text style={style.profileContent}>Son Tung MT-P</Text>
             <Text style={style.posCard}>Predium</Text>
        </View>
    )
}
export default profilehead