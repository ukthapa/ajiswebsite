import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import '../scss/custom.scss';

const Base = ({children}) => {
	return (
		<>
			<Header />
				{children}
			<Footer />
		</>
	)
}

export default Base
