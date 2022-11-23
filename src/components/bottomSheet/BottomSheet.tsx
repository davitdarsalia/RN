import {ReactNode, FC} from "react";
import {View} from "react-native";

import Modal from "react-native-modal";

interface Props {
    children:  ReactNode
}

export const BottomSheetComponent: FC<Props> = ({children}) => {
    return (
        <View>
            <Modal isVisible={true}
                style={{
                    height: '80%',
                    width: '100%',
                    position: 'absolute',
                    bottom: '-15%',
                    left: '-5%',
                    backgroundColor: 'white',
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                   scrollHorizontal
                   backdropColor={"transparent"}
            >
                {children}
            </Modal>
        </View>
    )
}
