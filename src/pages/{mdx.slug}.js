import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../layout/base"
import { Container, Row, Col } from "react-bootstrap"

export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx;

  return (
    <Layout>
		<article>
			<div  className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row>
						<Col>
							<div className="pt-5 mt-5 pb-5 mb-5 text-center">
								<h1 className="display-2">{title}</h1>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Container>
				<Row>
					<Col>
						<MDXRenderer>{body}</MDXRenderer>
					</Col>
				</Row>
			</Container>
		</article>
	</Layout>
  );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`;
