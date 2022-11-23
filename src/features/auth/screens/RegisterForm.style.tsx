import {Dimensions, StyleSheet} from "react-native";
import {Colors} from "../../../constants/colors";


const {width, height} = Dimensions.get("screen")

export const RegisterFormStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
        width, height,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.BackgroundBlue,
    },
    wrapperView: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.ModalBlue,
        alignItems: 'center',
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    description: {
        fontSize: 15,
        color: '#637394',
        marginVertical: 15
    },
    textInput: {
        width: '95%',
        height: 60,
        borderRadius: 8,
        borderColor: 'rgba(255,255,255,.2)',
        borderWidth: 1,
        color: Colors.White,
        fontSize: 19,
        paddingHorizontal: 20,

    }
})