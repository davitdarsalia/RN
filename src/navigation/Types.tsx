import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';

export type RoutesList = {
   AuthStack: undefined
}

export type AuthScreenList = {
    AuthScreen: undefined
    ConfirmScreen: undefined
    SelectCityScreen: undefined
    SelectLanguage: undefined
}

// RootStack
export type RoutesGenericProp<T extends keyof RoutesList & string> =
    StackNavigationProp<RoutesList, T>;

export type RoutesGenericRouteParams<T extends keyof RoutesList & string> =
    RouteProp<RoutesList, T>;

// AuthStack
export type AuthStackGenericProp<T extends keyof AuthScreenList> =
    StackNavigationProp<AuthScreenList, T>;


export type AuthStackGenericRouteParams<T extends keyof AuthScreenList> =
    RouteProp<AuthScreenList, T>;
