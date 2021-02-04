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
						<Col lg={{span: 24}} xs={{span: 0}} md={{span: 24}}>
							<MarginBottom>
								<Breadcrumbs level={level} title={title} {...{prev, next, level}}/>
							</MarginBottom>
						</Col>
					</Row>
					{/* <MarginBottom>
						<ArticleNavigation {...{prev, next, level}}/>
					</MarginBottom> */}
					<Row>
						<Col md={{span: 17, offset: 3, order: 1}} xs={{order: 2}}>
							<MarginBottom>
								<Header title={title} image={image}/>
							</MarginBottom>
							<MarginBottom>
								<ArticleSections sections={sections}/>
							</MarginBottom>
						</Col>
						<StyledSlider md={{span: 2, offset: 2, order: 2}} xs={{ span: 0, offset: 0 }}>
							{articleSections}
						</StyledSlider>
					</Row>
				</Container>
			</Section>
		</Layout>
	);
};

const StyledSlider = styled(Col)`
  /* position: fixed;
  right: 6rem;
  width: 25px;
  height: 400px; */
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
    }
`;

export default Article;
