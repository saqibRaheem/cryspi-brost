import { StyleSheet,SafeAreaView, Text, View ,TextInput,FlatList} from 'react-native'
import React from 'react'
import Color from '../../consts/color'
import Icon from 'react-native-vector-icons/Ionicons'
import Brost from '../../consts/brost'
import Card from './Card'
import Service from './Service'


export default function HomeScreen({navigation}) {
  return (
   <SafeAreaView 
   style={{
    flex:1,
    paddingHorizontal:20,
    backgroundColor:Color.white,
   }}>
     <View style={styles.header}>
        <View>
            <Text style={{fontSize:25, fontWeight:'bold'}}>WelCome To</Text>
            <Text style={{fontSize:35, fontWeight:'bold', color:Color.green }}>Crispy Broast</Text>
        </View>
        <Icon name="cart" size={40}/>
     </View>
     <View style={{marginTop:30, flexDirection:'row'}}>
        <View style={styles.searchContainer}>
            <Icon name="search" size={25} style={{marginLeft:20}}/>
            <TextInput placeholder="search" style={styles.input}/>
        </View>
       <View style={styles.sortBtn}>
        <Icon name="sync-circle" size={40} />
       </View> 
     </View>
     {/* SERVICES COMPONENT */}
       <Service/>
       {/* CARD COMPONENT */}
       <FlatList
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{marginTop:10,paddingBottom:50}}
       columnWrapperStyle={{justifyContent:'space-between'}}
        numColumns={2} 
        data={Brost} 
        renderItem={({item})=><Card Brost={item}/>}/>
       
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    searchContainer:{
        height:50,
        backgroundColor:Color.light,
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        fontSize:18,
        fontWeight:'bold',
        color:Color.dark,
        flex:1,
    }
})