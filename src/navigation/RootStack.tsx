import React from 'react'
import UserInactivity from "react-native-user-inactivity";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import {RoutesList} from "./Types";
import { AuthStack } from './AuthStack'

const RootStackStack = createNativeStackNavigator<RoutesList>()

export const RootRouter = () => {
    const {Navigator, Screen} = RootStackStack

    return(
        <NavigationContainer>
            <UserInactivity isActive={true} timeForInactivity={1800000} onAction={() => {}}>
                <Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Screen name="AuthStack" component={AuthStack} />
                </Navigator>
            </UserInactivity>
        </NavigationContainer>
    )
}