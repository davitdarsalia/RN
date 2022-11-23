import {Dimensions, StyleSheet} from "react-native";
import {Colors} from "../../constants/colors";


const {width, height} = Dimensions.get("screen")

export const ButtonStyles = StyleSheet.create({
    wrapper: {
        marginVertical: 20,
        width: '95%',
        height: 50,
        backgroundColor: Colors.Orange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadus: 15,
        borderRadius: 8
    },
    title: {
        fontSize: 18,
        color: Colors.White,
        fontWeight: 'bold',
    }
})