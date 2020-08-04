import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, ImageBackground, Text,TouchableOpacity } from 'react-native';
import styles from '../styles/mainStyle'
import { LinearGradient } from 'expo-linear-gradient';

import bg from '../assets/images/bg.jpg'
import kwtext from '../assets/images/kwtext.png'
import securetext from '../assets/images/securetext.png'
import multitext from '../assets/images/multitext.png'
import easytext from '../assets/images/easytext.png'
import mainImage2 from '../assets/images/main-image-2.png'
import mainImage3 from '../assets/images/main-image-3.png'
import mainImage4 from '../assets/images/main-image-4.png'
import {transition} from '../helper'
export default function App({navigation}) {
   const [ScreenHeight,setScreenHeight] = useState(0)
   const [ScreenWidth,setScreenWidth] = useState(0)
   const [VerWidth,setVerWidth] = useState(0)
   const [ActivePage,setActivePage] = useState(0)

   const count = useCallback(()=>{
        if(ActivePage < 3){
            transition(600, ActivePage, ActivePage + 1,setActivePage)
        }
   },[ActivePage])
    return (
        <>
        <View 
        style={styles.container}>
            <ImageBackground 
            onLayout={e => {
                setScreenHeight(e.nativeEvent.layout.height)
                setScreenWidth(e.nativeEvent.layout.width)
            }} 
            source={bg} 
            style={[styles.bg,{paddingTop: 0, alignItems: 'center'}]}> 
                <View style={{alignItems: 'center', position: 'absolute', top: 0, left: (1 - ActivePage) * ScreenWidth - ScreenWidth  , width: ScreenWidth, height: ScreenHeight}}>
                    <Text style={{fontSize: ScreenWidth * 0.08, color: '#fff', marginTop: ScreenHeight * 0.33283, fontFamily: 'RobotoCondensed_300Light'}}>Chào mừng bạn đến với</Text>
                    <Image source={kwtext} style={{resizeMode: "contain", marginTop: ScreenHeight * 0.02248}}></Image>
                    <Text style={{fontFamily: 'Roboto_400Regular' , fontSize: ScreenWidth * 0.037333,color : '#fff', marginTop: ScreenHeight * 0.03448}}>King Wallet đáp ứng tất cả nhu cầu</Text>
                    <Text style={{fontFamily: 'Roboto_400Regular' , fontSize: ScreenWidth * 0.037333,color : '#fff'}}>của người dùng</Text>
                </View>

                <View 
                style={{alignItems: 'center', position: 'absolute', top: 0, left: (2 - ActivePage) * ScreenWidth - ScreenWidth, width: ScreenWidth, height: ScreenHeight}}>
                    <Image source={mainImage2} style={{width: ScreenWidth * 0.8 ,marginTop: ScreenHeight * 0.1079 , resizeMode: "contain"}}></Image>
                    <Image source={securetext} style={{width : ScreenWidth * 0.46933, marginTop: ScreenHeight * 0.0374812,resizeMode: "contain"}}></Image>
                    <Text style={{marginTop: ScreenHeight * 0.02248, fontSize: 14, color: '#fff'}}>Cơ chế bảo mật nhiều tầng đảm bảo tài sản</Text>
                    <Text style={{ fontSize: 14, color: '#fff'}}>và giao dịch an toàn và ổn định</Text>
                </View>

                <View style={{alignItems: 'center', position: 'absolute', top: 0, left: (3 - ActivePage) * ScreenWidth - ScreenWidth, width: ScreenWidth, height: ScreenHeight}}>
                    <Image source={mainImage3} style={{width: ScreenWidth * 0.8 ,marginTop: ScreenHeight * 0.1079 , resizeMode: "contain"}}></Image>
                    <Image source={multitext} style={{width : ScreenWidth * 0.46933, marginTop: ScreenHeight * 0.0374812,resizeMode: "contain"}}></Image>
                    <Text style={{marginTop: ScreenHeight * 0.02248, fontSize: 14, color: '#fff'}}>Người dùng có thể quản lý nhiều tài khoản </Text>
                    <Text style={{ fontSize: 14, color: '#fff'}}>trên King Wallet</Text>
                </View>

                <View style={{alignItems: 'center', position: 'absolute', top: 0, left: (4 - ActivePage) * ScreenWidth - ScreenWidth, width: ScreenWidth, height: ScreenHeight}}>
                    <Image source={mainImage4} style={{width: ScreenWidth * 0.8 ,marginTop: ScreenHeight * 0.1079 , resizeMode: "contain"}}></Image>
                    <Image source={easytext} style={{width : ScreenWidth * 0.46933, marginTop: ScreenHeight * 0.0374812,resizeMode: "contain"}}></Image>
                    <Text style={{marginTop: ScreenHeight * 0.02248, fontSize: 14, color: '#fff'}}>Thao tác đơn giản, giao diện thân thiện với</Text>
                    <Text style={{ fontSize: 14, color: '#fff'}}>người dùng</Text>
                   
                </View>

                <View style={{flex: 1, position: 'absolute',flexDirection: 'row', top: ScreenHeight * 0.75 }}>
                    <View style={ [styles.pagiSlide, ActivePage === 0 && styles.pagiSlideActive]}/>
                    <View style={ [styles.pagiSlide, ActivePage === 1 && styles.pagiSlideActive]}/>
                    <View style={ [styles.pagiSlide, ActivePage === 2 && styles.pagiSlideActive]}/>
                    <View style={ [styles.pagiSlide, ActivePage === 3 && styles.pagiSlideActive]}/>
                </View>

                <View 
                style={[
                    {position: 'absolute',top: ScreenHeight * 0.8245,left: ScreenWidth * 0.08, flex: 1, flexDirection: 'row', justifyContent:'space-between',alignContent: 'space-between'},
                    ActivePage !== 3 && {transform: [{ scale: 0 }]}
                ]}
                >
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <LinearGradient
                            start={[0, 0.5]}
                            end={1, 0.5}
                            colors={['#e3bb4c', '#edda8b']}
                            style={{  paddingTop: ScreenHeight * 0.01499, paddingBottom: ScreenHeight * 0.01499, alignItems: 'center', borderRadius: 50 ,width: ScreenWidth * 0.4}}>
                            <Text
                                style={{
                                backgroundColor: 'transparent',
                                fontSize: 14,
                                color: '#000',
                                }}>
                                Đăng nhập
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('Reg')} style={{marginLeft: ScreenWidth * 0.03,paddingTop: ScreenHeight * 0.01499, paddingBottom: ScreenHeight * 0.01499, alignItems: 'center', borderRadius: 50 ,width: ScreenWidth * 0.4, borderWidth: 1, borderColor: '#ebc660'}}>
                        <Text style={{color: '#ebc660', fontSize: 14}}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={()=>{transition(1000,ActivePage, 3, setActivePage)}} style={[{position: 'absolute', bottom: 36, left: 32,}, ActivePage === 3 && {transform: [{ scale: 0 }]}]}>
                    <Text style={{color: '#8a8c8e', fontSize: 14}}>BỎ QUA</Text>
                </TouchableOpacity>
                <Text 
                onLayout={e => setVerWidth(e.nativeEvent.layout.width)}
                style={{position: 'absolute', bottom: 36, left: ScreenWidth / 2 - VerWidth / 2, color: '#fff', fontSize: 12}}>Ver 1.0</Text>
                <TouchableOpacity onPress={count} style={[{position: 'absolute', bottom: 36, right: 32},ActivePage === 3 && {transform: [{ scale: 0 }]}]}>
                    <Text style={{color: '#fac800', fontSize: 14}}>TIẾP THEO</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        </>
    );
}

