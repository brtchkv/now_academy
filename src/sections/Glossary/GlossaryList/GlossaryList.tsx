import { Col, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import { GlossaryDropDown } from '@glossary/GlossaryDropDown';

export const GlossaryList: React.FunctionComponent = ({ termById, termIdsByLevelName, level, type }) => {
	const getSortedTermsByLevelName = (levelName) => {
		return termIdsByLevelName[levelName].map(termId => termById[termId]).sort((termA, termB) => termA.name.localeCompare(termB.name));
	};

	const getTerms = (terms) => {
		return terms.map(({ name, shortDescription, description }, i) => (
			<GlossaryDropDown key={i} name={name} shortDescription={shortDescription} description={description}/>
		))
	};

	let formattedTerms = Object.values(termById);
	let termsComponent;

	if (level) {
		formattedTerms = formattedTerms.filter(term => term.level.name === level);
	}

	if (type) {
		formattedTerms = formattedTerms.filter(term => term.term_type.name === type);
	}

	if (!level) {
		formattedTerms = formattedTerms.sort((termA, termB) => termA.name.localeCompare(termB.name));
		const termsByLetter = formattedTerms.reduce((acc, term) => {
			const firstLetter = term.name[0].toUpperCase();
			acc[firstLetter] = acc[firstLetter] || [];
			acc[firstLetter].push(term);
			return acc;
		}, {});

		termsComponent = Object.entries(termsByLetter).map(([letter, terms]) => {
			return (
				<div key={letter}>
					<Letter id={letter}>{letter}</Letter>
					<MarginBottom>
						{getTerms(terms)}
					</MarginBottom>
				</div>
			)
		});
	} else {
		termsComponent = getTerms(getSortedTermsByLevelName(level));
	}

	const termIndexByName = formattedTerms.reduce((acc, term, index) => {
		const name = term.name;
		acc[name] = index;
		return acc;
	}, {});

	return (
		<div>
			{ termsComponent}
		</div>
	);
};


const MarginBottom = styled.div`
	margin-bottom: 30px;
`;

const Letter = styled.p`
	color: ${({ theme }) => theme.color.green.regular};
	font-weight: 900;
	display: inline-block;
	padding: 5px 10px;
`;

