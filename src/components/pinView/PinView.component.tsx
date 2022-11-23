import { FC } from 'react'
import { Easing } from 'react-native-reanimated'
import { View, FlatList } from 'react-native'
import { MotiText, MotiView } from '@motify/components'

import {PinViewStyle} from './PinView.style'
import { PinViewAnimationConfig } from '../../utils/animations/View.animations'
import { PinTextValueAnimationConfig } from '../../utils/animations/Text.animations'

const PinViewData =  [
    {id: "First Digit"},
    {id: "Second Digit"},
    {id: "Third Digit"},
    {id: "Fourth Digit"},
]

interface Props {
    values: string[]
}


export const PinView: FC<Props> = ({ values }) => {
    return (
        <View style={PinViewStyle.wrapper}  >
            <FlatList
                style={PinViewStyle.cellsWrapper}
                horizontal scrollEnabled={false}  data={PinViewData}
                renderItem={({item, index}) => (
                    <MotiView
                        from={PinViewAnimationConfig.from}
                        animate={PinViewAnimationConfig.animate}
                        transition={{type: 'timing',duration: 4000, easing: Easing.out(Easing.ease)}}
                        style={PinViewStyle.renderItemCell} testID={item.id}>
                            <MotiText
                                from={PinTextValueAnimationConfig.from}
                                animate={PinTextValueAnimationConfig.animate}
                                transition={{type: 'timing', duration: 4000,easing: Easing.out(Easing.ease)}}
                                disabled={true}
                                style={PinViewStyle.value}
                            >
                                {values[index]}
                            </MotiText>
                    </MotiView>
                )} keyExtractor={({id}) => id} />
        </View>
    )
}


