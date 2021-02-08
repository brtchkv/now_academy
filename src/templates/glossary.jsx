import { Col, Row } from 'antd';
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';


import { Layout } from '@components/Layout';
import { GlossaryList } from '@glossary/GlossaryList';
import { GlossaryTitle } from '@glossary/GlossaryTitle';
import { GlossarySections } from '@glossary/GlossarySections';
import { GlossaryBreadcrumbs } from '@glossary/GlossaryBreadcrumbs';

import {
	Section,
	Container,
	MarginBottom
} from '@components/global';

const Glossary = (props) => {
	const { data, location } = props;
	const level = location.state ? location.state.level : undefined;
	const type = location.state ? location.state.type : undefined;
	const terms = data.allStrapiTerm.nodes;
	const termById = data.allStrapiTerm.nodes.reduce((acc, term) => {
		acc[term.strapiId] = term;
		return acc;
	}, {});
	const termIdsByLevelName = data.allStrapiLevel.nodes.reduce((acc, level) => {
		acc[level.name] = level.terms.map(term => term.id);
		return acc;
	}, {});
	return (
		<Layout>
			<Section>
				<Container>
					<Row>
						<Col md={24} lg={24} xs={0}>
							<MarginBottom>
								<GlossaryBreadcrumbs terms={terms} level={level || { slug: '/glossary', name: 'Glossary' }} type={type} />
							</MarginBottom>
						</Col>
						<Col span={24}>
							<MarginBottom>
								<GlossaryTitle />
							</MarginBottom>
						</Col>
					</Row>
					<Row>
						<Col md={24} xs={0}>
							<MarginBottom>
								<GlossarySections level={level} />
							</MarginBottom>
						</Col>
						<StyledCol lg={21} md={24} xs={24}>
							<MarginBottom>
								<GlossaryList termIdsByLevelName={termIdsByLevelName} termById={termById} level={level} type={type} />
							</MarginBottom>
						</StyledCol>
					</Row>
				</Container>
			</Section>
		</Layout>
	);
};

const StyledCol = styled(Col)`
	@media (min-width: ${({ theme }) => theme.screen.md}) {
		margin: auto;
  	}
`

export const query = graphql`
    query TermsQuery {
        allStrapiTerm {
            nodes {
                id
                strapiId
                name
                term_type {
                    name
                }
                level {
                    name
                    slug
                }
                shortDescription
                description
            }
        }

        allStrapiLevel {
            nodes {
                name
                terms {
                    id
                }
            }
        }
    }
`;

export default Glossary;
