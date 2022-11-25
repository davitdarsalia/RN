import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { AuthScreenList } from './Types'
import { ConfirmScreen } from '../features/auth/screens/Confirm.screen'
import { AuthScreen } from '../features/auth/screens/AuthScreen.screen'
import { SelectCityScreen } from '../features/auth/screens/SelectCity.screen'
import { SelectLanguageScreen } from '../features/auth/screens/SelectLanguage.screen'

const AuthStackNavigator = createNativeStackNavigator<AuthScreenList>()

export const AuthStack = () => {
    const {Navigator, Screen} = AuthStackNavigator

    return(
        <Navigator initialRouteName={"ConfirmScreen"} >
            <Screen name="AuthScreen" component={AuthScreen} options={{
                headerShown: false
            }} />
            <Screen name="ConfirmScreen" options={{
                headerShown: false
            }} component={ConfirmScreen} />
            <Screen name="SelectCityScreen" options={{
                headerShown: false
            }} component={SelectCityScreen} />
            <Screen name="SelectLanguage" options={{
                headerShown: false
            }} component={SelectLanguageScreen} />
        </Navigator>
    )
}