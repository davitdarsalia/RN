import  {FC, useRef} from "react";
import {TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard} from "react-native";

import {RegisterFormStyle} from './RegisterForm.style'
import {IButton} from "../../../components/button/Button";
import { useNavigation } from '@react-navigation/native'
import { AuthStackGenericProp } from '../../../navigation/Types'
import { LoginText } from '../../../components/loginText/LoginText.component'

interface Props {}

export const RegisterForm: FC<Props> = () => {
    const {navigate} = useNavigation<AuthStackGenericProp<"ConfirmScreen">>()

    const inputRef = useRef<TextInput>(null)
    const behavior = Platform.OS === "ios" ? "padding" : "height"
    const navigateToPartTwo = () => navigate("ConfirmScreen")

    return (
            <KeyboardAvoidingView behavior={behavior}  style={RegisterFormStyle.wrapper} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <LoginText description={"Access To The Available Tickets"}>
                        <TextInput
                            keyboardType={"numeric"} keyboardAppearance={"default"} placeholder={"Phone Number"}
                            placeholderTextColor={'white'} style={RegisterFormStyle.textInput} ref={inputRef} />
                        <IButton  onPress={navigateToPartTwo} title={"Continue"}  />
                    </LoginText>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    )
}
