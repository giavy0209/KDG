import React, { useEffect, useCallback, useState } from 'react'
import { View, Text, Image, ImageBackground ,Button, TouchableOpacity} from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { Header2 } from '../../Header'

import { mainStyles, accountStyle } from '../../../styles'

import defaultAvata from '../../../assets/images/default-avata.webp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
export default function App() {
    const [BlockWidth, setBlockWidth] = useState(0)
    const [ImageWidth, setImageWidth] = useState(0)
    const [image, setImage] = useState(defaultAvata)
    const getPermissionAsync = useCallback(async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }else pickImage()
        }else pickImage()
    }, []);

    const pickImage = useCallback(async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1,1],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result);
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    },[])

    useEffect(() => {

    }, [])
    return (
        <>
            <Header2 title="Hồ sơ cá nhân" />
            <View style={[mainStyles.container,{paddingHorizontal: 36, paddingTop: 78,}]}>
                <View
                onLayout={e => setBlockWidth(e.nativeEvent.layout.width)}
                style={{paddingHorizontal: 19, paddingTop: 40, paddingBottom: 18, flexDirection: 'row', justifyContent: 'space-between', position: 'relative'}}>
                    <View style={[accountStyle.maskOpacity, {borderRadius: 8}]}></View>
                    <Text style={{color: '#ddd9d8'}}>Email</Text>
                    <Text style={{color: '#8a8c8e'}}>luongthang9***@gmail.com</Text>

                    <TouchableOpacity
                    onLayout={e => setImageWidth(e.nativeEvent.layout.width)}
                    onPress={getPermissionAsync}
                    style={{position: 'absolute', top: -53, alignSelf: 'center',left: BlockWidth / 2 - ImageWidth/2 ,zIndex: 999}}>
                        <View style={{width: 66, height: 66, position: 'relative', borderRadius: 50, overflow: 'hidden'}}>
                            <Image style={{width: 66, height: 66,resizeMode: 'contain'}} source={image.uri ? {uri: image.uri} : image}/>
                        </View>
                        <FontAwesomeIcon color="#edcd6d" size={20} style={{position: 'absolute', bottom: -2, right: 0}} icon={faCamera} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}