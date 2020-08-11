import React, { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, TextInput,Image } from 'react-native'
import SmoothPinCodeInput  from 'react-native-smooth-pincode-input'
import {Header2} from '../../../Header'
import { mainStyles } from '../../../../styles'
export default function App(){
    const [Pin, setPin] = useState('')
    return (
        <>
            <Header2 title="Thay đổi mật khẩu"/>
            <SmoothPinCodeInput
            placeholder={<View style={{
                width: 10,
                height: 10,
                borderRadius: 25,
                backgroundColor: '8a8c8e',
            }}></View>}
            mask={<View style={{
                width: 10,
                height: 10,
                borderRadius: 25,
                backgroundColor: 'ddd9d8',
            }}></View>}
            maskDelay={1000}
            password={true}
            cellStyle={null}
            cellStyleFocused={null}
            value={Pin}
            codeLength={6}
            keyboardType="number-pad"
            onTextChange={code => setPin(code)}
            />
        </>
    )
}