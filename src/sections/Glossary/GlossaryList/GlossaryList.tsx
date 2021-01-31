import { Col, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

import { TermsModal } from '@components/Modal/TermsModal';

export const GlossaryList: React.FunctionComponent = ({ termById, termIdsByLevelName, level, type }) => {
	const childRef = useRef();
	const getSortedTermsByLevelName = (levelName) => {
		return termIdsByLevelName[levelName].map(termId => termById[termId]).sort((termA, termB) => termA.name.localeCompare(termB.name));
	};

	const getTerms = (terms) => {
		return terms.map(({name, shortDescription}, i) => (
			<StyledRow key={i} onClick={() => childRef.current.showModal(termIndexByName[name])}>
				<Col md={5}>
					<TermName>
						{name}
					</TermName>
				</Col>
				<Col md={19}>
					<TermDescription dangerouslySetInnerHTML={{ __html: shortDescription }}/>
				</Col>
			</StyledRow>
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
			{ termsComponent }
			<TermsModal ref={childRef} terms={formattedTerms}/>
		</div>
	);
};

const MarginBottom = styled.div`
	margin-bottom: 30px;
`;

const Letter = styled.p`
	background: #00C26F;
	font-weight: 900;
	display: inline-block;
	border-radius: 3px;
	padding: 5px 10px;
`;

const StyledRow = styled(Row)`
	padding: 24px;
	border-radius: 8px;
	background: rgba(97, 97, 116, 0.07);
	margin-bottom: 10px;

	&:hover {
    cursor: pointer;
    background: rgba(97, 97, 116, 0.3);
  }
`;

const TermName = styled.p`
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	color: #FFFFFF;
`;

const TermDescription = styled.p`
	font-size: 16px;
	line-height: 150%;
	color: #FFFFFF;
`;
