import { ReactNode,  FC,  } from 'react'
import { Text } from 'react-native'
import {  MotiView } from '@motify/components'

import { LoginTextStyle } from './LoginText.style'

interface Props {
    children: ReactNode
    description: string
}

export const LoginText: FC<Props> = ({children,description=""}) => {
    return (
        <MotiView  style={LoginTextStyle.wrapperView} >
            <Text style={LoginTextStyle.header}>Login</Text>
            <Text style={LoginTextStyle.description}>{description}</Text>
            {children}
        </MotiView>
    )
}
