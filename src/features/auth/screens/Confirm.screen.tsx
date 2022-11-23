import { useRef, useMemo, useState, useCallback } from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

import { ConfirmStyle } from './Confirm.style'
import { AuthScreenStyle } from './AuthScreen.style'
import { LoginText } from '../../../components/loginText/LoginText.component'
import { PinView } from '../../../components/pinView/PinView.component'
import { pinMaskValues } from '../../../utils/GenericFunctions'
import { PinMemoizedInput } from '../../../components/pinInput/pinInput.component'


export const ConfirmScreen = () => {
    const snapPoints = useMemo(() => [ '70%', '80%', '90%' ] , [])
    const bottomSheetRef = useRef<BottomSheet>(null)
    const behavior = Platform.OS === "ios" ? "padding" : "height"
    const [pin, setPin] = useState('')

    const editPin = useCallback((t: string) => {
        setPin(t)
    } , [pin])

console.log("REnder")
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
                               <PinMemoizedInput pin={pin} setPin={editPin} />
                            <PinView values={pinMaskValues(pin)}  />
                        </LoginText>
                </KeyboardAvoidingView>
            </BottomSheet>
        </View>
    )
}
