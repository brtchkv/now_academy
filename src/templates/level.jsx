import { Col, Row } from 'antd';
import React from "react";
import { graphql } from "gatsby";

import { Layout } from '@components/Layout';
import { Navigation } from '@level/Navigation';
import { LevelTerms } from '@level/Terms';
import { Header } from '@level/Header';
import { Articles } from '@level/Articles';
import styled from "styled-components"

import {
  Section,
  Container,
  MarginBottom
} from '@components/global';

const Level = ({ data }) => {
  const level = data.strapiLevel;
  const {
    name,
    description,
    orderedArticles,
    next_level,
    prev_level,
  } = level;
  const articles = orderedArticles.map(({ article }) => article);

  return (
    <Layout>
        <Container>
          <DesktopNavigation>
            <MarginBottom>
              <Navigation {...{ next_level, prev_level }} />
            </MarginBottom>
          </DesktopNavigation>
          <Row>
            <Col>
              <MarginBottom>
                <Header name={name} description={'а step-by-step guide to the basics of crypto'} />
              </MarginBottom>
              <MarginBottom>
                <Articles articles_list={articles} />
              </MarginBottom>
            </Col>
          </Row>
          <MobileNavigation>
            <Navigation {...{ next_level, prev_level }} />
          </MobileNavigation>
        </Container>
    </Layout>
  );
};

const DesktopNavigation = styled.div`
  @media (max-width: ${({ theme }) => theme.screen.md}) {
    display: none;
  }
`

const MobileNavigation = styled.div`
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    display: none;
  }
`

export const query = graphql`
  query LevelQuery($id: Int!) {
    strapiLevel(strapiId: { eq: $id }) {
      strapiId
      name
      description
      next_level {
	      slug
        name
      }
      prev_level {
        slug
	      name
      }
      orderedArticles {
        article {
          description
          id
          title
          slug
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
    }
  }
`;

export default Level
