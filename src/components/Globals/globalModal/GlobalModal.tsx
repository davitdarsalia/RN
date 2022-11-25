import React, {PureComponent} from 'react'
import { StyleSheet, Text, TouchableOpacity, Vibration } from 'react-native'
import Modal  from 'react-native-modal'
import { MaterialIcons } from '@expo/vector-icons';
import { hideModal } from './Modal.methods'

export default class GlobalModal extends PureComponent {
	state = {
		active: false,
		info: "",
	}

	ONE_SECOND = 1000

	showModal = (message: string) => {
		this.setState({active: true, info: message})
		Vibration.vibrate(10 * this.ONE_SECOND)
	}

	hideModal = () => {
		this.setState({active: false})
		Vibration.vibrate(1 * this.ONE_SECOND)
	}

	render() {
		return (
			this.state.active && (
				<Modal animationInTiming={700} animationIn={"shake"} animationOut={"fadeOut"} style={modalStyles.wrapper} isVisible={this.state.active}>
					<TouchableOpacity onLongPress={hideModal} activeOpacity={.95} style={modalStyles.innerWrapper}>
						<MaterialIcons name="error" size={45} color="red" />
						<Text style={modalStyles.message}>{this.state.info}</Text>
					</TouchableOpacity>
				</Modal>
			)
		)
	}
}

const modalStyles = StyleSheet.create({
	wrapper: {
		width: '100%',
		height: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	message: {
		fontSize: 25,
		fontWeight: '500',
		color: 'black'
	},
	innerWrapper: {
		width: '90%',
		height: '20%',
		backgroundColor: 'white',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		borderRadius: 13,
		padding: '2%'
	}
})