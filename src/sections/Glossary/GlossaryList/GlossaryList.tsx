import { Col, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

import { TermsModal } from '@components/Modal/TermsModal';
import plus from "./assets/plus.svg";

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
				<Col md={17}>
					<TermDescription dangerouslySetInnerHTML={{ __html: shortDescription }}/>
				</Col>
				<StyledCol md={0} lg={2} xs={0}>
					<img src={plus}/>
				</StyledCol>
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

const StyledCol = styled(Col)`
	text-align: end;
	margin: auto;
`
const MarginBottom = styled.div`
	margin-bottom: 30px;
`;

const Letter = styled.p`
	color: ${({ theme }) => theme.color.green.regular};
	font-weight: 900;
	display: inline-block;
	padding: 5px 10px;
`;

const StyledRow = styled(Row)`
	padding: 24px;
	margin-bottom: 10px;
	border: 1px solid${({ theme }) => theme.color.blue.regular};

	&:hover {
    cursor: pointer;
    background: rgba(97, 97, 116, 0.3);
  }
`;

const TermName = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 27px;
	color: #FFFFFF;
`;

const TermDescription = styled.p`
	font-size: 16px;
	color: ${({ theme }) => theme.color.gray.regular};
	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	line-height: 27px;
`;
