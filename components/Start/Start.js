import React, { useState, useCallback, useEffect ,useRef} from 'react';
import { View, Dimensions ,Animated} from 'react-native';
import { mainStyles as styles } from '../../styles/'
import { transition } from '../../helper'
import {useSelector} from 'react-redux'

import Button from './Button'
import Dots from './Dots'
import ControlsPageButton from './ControlsPageButton'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

const listPasge = [Page1]

export default function App() {
    const move = useRef(new Animated.Value(0)).current;

    const ScreenWidth = useSelector(state=>state.width)
    const ScreenHeight = useSelector(state=>state.height)

    const [DotsPosition, setDotsPosition] = useState(0)
    const [ActivePage, setActivePage] = useState(0)
    const [Position, setPosition] = useState(0)
    
    const [TimeOutID, setTimeOutID] = useState()
    const [TimeOutPage, setTimeOutPage] = useState(0)

    const count = useCallback((duration, targetTransition) => {

        // if(!duration) duration = 300
        // if(!targetTransition) targetTransition = ActivePage + 1

        // if (ActivePage < (listPasge.length - 1)) {
        //     clearTimeout(TimeOutID)
        //     transition(duration, ActivePage,targetTransition, setPosition)
        //     setActivePage(targetTransition)
        // }

        Animated.timing(move, {
            toValue: 2,
            duration: 100,
            useNativeDriver: true
        }).start(({finish})=>console.log(finish));
        console.log(move);
    }, [ActivePage,TimeOutID,move])

    // useEffect(()=>{
    //     if(ActivePage === Position && ActivePage < (listPasge.length - 1)){
    //         var id = setTimeout(count, 5000);
    //         setTimeOutPage(ActivePage)
    //         setTimeOutID(id)
    //     }
    // },[ActivePage, Position])

    useEffect(()=>{
        if(TimeOutPage !== ActivePage){
            clearTimeout(TimeOutID)
            if(ActivePage === Position && ActivePage < (listPasge.length - 1)){
                var id = setTimeout(count, 5000);
                setTimeOutPage(ActivePage)
                setTimeOutID(id)
            }
        }
    },[TimeOutPage, TimeOutID, ActivePage])
    return (
        <>
        <View style={[styles.container, {width: ScreenWidth, height: ScreenHeight, position: 'relative', overflow: 'hidden'}]}>
        {listPasge.map((Page, index) => {
            return (
                <Page
                    key={index}
                    ScreenHeight={ScreenHeight}
                    ScreenWidth={ScreenWidth}
                    Position={move}
                    index={index + 1}
                    setDotsPosition={setDotsPosition}
                />
            )
        })}

        <Dots
            ScreenHeight={ScreenHeight}
            ScreenWidth={ScreenWidth}
            ActivePage={ActivePage}
            DotsPosition={DotsPosition}
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
        </View>
        </>
    );
}

