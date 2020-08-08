import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View ,Dimensions,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ROUTERS,TABS} from '../../routers'
import { useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context';
import { useSelector,useDispatch } from 'react-redux'
import {actChangeScreenHeight, actChangeScreenWidth} from '../../store/actions'

import Maincomponent from '../Maincontainer'

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack

const Tab = createBottomTabNavigator();

const createTab = ()=><Tab.Navigator

tabBarOptions={{
  activeTintColor: '#fac800',
  inactiveTintColor: "#ffffff",
  style: {
    backgroundColor: '#283349',
    borderTopWidth: 0,
  }
}}
>

  {TABS.map(tab=>
  <Tab.Screen
  options={{tabBarIcon: ({focused}) =><Image source={tab.logo} style={[focused && {tintColor: '#c69800'}]}/>}}  
  key={tab.name} 
  name={tab.name}
  >
    {props => <Maincomponent {...props} reqLogin={tab.reqLogin} Component={tab.render}></Maincomponent>}
  </Tab.Screen>
  )}

</Tab.Navigator>

export default function App() {
  const { top, left, right, bottom, } = useSafeAreaInsets();
  const dispatch = useDispatch()

  const ScreenWidth = useSelector(state => state.width)
  const ScreenHeight = useSelector(state => state.height)

  
  useEffect(()=>{
    dispatch(actChangeScreenWidth(Dimensions.get('screen').width ))
    dispatch(actChangeScreenHeight(Dimensions.get('screen').height - top))
  },[])
    return (
      <SafeAreaView>
      <View
        style={[{
          width: ScreenWidth,
          height: ScreenHeight,
          // marginTop: top,
          // marginLeft: left,
          // marginRight: right
        }]}
      >
      <NavigationContainer>
      <Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {
            ROUTERS.map(Router => {
              return (
                <Screen
                  key={Router.name}
                  name={Router.name}
                  options={{title: Router.title,}}
                > 
                  {props => <Maincomponent {...props} reqLogin={Router.reqLogin} Component={Router.render}></Maincomponent>}
                </Screen>
              )
            })
          }
          <Screen
            name="Main"
            component={createTab}
          /> 
        </Navigator>

        
        
      </NavigationContainer>
      </View>
      </SafeAreaView>
    );
}