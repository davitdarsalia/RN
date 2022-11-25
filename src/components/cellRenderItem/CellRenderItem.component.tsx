import { FC } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import {CellRenderItemStyle} from './CellRenderItem.style'
import { Colors } from '../../constants/colors'

interface Props {
    name: string
    selectedCity?: string;
    onPress?: () => void
    onLongPress?: () => void
}

export const CellRenderItem: FC<Props> = ({name= "", selectedCity= false, onPress = () => {}, onLongPress = () => {}}) => {
    const selected  = name === selectedCity && true
    return (
        <TouchableOpacity activeOpacity={.2} onPress={onPress} onLongPress={onLongPress} style={CellRenderItemStyle.cellWrapper} >
            <View style={CellRenderItemStyle.innerWrapper}>
                { selected ?  <Ionicons style={CellRenderItemStyle.selectIcon} name="checkmark-circle" size={24} color={Colors.Orange} /> : <View style={CellRenderItemStyle.selectIcon} />}
                <Text style={CellRenderItemStyle.cityText}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}
