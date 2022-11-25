import { FC, memo, useEffect, useState } from 'react'
import { TextInput } from 'react-native'

import { PinInputStyle } from './pinInput.style'
import { useNavigation } from '@react-navigation/native'
import { AuthStackGenericProp } from '../../navigation/Types'

interface PinInputInterface {
    pin: string
    setPin: (t: string) => void
}

const PinInput: FC<PinInputInterface> = ({ pin = "", setPin = () => {} }) => {
    const [focus, setFocus] = useState(false)
    const {replace} = useNavigation<AuthStackGenericProp<"SelectCityScreen">>()

    // Responsible For Focus On Mount
    useEffect(() => {
        setFocus(true)
        if (focus === false) {
            setFocus(true)
        }

        return () => setFocus(false)
    }, [])

    useEffect(() => {
        if (pin.length === 4 ) {
            replace("SelectCityScreen")
        }
    }, [pin])

    return (
        <TextInput
            value={pin} onChangeText={setPin}
            textContentType={"password"}  maxLength={4} multiline={false}
            keyboardAppearance={"default"}
            placeholderTextColor={'white'} style={PinInputStyle.input}  />
    )
}

export const PinMemoizedInput = memo(PinInput)