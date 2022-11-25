import React, { useState, useCallback, useEffect } from 'react'
import {View, FlatList, TextInput} from 'react-native'

import {SelectLanguageStyle} from './SelectLanguage.style'
import { Colors } from '../../../constants/colors'
import { Separator } from '../../../components/Separator/Separator.component'
import { CellRenderItem } from '../../../components/cellRenderItem/CellRenderItem.component'
import { IButton } from '../../../components/button/Button'

import { API } from '../../../utils/Api'
import { useQuery } from 'react-query'

const languages: string[] = ["English", 'Georgian', 'Greek', 'Finnish', 'Swedish', 'German']

export const SelectLanguageScreen = () => {
    const [lang, setLang] = useState("")
    const [selected, setSelected] = useState("")

    const onChangeText = (t: string) => setLang(t)
    const onConfirm = useCallback(() => {
        // TODO - Save To Recoil And Navigate
    }, [])

    return (
        <View style={SelectLanguageStyle.screenWrapper}>
            <TextInput placeholder={"Search"} placeholderTextColor={Colors.Orange}
                       style={SelectLanguageStyle.searchInput} value={lang} onChangeText={onChangeText}/>

            <FlatList
                style={SelectLanguageStyle.listWrapper}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={Separator}
                data={languages}
                renderItem={({item, index}) => (
                    <CellRenderItem name={languages[index]} onPress={() => setSelected(languages[index])} selectedCity={selected}  />
                )}
                keyExtractor={(item, index) => `${languages[index]} ${index}`} />

            <IButton title={"Confirm"} onPress={onConfirm} wrapperStyle={SelectLanguageStyle.confirmButton} />
        </View>
    )
}
