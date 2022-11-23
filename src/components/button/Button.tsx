import  {FC} from "react";
import {
    Text,
    TouchableOpacity,
    StyleProp, ViewProps, TextProps, ViewStyle, TextStyle
} from "react-native";

import {ButtonStyles} from './Button.style'
import {RegisterFormStyle} from "../../features/auth/screens/RegisterForm.style";

interface Props {
    onPress: () => void
    title: string,
    wrapperStyle?: StyleProp<ViewStyle>,
    titleStyle?: StyleProp<TextStyle>
}

export const IButton: FC<Props> = ({
    onPress = () => {}, title, wrapperStyle={}, titleStyle={}
}) => {

    return (
        <TouchableOpacity onPress={onPress} style={[ButtonStyles.wrapper, wrapperStyle]}>
            <Text style={[ButtonStyles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
