import * as React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { Link } from 'gatsby';

import { TermsModal } from '@components/Modal/TermsModal';
import { Tag } from '@components/global';

export const LevelTerms: React.FunctionComponent = ({ terms, level }) => {
	const termsByType = terms.reduce((acc, term, i) => {
		term.originIndex = i;
		const termType = term.term_type.name;
		acc[termType] = acc[termType] || [];
		acc[termType].push(term);
		return acc;
	}, {});
	const formattedTerms = Object.values(termsByType).flat();

	const termIndexById = formattedTerms.reduce((acc, term, index) => {
		acc[term.id] = index;
		return acc;
	}, {});
	const childRef = useRef();
	const termsByTypeEntries = Object.entries(termsByType);
	return (
		<div>
			{terms.length > 0 && <Title>Top terms</Title>}
			{termsByTypeEntries.map(([termType, terms], i) => {
				return (
					<TermType key={i}>
						<TermTypeTitle to={'/glossary'} state={{type: termType}}>{termType}</TermTypeTitle>
							{terms.map((term, index) => <div key={index}><Tag onClick={() => childRef.current.showModal(termIndexById[term.id])}>{term ? term.name : ''}</Tag></div>)}
						</TermType>
				)
			})}
			{terms.length > 0 && <SeeFullList to={'/glossary'} state={{level: level}}>See full list →</SeeFullList>}
			<TermsModal ref={childRef} terms={formattedTerms}/>
		</div>
	);
};

const TermType = styled.div`
	font-size: 18px;
	line-height: 21px;
	margin-bottom: 70px;
`;

const SeeFullList = styled(Link)`
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.155em;
	text-transform: uppercase;
	color: #00C26F;
`;

const TermTypeTitle = styled(Link)`
	display: block;
	font-size: 18px;
	line-height: 21px;
	color: #fff;
	margin-bottom: 30px;
`;

const Title = styled.p`
	font-size: 24px;
	line-height: 28px;
	margin-bottom: 45px;
`;

