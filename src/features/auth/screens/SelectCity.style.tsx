import { Dimensions, StatusBar, StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

const {width, height} = Dimensions.get("screen")

export const SelectCityStyle = StyleSheet.create({
   screenWrapper: {
       width,height,
       backgroundColor: Colors.DarkerBlue,
       paddingTop: StatusBar.currentHeight,
       paddingHorizontal: width * .05,
       paddingVertical: width * .05
   },
})