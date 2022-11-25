import { FC, useCallback } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import {PinPadStyle} from './PinPad.style'
import { Colors } from '../../constants/colors'
import { handleBiometricAuth } from '../../utils/BiometryAuth'
import { useNavigation } from '@react-navigation/native'
import { AuthStackGenericProp } from '../../navigation/Types'

interface digit {
    value: number|"Biometry" | "Delete" | boolean
    id: `${number|string}-id`
}

const digitData: digit[] = [
    {value: 9, id:`9-id`},
    {value: 8, id:`8-id`},
    {value: 7, id:`7-id`},
    {value: 6, id:`6-id`},
    {value: 5, id:`5-id`},
    {value: 4, id:`4-id`},
    {value: 3, id:`3-id`},
    {value: 2, id:`2-id`},
    {value: 1, id:`1-id`},
    {value: "Biometry", id:`Biometry-id`},
    {value: 0, id:`1-id`},
    {value: "Delete", id:`Delete-id`},
]

const RenderCell = (item: digit  ) => {
    const {replace} = useNavigation<AuthStackGenericProp<'SelectCityScreen'>>()

    const handleNavigationAfterAuth = useCallback(() => {
        handleBiometricAuth(() => replace("SelectCityScreen"))
            .then()
    }, [])

    return (
        <TouchableOpacity  style={PinPadStyle.digitWrapper}>
            {item.value >= 0 && item.value <= 9 && <Text style={PinPadStyle.digit}>{item.value}</Text>}
            {item.value === "Biometry" && <FontAwesome5 onPress={handleNavigationAfterAuth} name="fingerprint" size={35} color={Colors.Orange} />}
            {item.value === "Delete" && <Feather name="delete" size={35} color={Colors.Orange} />}
        </TouchableOpacity>
    )
}

interface Props {}

export const PinPad: FC<Props> = () => {
    return (
        <View style={PinPadStyle.wrapper}>
            <FlatList scrollEnabled={false} numColumns={3} style={PinPadStyle.list} data={digitData} renderItem={({item}) => (
                <RenderCell id={item.id} value={item.value}  />
            )} keyExtractor={(item) => item.id} />
        </View>
    )
}
