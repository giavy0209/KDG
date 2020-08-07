import 'react-native-gesture-handler';
import React from 'react';
import {View, ImageBackground,ScrollView} from 'react-native'
import { Provider} from 'react-redux'
import store from './store'
import Navigation from './components/Navigation'
import { SafeAreaProvider} from 'react-native-safe-area-context';

import {
  useFonts,
  Roboto_300Light_Italic,
  Roboto_400Regular_Italic,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import {
  RobotoCondensed_300Light
} from '@expo-google-fonts/roboto-condensed';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    RobotoCondensed_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (fontsLoaded) {
    return (
    <SafeAreaProvider>
      <Provider store={store}>
        
        <Navigation/>  
      
      </Provider>
    </SafeAreaProvider>
    )
  }else{
    return (<View></View>)
  }
}