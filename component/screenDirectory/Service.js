import { StyleSheet, Text, View,  } from 'react-native';
import React from 'react';
import Color from '../../consts/color';



const categories = ['BROAST',"ZINGER",'BBQ','FRENCH-BROAST'];
// const [categoryIndex,setCategoryIndex] = useState(0);


export default function Service() {
  return (
    <View style={styles.categories}>
      {categories.map((item,index)=>(
       
        <Text key={index} style={[styles.categoryText]}>
         {item}
        </Text>
       
      
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  categories:{
    flexDirection:'row',
    marginTop:30,
    marginBottom:20,
    justifyContent:'space-between',
  },
  categoryText:{
    fontSize:16,
    color:'grey',
    fontWeight:'bold',
  },
  // cTextSelected:{
  //   color:Color.green,
  //   paddingBottom:5,
  //   borderBottomWidth:2,
  //   borderColor:Color.green,
  // }
})