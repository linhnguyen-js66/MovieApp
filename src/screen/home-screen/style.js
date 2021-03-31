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
    father:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    title:{
        marginHorizontal:15,
        marginTop: 10,
        fontSize:17,
        fontWeight:'bold',
        color:'#595959'
    },
    container:{
        backgroundColor:'#f5f5f5',
        height:'100%'
    }, 
    rating: {
        color: black_theme.activeicon,
        fontSize: 25,
        marginBottom: 15,
        textAlign:'center'
      }
})