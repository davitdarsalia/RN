import GlobalModal from './GlobalModal'

type GlobalModalRefs = {
	modal: GlobalModal | null
}

const references: GlobalModalRefs = {
	modal: null
}

export const GlobalModalRef = (ref: GlobalModal) => {
	references.modal = ref
}

export const showModal = (message: string) => {
	references.modal?.showModal(message)
}

export const hideModal = () => {
	references.modal?.hideModal()
}