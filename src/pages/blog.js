import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/base"
import { Container, Row, Col } from "react-bootstrap"

export default function Blog({ data }) {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row>
						<Col>
							<div className="pt-5 mt-5 pb-5 mb-5 text-center">
								<h1 className="display-2">Blog</h1>
								<p className="lead">Welcome to our journal. Here you can find the latest company news and business articles.</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<div>
				{data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
					<article>
						<h2>{frontmatter.title}</h2>
						<small>{frontmatter.date}</small>
						<p>{excerpt}</p>
					</article>
				))}
			</div>
		</Layout>
  )
}

export const pageQuery = graphql`
query SITE_INDEX_QUERY {
	allMdx(
		sort: { fields: [frontmatter___date], order: DESC }
		filter: { frontmatter: { published: { eq: true } } }
	) {
		nodes {
			id
			excerpt(pruneLength: 250)
			frontmatter {
				title
				date
			}
		}
	}
}
`
