import { Col, Row } from 'antd';
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

import { Layout } from      '@components/Layout';
import { ArticleNavigation } from  '@article/ArticleNavigation';
import { ArticleSectionsNavigation } from  '@article/ArticleSectionsNavigation';
import { ArticleSlider } from  '@article/ArticleSlider';
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
	const {
		title,
		level,
		sections,
		image,
	} = article;

	const articleSections = (
		<MarginBottom>
			<ArticleSlider sections={sections}/>
		</MarginBottom>
	);
	return (
		<Layout>
			<Section>
				<Container>
					<Row>
						<Col lg={{span: 24}} xs={{span: 0}} md={{span: 0}}>
							<MarginBottom>
								<Breadcrumbs level={level} title={title} {...{prev, next, level}}/>
							</MarginBottom>
						</Col>
					</Row>
					<Row>
						<StyledArticleCol md={{span: 14, order: 1}} xs={{order: 2}}>
							<MarginBottom>
								<Header title={title} />
							</MarginBottom>
							<MarginBottom>
								<ArticleSections sections={sections} image={image}/>
							</MarginBottom>
						</StyledArticleCol>
					</Row>
				</Container>
			</Section>
		</Layout>
	);
};

const StyledArticleCol = styled(Col)`
  margin: auto;
`

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
    }
`;

export default Article;
