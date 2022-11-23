import {Dimensions, StyleSheet} from "react-native";
import { Colors } from '../../constants/colors'

const {width} = Dimensions.get("screen")

export const PinViewStyle = StyleSheet.create({
   wrapper: {
       position: 'relative',
       width: width * .9
   },
   renderItemCell: {
       width: 60,
       height: 60,
       marginRight: 30,
       borderWidth: 1.5,
       borderColor: Colors.Orange,
       borderRadius: 10,
       alignItems: 'center',
       justifyContent: 'center',
   },
   value: {
        color: Colors.Orange,
        fontSize: 35,
   },
   cellsWrapper: {
        position: 'absolute',
        top: 0,
        left: width*.054,
   }
})