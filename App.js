// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Divider } from 'react-native-elements';
import BottomTabs from './component/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import About from './component/screenDirectory/About';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Divider width={1} />
    //   <BottomTabs/>
    // </View>
    <NavigationContainer>
      <BottomTabs/>
      <About name="d"/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
