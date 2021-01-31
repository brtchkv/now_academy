import { Col, Row } from 'antd';
import React from "react";
import { graphql } from "gatsby";

import { Layout } from      '@components/Layout';
import { ArticleNavigation } from  '@article/ArticleNavigation';
import { ArticleSectionsNavigation } from  '@article/ArticleSectionsNavigation';
import { Breadcrumbs } from       '@article/Breadcrumbs';
import { Header } from      '@article/Header';
import { ArticleSections } from    '@article/ArticleSections';

import {
	Section,
	Container,
	MarginBottom
} from '@components/global';

const Article = ({ data, pageContext }) => {
	const { next, prev } = pageContext;
	const article = data.strapiArticle;
	const terms = data.allStrapiTerm.nodes;
	const {
		title,
		level,
		sections,
		image,
	} = article;

	const articleSections = (
		<MarginBottom>
			<ArticleSectionsNavigation sections={sections}/>
		</MarginBottom>
	);
	return (
		<Layout>
			<Section>
				<Container>
					<MarginBottom>
						<Breadcrumbs level={level} title={title}/>
					</MarginBottom>
					<Row>
						<Col md={{span: 15, order: 1}} xs={{order: 2}}>
							<MarginBottom>
								<Header title={title} image={image} terms={terms}/>
							</MarginBottom>
							<Col md={0} xs={24}>
								{articleSections}
							</Col>
							<MarginBottom>
								<ArticleSections sections={sections}/>
							</MarginBottom>
							<MarginBottom>
								<ArticleNavigation {...{prev, next, level}}/>
							</MarginBottom>
						</Col>

						<Col md={{span: 6, offset: 3, order: 2}} xs={{span: 0}}>
							{articleSections}
						</Col>
					</Row>
				</Container>
			</Section>
		</Layout>
	);
};

export const query = graphql`
    query ArticleQuery($id: Int!) {
        strapiArticle(strapiId: { eq: $id }) {
            level {
                name
		            slug
            }
            title
            description
            sections {
                content
                title
            }
            time_to_read
            image {
                childImageSharp {
                    fluid(webpQuality: 100, quality: 100) {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                }
            }
        }

        allStrapiTerm(filter: {articles: {elemMatch: {id: {eq: $id}}}}) {
            nodes {
                id
                name
                description
                shortDescription
                term_type {
                    name
                }
                level {
                    name
		                slug
                }
                articles {
                    title
                    slug
                }
            }
        }
    }
`;

export default Article;
