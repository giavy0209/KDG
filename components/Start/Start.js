import React, { useState, useCallback, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { mainStyles as styles } from '../../styles/'
import bg from '../../assets/images/bg.jpg'
import { transition } from '../../helper'

import Button from './Button'
import Dots from './Dots'
import ControlsPageButton from './ControlsPageButton'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

const listPasge = [Page1, Page2, Page3, Page4]

export default function App() {
    const [ScreenHeight, setScreenHeight] = useState(0)
    const [ScreenWidth, setScreenWidth] = useState(0)

    const [ActivePage, setActivePage] = useState(0)
    const [Position, setPosition] = useState(0)

    const count = useCallback((duration, targetTransition) => {
        if(!duration) duration = 300
        if(!targetTransition) targetTransition = ActivePage + 1
        if (ActivePage < (listPasge.length - 1)) {
            transition(duration, ActivePage,targetTransition, setPosition)
            setActivePage(targetTransition)
        }
    }, [ActivePage])

    useEffect(()=>{
        if(ActivePage === Position && ActivePage < (listPasge.length - 1)){
            setTimeout(() => {
                count(300,ActivePage + 1)
            }, 5000);
        }
    },[ActivePage, Position])

    const getLayoutScreen = useCallback((e) => {
        setScreenHeight(e.nativeEvent.layout.height)
        setScreenWidth(e.nativeEvent.layout.width)
    }, [])
    return (
        <>
            <View
                style={styles.container}>
                <ImageBackground onLayout={getLayoutScreen} source={bg} style={[styles.bg, { paddingTop: 0, alignItems: 'center' }]}>
                    {listPasge.map((Page, index) => {
                        return (
                            <Page
                                key={index}
                                ScreenHeight={ScreenHeight}
                                ScreenWidth={ScreenWidth}
                                Position={Position}
                                index={index + 1}
                            />
                        )
                    })}

                    <Dots
                        ScreenHeight={ScreenHeight}
                        ActivePage={ActivePage}
                    />
                    <Button
                        ScreenHeight={ScreenHeight}
                        ScreenWidth={ScreenWidth}
                        ActivePage={ActivePage}
                    />
                    <ControlsPageButton
                        count={count}
                        ScreenWidth={ScreenWidth}
                        ActivePage={ActivePage}
                    />

                </ImageBackground>
            </View>
        </>
    );
}

