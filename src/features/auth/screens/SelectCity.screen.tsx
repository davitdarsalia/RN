import React from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'

import { CityRenderItem } from '../../../components/cityRenderItem/CityRenderItem.component'
import { CityFakeDataProvider } from '../../../utils/GenericFunctions'
import { Separator } from '../../../components/Separator/Separator.component'
import { SelectCityStyle } from './SelectCity.style'

interface Props {
    city: string
}

const renderItem: ListRenderItem<Props> = ({item}) => {
    return <CityRenderItem city={item.city} />
}

export const SelectCityScreen = () => {
    return (
        <View style={SelectCityStyle.screenWrapper}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={Separator}
                    data={CityFakeDataProvider()}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${item.city} ${index}`}
                />
        </View>
    )
}
