import React, { useState, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import {startScreenStyle as styles} from '../../styles/'
import kwtext from '../../assets/images/kwtext.png'
export default function Page1({ScreenHeight, ScreenWidth,Position,index}){
    return(
        <>
        <View style={[
            styles.page,
            {left: (index - Position) * ScreenWidth - ScreenWidth  , width: ScreenWidth, height: ScreenHeight}
        ]}>
            <Text style={{fontSize: ScreenWidth * 0.08, color: '#fff', marginTop: ScreenHeight * 0.33283, fontFamily: 'RobotoCondensed_300Light'}}>Chào mừng bạn đến với</Text>
            <Image source={kwtext} style={[styles.image,{marginTop: ScreenHeight * 0.02248}]}></Image>
            <Text style={[styles.text,{fontSize: ScreenWidth * 0.037333,marginTop: ScreenHeight * 0.03448}]}>King Wallet đáp ứng tất cả nhu cầu</Text>
            <Text style={[styles.text,{fontSize: ScreenWidth * 0.037333}]}>của người dùng</Text>
        </View>
        </>
    )
}