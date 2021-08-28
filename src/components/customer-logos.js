import React from "react"
import Image from  "../components/image"
import { Col } from "react-bootstrap"

class Customerlogos extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		const customers = this.props.customerlist;
			return (
				customers.map((item, index) => {
					return (
					<Col key={index}>
						<Image  key={index} src={item.companylogo} alt={item.companyname} />
					</Col>
					)
				})
			)
	}
}


export default Customerlogos
