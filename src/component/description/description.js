import {useLinkProps, useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import style from './style'

const description = (props) =>{
    return(
        <View style={style.container}>
 
              <Text style={style.actor}>{props.actor}
                  <Text style={style.point}>{props.point}
                      <Text style={style.title}>{props.title}</Text>
                  </Text>
            </Text>
        
        </View>
    )
}
export default description