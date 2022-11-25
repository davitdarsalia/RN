import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import { interruptLoading, startLoading } from '../components/Globals/globalLoader/Loader.methods'
import { hideModal, showModal } from '../components/Globals/globalModal/Modal.methods'

const AxiosGlobalInstance = axios.create({
	baseURL: "localhost:3000",
	timeout: 4000,
	headers: {'Content-Type': "application/json"}
})

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
	console.info(`[Request] [${JSON.stringify(config)}]`)
	startLoading()

	return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	console.error(`[Request Error] [${JSON.stringify(error)}]`)
	showModal(`${error.message} ${error.cause}`)
	interruptLoading()

	return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
	console.info(`[Response] [${JSON.stringify(response)}]`)
	interruptLoading()


	return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	console.error(`[Response Error] [${JSON.stringify(error)}]`)
	hideModal()
	interruptLoading()

	return Promise.reject(error)
}

const setInterceptorsToAxiosInstance =(instance: AxiosInstance): AxiosInstance => {
	instance.interceptors.request.use(onRequest, onRequestError)
	instance.interceptors.response.use(onResponse, onResponseError)

	return instance
}

export const API = setInterceptorsToAxiosInstance(AxiosGlobalInstance)