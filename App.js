import 'react-native-gesture-handler';
import React from 'react';
import {View } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import ROUTERS from './routers'
import {
  useFonts,
  Roboto_300Light_Italic,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import {
  RobotoCondensed_300Light
} from '@expo-google-fonts/roboto-condensed';
const Stack = createStackNavigator();
const {Navigator, Screen} = Stack

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light_Italic,
    Roboto_400Regular,
    RobotoCondensed_300Light
  });
  if(fontsLoaded){
    return (
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {
            ROUTERS.map(router=>{
              return(
                <Screen
                key={router.name}
                name={router.name}
                component={router.render}
                options={{
                  title: router.title,
                }}
                />
              )
            })
          }
        </Navigator>
      </NavigationContainer>
    );
  }else{
    return <View></View>
  }
}