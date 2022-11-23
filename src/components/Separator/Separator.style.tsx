import {Dimensions, StyleSheet} from "react-native";
import { Colors } from '../../constants/colors'

const {width} = Dimensions.get("screen")

export const SeparatorStyle = StyleSheet.create({
   wrapper: {
       width: width,
       height: .7,
       backgroundColor: Colors.Gray,
   }
})