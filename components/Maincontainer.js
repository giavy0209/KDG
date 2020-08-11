import React from 'react'
import {ImageBackground, ScrollView,} from 'react-native'
import bg from '../assets/images/bg.jpg'
import { mainStyles } from '../styles/'

export default function Maincontainer({Component,route ,reqLogin, ...restProps}){

    return (
      <ImageBackground source={bg} style={[mainStyles.bg,{width: '100%', height: '100%'}]}>
        <ScrollView  style={{width: '100%', height: '100%',position: 'relative'}}>
          <Component {...restProps}/>
        </ScrollView>
      </ImageBackground>
    )
}