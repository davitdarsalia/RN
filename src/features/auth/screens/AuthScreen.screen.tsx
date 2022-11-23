import  {useRef, useMemo} from "react";
import {View} from "react-native";
import BottomSheet from '@gorhom/bottom-sheet';

import {AuthScreenStyle} from './AuthScreen.style'
import {RegisterForm} from "./Register.form";

export const AuthScreen = () => {
    const snapPoints = useMemo(() => [ '70%', '80%', '90%' ] , [])
    const ref = useRef<BottomSheet>(null)

    return (
        <View style={AuthScreenStyle.wrapper}>
            <BottomSheet
                backgroundStyle={AuthScreenStyle.bottomSheetWrapper}
                containerStyle={AuthScreenStyle.bottomSheetContainer}
                snapPoints={snapPoints}
                ref={ref}
            >
                <RegisterForm />
            </BottomSheet>
        </View>


    )
}
