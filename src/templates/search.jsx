import React from "react";
import { graphql } from "gatsby";

import { Layout } from      '@components/Layout';
import { FoundArticles, FoundTerms } from    '@search';

import {
	Section,
	Container,
	MarginBottom
} from '@components/global';

const Level = (props) => {
	const { data, location } = props;
	const search = location.state ? location.state.search : undefined;
	const articles = data.allStrapiArticle.nodes.filter(article => {
		return !search || article.title.toLowerCase().includes(search.toLowerCase());
	});
	const terms = data.allStrapiTerm.nodes.filter(term => {
		return !search || term.name.toLowerCase().includes(search.toLowerCase());
	});
	return (
		<Layout>
			<Section>
				<Container>
					<MarginBottom>
						<h1>{search ? `You’ve been looking for: "${search}"` : 'All data'}</h1>
					</MarginBottom>
					<FoundTerms terms={terms}/>
          <FoundArticles articles={articles}/>
				</Container>
			</Section>
		</Layout>
	);
};

export const query = graphql`
  query SearchFullQuery {
    allStrapiArticle {
      nodes {
        description
        id
        title
	      slug
        level {
          name
          slug
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
        preview_image {
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
    allStrapiTerm {
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
      }
    }
  }
`;

export default Level
