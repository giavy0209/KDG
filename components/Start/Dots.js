import React, { useState, useCallback } from 'react';
import { View, Image, ImageBackground, Text,TouchableOpacity } from 'react-native';
import {mainStyles as styles} from '../../styles/'

export default function Dots({ScreenHeight,ActivePage}){
    return(
        <>
        <View style={{flex: 1, position: 'absolute',flexDirection: 'row', top: ScreenHeight * 0.75 }}>
            <View style={ [styles.pagiSlide, ActivePage === 0 && styles.pagiSlideActive]}/>
            <View style={ [styles.pagiSlide, ActivePage === 1 && styles.pagiSlideActive]}/>
            <View style={ [styles.pagiSlide, ActivePage === 2 && styles.pagiSlideActive]}/>
            <View style={ [styles.pagiSlide, ActivePage === 3 && styles.pagiSlideActive]}/>
        </View>
        </>
    )
}