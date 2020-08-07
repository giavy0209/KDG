import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import {ImageBackground, ScrollView,} from 'react-native'
import bg from '../assets/images/bg.jpg'
import { mainStyles } from '../styles/'
export default function Maincontainer({Component, reqLogin, ...restProps}){
    const isLogin = useSelector(state=>state.isLogin)
    const navigation = useNavigation();
    // useEffect(()=>{
    //   if(reqLogin){
    //     if(!isLogin){
    //       navigation.replace('Login')
    //     }
    //   }
    // },[isLogin])
    return (
      <ImageBackground source={bg} style={[mainStyles.bg,{width: '100%', height: '100%'}]}>
        <ScrollView  style={{width: '100%', height: '100%'}}>
          <Component {...restProps}/>
        </ScrollView>
      </ImageBackground>
    )
}