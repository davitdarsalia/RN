import {Dimensions, StyleSheet} from "react-native";

import {Colors} from "../../../constants/colors";

const {width, height} = Dimensions.get("screen")

export const AuthScreenStyle = StyleSheet.create({
    wrapper: {
        width, height,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.BackgroundBlue,
    },
    bottomSheetWrapper: {
        backgroundColor: Colors.ModalBlue,
    },
    bottomSheetContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Black
    }
})