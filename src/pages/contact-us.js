import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col } from "react-bootstrap"

const ContactPage = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row>
						<Col>
							<div className="pt-5 mt-5 pb-5 mb-5">
								<h1 className="mb-4 display-2">Contact Us</h1>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default ContactPage
