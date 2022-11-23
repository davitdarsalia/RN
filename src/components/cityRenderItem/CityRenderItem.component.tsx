import { FC } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import {CityRenderItemStyle} from './CityRenderItem.style'
import { Colors } from '../../constants/colors'

interface Props {
    city: string
    selected?: boolean;
    onPress?: () => void
    onLongPress?: () => void
}

export const CityRenderItem: FC<Props> = ({city= "", selected= false, onPress = () => {}, onLongPress = () => {}}) => {
    return (
        <TouchableOpacity activeOpacity={.2} onPress={onPress} style={CityRenderItemStyle.cellWrapper} >
            <View style={CityRenderItemStyle.innerWrapper}>
                { selected &&  <Ionicons style={CityRenderItemStyle.selectIcon} name="checkmark-circle" size={24} color={Colors.Orange} />}
                <Text style={CityRenderItemStyle.cityText}>{city}</Text>
            </View>
        </TouchableOpacity>
    )
}
