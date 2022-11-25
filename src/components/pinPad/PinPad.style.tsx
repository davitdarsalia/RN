import {Dimensions, StyleSheet} from "react-native";
import { Colors } from '../../constants/colors'

const {width, height} = Dimensions.get("screen")

export const PinPadStyle = StyleSheet.create({
   wrapper: {
      width,
      height: height * .45,
      position: 'absolute',
      bottom: width*.02,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
   },
   list: {
      alignSelf: 'center',
   },
   digitWrapper: {
      width: width * .3,
      height: width * .2,
      borderColor: Colors.Orange,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 13,
      shadowColor: Colors.Orange,
      shadowOffset: {
         width: 0,
         height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
   },
   digit: {
      fontSize: 45,
      fontWeight: '500',
      color: Colors.Orange,
   }
})