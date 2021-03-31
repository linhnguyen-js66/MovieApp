import React from 'react'
import {View, Text, Button, TextInput,Image, ScrollView} from 'react-native'
import style from './style'

const scrollrow = (props) =>{
    return(
        <View>
           
         
          
                <Image source={props.imagename} style={style.Image} onPress={props.handleClick} onPress={props.movieClick}/>
    



        </View>
     
      
    )
}
export default scrollrow