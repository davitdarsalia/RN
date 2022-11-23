import {Dimensions, StyleSheet} from "react-native";
import { Colors } from '../../constants/colors'

const {width, height} = Dimensions.get("screen")

export const PinInputStyle = StyleSheet.create({
   input: {
       width: width * .8,
       height: 60,
       borderRadius: 8,
       color: Colors.White,
       fontSize: 40,
       letterSpacing: width *.17,
       paddingLeft: 15,
       paddingRight: 15,
       backgroundColor: 'red',
       alignSelf: 'center',
       display: 'none'
   }
})