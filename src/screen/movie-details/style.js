import {StyleSheet} from 'react-native'
const black_theme = {
    BGColor: 'black',
    FontColor: {
      main: 'white',
      second: 'rgba(255,255,255,0.64)',
    },
    menuColor: 'rgba(0,0,0,0.53)',
    iconMenuColor: 'rgba(255,255,255,0.75)',
    activeicon: 'rgb(255,178,36)',
  };
export default StyleSheet.create({
    cover:{
        width:'100%',
        height:300,
        position:'absolute',
        opacity:0.6
    },
    container:{
        backgroundColor:'black',
        height:'100%'
    },
    name:{
        color:'white',
        marginLeft:20,
        fontSize:20
    },
    rating: {
        color: black_theme.activeicon,
        fontSize: 25,
        marginBottom: 15,
        textAlign:'center'
      },
      body:{
          marginTop:250
      },
      film:{
          color:'white',
          textAlign:'center'
      }
})