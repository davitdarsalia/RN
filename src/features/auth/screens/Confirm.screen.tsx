import { useRef, useMemo, useState, useCallback } from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

import { ConfirmStyle } from './Confirm.style'
import { AuthScreenStyle } from './AuthScreen.style'
import { LoginText } from '../../../components/loginText/LoginText.component'
import { PinView } from '../../../components/pinView/PinView.component'
import { pinMaskValues } from '../../../utils/GenericFunctions'
import { PinPad } from '../../../components/pinPad/PinPad.component'


export const ConfirmScreen = () => {
    const snapPoints = useMemo(() => [ '70%'] , [])
    const bottomSheetRef = useRef<BottomSheet>(null)
    const behavior = Platform.OS === "ios" ? "padding" : "height"
    const [pin, setPin] = useState('3512')

    const editPin = useCallback((t: string) => {
        setPin(t)
    } , [pin])

    return (
        <View style={AuthScreenStyle.wrapper}>
            <BottomSheet
                backgroundStyle={ConfirmStyle.bottomSheetWrapper}
                containerStyle={ConfirmStyle.bottomSheetContainer}
                snapPoints={snapPoints}
                ref={bottomSheetRef}
            >
                <KeyboardAvoidingView behavior={behavior}>
                        <LoginText description={"Enter the password from the SMS"}>
                            <PinView values={pinMaskValues(pin)}  />
                            <PinPad />
                        </LoginText>
                </KeyboardAvoidingView>

            </BottomSheet>
        </View>
    )
}
