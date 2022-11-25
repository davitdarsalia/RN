import { Dimensions, StatusBar, StyleSheet } from 'react-native'

import { Colors } from '../../../constants/colors'

const {width, height} = Dimensions.get("screen")

export const SelectCityStyle = StyleSheet.create({
   screenWrapper: {
       width,height,
       backgroundColor: Colors.DarkerBlue,
       paddingTop: StatusBar.currentHeight,
       paddingHorizontal: width * .05,
       paddingVertical: width * .05,
       alignItems: 'center',
       justifyContent: 'space-between'
   },
   listWrapper: {
        width: width*.95,
        height: height *.90,
        alignSelf: 'center'
   },
   searchInput: {
       width: width * .95,
       height: 60,
       borderWidth: 1,
       borderRadius: 7,
       borderColor: Colors.Gray,
       marginTop: 20,
       alignSelf: 'center',
       paddingHorizontal: 21,
       fontSize: 20,
       color: Colors.Orange,
       marginBottom: 15,
   },
   confirmButton: {
       width: width*.90,
       height: 60,
       backgroundColor: Colors.Orange,
       alignSelf: 'flex-end',
       marginTop: 10,
   }
})