import React from "react"
// import { Link } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"


const Banner = (props) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1> { props.state.bannerTitle } </h1>
					<p> { props.state.bannerContent } </p>
					<Image src=""/>
				</Col>
			</Row>
		</Container>
	)
}

export default Banner


export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      ...fluidImage
    }
  }
`

