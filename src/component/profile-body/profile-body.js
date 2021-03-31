import React from 'react'
import {View, Text, Button} from 'react-native'
import style from './style'
import {useLinkProps, useNavigation} from '@react-navigation/native'
import Icons from 'react-native-vector-icons/Ionicons'
import {Icon} from 'react-native-elements'


const profilebody = () =>{
    return(
        <View style={style.container}>
        <View style={style.lineone}>
            <Icon name='user' type='antdesign' style={style.buttonIcon} color='white'></Icon>
            <Text style={style.title}>Acount</Text>
       </View>    
       <View style={style.linetwo}>
            <Icon name='notifications' type='ionicons' style={style.buttonIcon} color='white'></Icon>
            <Text style={style.title}>Notifications</Text>
       </View> 
       <View style={style.linetwo}>
            <Icon name='player-settings' type='fontisto' style={style.buttonIcon} color='white'></Icon>
            <Text style={style.title}>Settings</Text>
       </View>
       <View style={style.linetwo}>
            <Icon name='infocirlce' type='antdesign' style={style.buttonIcon} color='white' ></Icon>
            <Text style={style.title}>Help</Text>
       </View>
       <View style={style.linetwo}>
            <Icon name='logout' type='MaterialCommunityIcons' style={style.buttonIcon} color='white'></Icon>
            <Text style={style.title}>Logout</Text>
       </View>        
        </View>
    )
}
export default profilebody