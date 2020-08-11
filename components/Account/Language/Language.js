import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import {Header2} from '../../Header'
import { mainStyles } from '../../../styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function App(){
    return (
        <>
            <Header2 title="Ngôn ngữ"/>
            <View style={[mainStyles.container,{paddingHorizontal: 15}]}>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',paddingVertical: 12}}>
                    <Text style={{fontSize: 14, color: '#fac800'}}>Tiếng Việt</Text>
                    <FontAwesomeIcon color="#fac800" icon={faCheck}/>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',paddingVertical: 12, borderTopColor: '#3b3f49', borderTopWidth: 1}}>
                    <Text style={{fontSize: 14, color: '#ddd9d8'}}>Tiếng Anh</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}