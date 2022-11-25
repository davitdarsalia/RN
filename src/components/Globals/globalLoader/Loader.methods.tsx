import GlobalLoader from './GlobalLoader'

type GlobalModalRefs = {
	loader: GlobalLoader | null
}

const references: GlobalModalRefs = {
	loader: null,
}

export const GlobalLoaderRef = (ref: GlobalLoader) => {
	references.loader = ref
}

export const startLoading = () => {
	references.loader?.show()
}

export const interruptLoading = () => {
	references.loader?.hide()
}

