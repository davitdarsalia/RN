import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, TextInput, View } from 'react-native'

import { Colors } from '../../../constants/colors'
import { AuthStackGenericProp } from '../../../navigation/Types'
import { SelectCityStyle } from './SelectCity.style'
import { CellRenderItem } from '../../../components/cellRenderItem/CellRenderItem.component'
import { CityFakeDataProvider } from '../../../utils/GenericFunctions'
import { Separator } from '../../../components/Separator/Separator.component'
import { IButton } from '../../../components/button/Button'
import { useNavigation } from '@react-navigation/native'


export const SelectCityScreen = () => {
    const [text, setText] = useState("")
    const [cities, setCities] = useState(CityFakeDataProvider())
    const [selected, setSelected] = useState("")
    const {replace} = useNavigation<AuthStackGenericProp<"SelectLanguage">>()

    useEffect(() => {
        if(text.length === 0) {
            setCities(CityFakeDataProvider())
        } else {
            setCities(  cities.filter((item) => item.city.match(text)))
        }
    } , [text])

    const onChangeText = (t: string) => {
        setText(t)
    }

    // TODO - Remove


    const onConfirm = useCallback(() => {
       // TODO - Save City State To Recoil
        replace("SelectLanguage")
    }, [])

    return (
        <View style={SelectCityStyle.screenWrapper}>
                <TextInput placeholder={"Search"} placeholderTextColor={Colors.Orange}
                           style={SelectCityStyle.searchInput} value={text} onChangeText={onChangeText}/>
                <FlatList
                    style={SelectCityStyle.listWrapper}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={Separator}
                    data={cities}
                    renderItem={({item}) => (
                        <CellRenderItem name={item.city} onPress={() => setSelected(item.city)} selectedCity={selected}  />
                    )}
                    keyExtractor={(item, index) => `${item.city} ${index}`} />

                <IButton onPress={onConfirm} title={"Confirm"}  wrapperStyle={SelectCityStyle.confirmButton} />
        </View>
    )
}
