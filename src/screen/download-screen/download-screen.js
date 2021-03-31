import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, Image,ScrollView} from 'react-native'
import style from './style'
import data from '../../data'

const downloadscreen = () => {
    
    return(
        <View>
            <ScrollView>
               
               <Text></Text>
               {data.map((film)=>{
                   return <View style={style.container}>
                           <ScrollView horizontal={true}>
                            <Image style={style.image} source={film.image}/>
                          <View style={style.Text}>
                           <Text style={style.textHead}>{film.name}</Text>
                           <Text style={style.title}>{film.eposide} {film.capacity}</Text>
                          </View>
                           </ScrollView>

                        </View>
                        })}
               {/* {data.map((film)=>{return <Text>{film.eposide}</Text>})} */}
            </ScrollView>

        </View>
    )
}
export default downloadscreen