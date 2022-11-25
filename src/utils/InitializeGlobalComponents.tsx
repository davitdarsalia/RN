import React from 'react'

import { GlobalModalRef } from '../components/Globals/globalModal/Modal.methods'
import { GlobalLoaderRef } from '../components/Globals/globalLoader/Loader.methods'

import GlobalLoader from '../components/Globals/globalLoader/GlobalLoader'
import GlobalModal from '../components/Globals/globalModal/GlobalModal'

/* Insert Global Components Here */

export const InitializeGlobalComponents = () => {
	return (
		<>
			<GlobalLoader ref={GlobalLoaderRef} />
			<GlobalModal ref={GlobalModalRef} />
		</>
		)
}