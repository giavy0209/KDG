import React from 'react';
import {StyleSheet,Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent: 'center', 
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        fontSize: 40,
        color: '#ff0000',
        zIndex: 9
    }
})

export default styles