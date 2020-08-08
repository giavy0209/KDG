import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import image from '../../assets/images/account-header-background.jpg';
import {accountStyle, mainStyles} from '../../styles'
export default function App(){
    return(
        <>
        <View style={[mainStyles.container]}>
                <View style={accountStyle.backgroundHead}>
                    <Text>Tài khoản</Text>
                </View>
        </View>
        </>
    )
}