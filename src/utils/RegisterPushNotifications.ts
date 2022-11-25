import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'

export const RegisterPushNotificationHandler =  () => {
	return Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldPlaySound: true,
			shouldShowAlert: true,
			shouldSetBadge: false,
		})
	})
}