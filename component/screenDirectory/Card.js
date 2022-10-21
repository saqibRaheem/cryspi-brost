import { Dimensions, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Color from '../../consts/color';
import Icon from 'react-native-vector-icons/Ionicons'
// import { Button } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-web';
// import Brost from '../../consts/brost';
const width = Dimensions.get("screen").width/2-30


export default function Card({Brost}) {

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('d',Brost)}>

    <View style={styles.card}>
      
      <View style={{height:100,alignItems:'center'}}>
      <Image
        style={styles.stretch}
        source={Brost.img}
      />
       </View>
       <View style={{marginTop:10}}>
      <Text style={{fontWeight:'bold',fontSize:17,marginBottom:10,}} >{Brost.name}</Text>
       </View>
       <View style={styles.price}>
        <Text style={{fontWeight:'bold',fontSize:20}}>{Brost.price}</Text>
       <View style={{
        height:25,
        width:25,
        backgroundColor:Color.green,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'

       }}>
        <Icon name='add' style={{fontSize:22,fontWeight:'bold',color:'white', textAlign:'center'}}/>
       </View>
       </View>
       <View style={{alignItems:'flex'}}>
        <View style={{
          width:30,
          height:30,
          borderRadius:15,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:Brost.like
          ? 'rgba(245,42,42,0,2)'
          : 'rgba(0,0,0,0.2)'
        }} >
          <Icon name="heart" size={20} 
          color={Brost.like ? Color.red:Color.dark}/>
      </View>
      {/* <Button>add cart</Button> */}
        </View>
    </View>
    </TouchableOpacity>
  )
}
// console.log("hakdfgjadf"+ Brost.img);
const styles = StyleSheet.create({
    card:{
        height:225,
        backgroundColor:Color.light,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        padding:15,
    },
    stretch:{
       flex:1,
      resizeMode:'contain',
      width:1000,
      height:1000,
    },
    price:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:1
    }
})