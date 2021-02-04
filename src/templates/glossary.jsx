import { Col, Row } from 'antd';
import React from "react";
import { graphql } from "gatsby";

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
	console.log(location);
	return (
		<Layout>
			<Section>
				<Container>
					<MarginBottom>
						<GlossaryBreadcrumbs terms={terms} level={level || {slug:'/glossary', name:'Glossary'}} type={type}/>
					</MarginBottom>
					<MarginBottom>
						<GlossaryTitle/>
					</MarginBottom>
					<Row>
						<Col md={24}>
							<MarginBottom>
								<GlossarySections level={level}/>
							</MarginBottom>
						</Col>
						<Col md={24}>
							<MarginBottom>
								<GlossaryList termIdsByLevelName={termIdsByLevelName} termById={termById} level={level} type={type}/>
							</MarginBottom>
						</Col>
					</Row>
				</Container>
			</Section>
		</Layout>
	);
};

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
