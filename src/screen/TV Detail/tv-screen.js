import {useLinkProps, useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet,Image,ScrollView} from 'react-native'
import style from './style'
import Description from '../../component/description'
import ButtonWatch from '../../component/button-watch'
import video from '../../datavideo'
import {Icon} from 'react-native-elements'
const tvscreen = () => {
    return(
        <View>
              <ScrollView style={style.container}>
              <Image style={style.cover} source={require('../../img/covermovie.png')}/>
             <View style={style.body}>
             <Text style={style.name}>Narcos</Text>
            <View style={{display:'flex',flexDirection:'row',marginLeft:10}}>
            <Description title="Drama"/>
            <Description title="Biographical"/>
            <Description title="Crime Film"/>
            <Description title="Crime Fiction"/> 
            </View>
            <Description  point="9.0"/>
            <Text style={style.rating}>★★★★✰</Text>  
            <Description title="Netflix chronicles the rise of the cocaine trade in Colombia
            and the gripping real-life stories of drug kingpins of the late '80s in this raw,
            gritty original series"/>
            <ButtonWatch title="WATCH NOW"/>
            <Text style={{color:'white', fontWeight:"bold", marginLeft:10}}>Episodes</Text>
            {video.map((film)=>{
                   return <View style={style.list}>
                           <ScrollView horizontal={true}>
                            <Image style={style.image} source={film.video}/>
                          <View style={style.Text}>
                           <Text style={style.textHead}>{film.videoname}</Text>
                           <Text style={style.title}>{film.time}</Text>
                           <View style={style.buttonIcon}>
                            <Icon name='download' type='antdesign' color='#ffac12'></Icon>
                            <Text style={style.titlebutton}>Download</Text>
                           </View>

                          </View>
                           </ScrollView>

                        </View>
                        })}
            </View>
                        </ScrollView>
        </View>
    )
}
export default tvscreen