import * as LocalAuthentication from 'expo-local-authentication'

export const handleBiometricAuth = async <J>(fn: () => void, finallyAction?: () => {}) => {
    await LocalAuthentication.authenticateAsync({
        promptMessage: "Touch To Sign In",
        disableDeviceFallback: false,
        requireConfirmation: true,
    })
        .then(res => {res.success === true &&   fn()})
        .catch(e => console.warn(e.message()))
        .finally(() => finallyAction != undefined && finallyAction())
}