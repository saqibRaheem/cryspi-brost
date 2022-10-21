import { Text, View,Image } from 'react-native'
import React from 'react'
import HomeScreen from './screenDirectory/HomeScreen'
import Service from './screenDirectory/Service'
import About from './screenDirectory/About'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        // showLabel:false,
        headerShown: false,
        style:{
            position:"absolute",
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'#ffffff',
            borderRadius:15,
            height:90
        }
    }}>
      <Tab.Screen
       name="."
        component={HomeScreen} 
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                      <Image
                      source={require('../assets/home.png')}
                      resizedMode="contain"
                      style={{
                        width:25,
                        height:25,
                        tintColor:focused ? "#00B761" :'#748c94',}}/>
                      <Text
                      style={{color: focused?'#00B761':"#748c94",fontSize :12}}>
                      Home
                      </Text>
                    </View>    
                )
            }}
        />
      <Tab.Screen
       name="disc"
        component={About} 
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                      <Image
                      source={require('../assets/about.png')}
                      resizedMode="contain"
                      style={{
                        width:25,
                        height:25,
                        tintColor:focused ? "#e32f45" :'#748c94',}}/>
                      <Text
                      style={{color: focused?'#e32f45':"#748c94",fontSize :12}}>
                     About
                      </Text>
                    </View>    
                )
            }}
        />
      <Tab.Screen
       name="a"
        component={Service} 
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                      <Image
                      source={require('../assets/contact.png')}
                      resizedMode="contain"
                      style={{
                        width:25,
                        height:25,
                        tintColor:focused ? "#e32f45" :'#748c94',}}/>
                      <Text
                      style={{color: focused?'#e32f45':"#748c94",fontSize :12}}>
                      Contact
                      </Text>
                    </View>    
                )
            }}
        />
      {/* <Tab.Screen name="Service" component={Service} />
      <Tab.Screen name="About" component={About} /> */}
      
    </Tab.Navigator>
  );
}


// const styles = StyleSheet.create({
//     view:{
//         flexDirection:"row",
//         margin:10,
//          marginHorizontal:30,
//         justifyContent:"space-between"
//  }
// })

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function Demo() {
//   return (
//     <View
//       style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
//     >
//       <Text>This is top text.</Text>
//       <Text>This is bottom textsdchodc.</Text>
//     </View>
//   );
// }
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

//  function BottomTabs() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home">
//             {() => (
//               <Tab.Navigator
//                 initialRouteName="Analitics"
//                 tabBar={() => null}
//                 screenOptions={{ headerShown: false }}
//               >
//                 <Tab.Screen name="Analitics" component={HomeScreen} />
//                 <Tab.Screen name="Profile" component={About} />
//               </Tab.Navigator>
//             )}
//         </Stack.Screen>

//         <Stack.Screen name="Settings" component={Demo} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
    export default BottomTabs