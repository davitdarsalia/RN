import {Dimensions, StyleSheet} from "react-native";
import { Colors } from '../../constants/colors'

const {width} = Dimensions.get("screen")

export const CityRenderItemStyle = StyleSheet.create({
   cellWrapper: {
       width: width * .97,
       height: 50,
       borderBottomWidth: .7,
       borderBottomColor: Colors.Gray,
       alignItems: 'flex-start',
       justifyContent: 'flex-end',
   },
   cityText: {
       fontSize: 17,
       color: Colors.White,
       marginBottom: width * .03,
       marginLeft: width * .03
   },
    selectIcon: {
        marginBottom: width * .03,
        marginLeft: width * .02
    },
    innerWrapper: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-around'
    }
})