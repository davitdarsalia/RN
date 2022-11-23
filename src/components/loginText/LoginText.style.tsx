import {StyleSheet} from "react-native";
import { Colors } from '../../constants/colors'

export const LoginTextStyle = StyleSheet.create({
    wrapperView: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.ModalBlue,
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    description: {
        fontSize: 17,
        color: '#637394',
        marginVertical: 15
    },
})