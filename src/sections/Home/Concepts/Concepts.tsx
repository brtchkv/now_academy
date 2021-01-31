import * as React from 'react';
import styled from 'styled-components';

import { TermsModal } from '@components/Modal/TermsModal';
import { Tag } from '@components/global';
import { useRef } from 'react';

export const Concepts: React.FunctionComponent = ({ mainTerms }) => {
	const childRef = useRef();

	return (
		<ConceptsContainer>
			<ConceptsTitle>Cryptocurrency in 3 minutes</ConceptsTitle>
			<ConceptsSubTitle>Want to grasp the basics of crypto in seconds? Click on the terms below!</ConceptsSubTitle>
			{mainTerms.map((term, i) => <Tag key={i} onClick={() => childRef.current.showModal(i)}>{term ? term.name : ''}</Tag>)}
			<TermsModal ref={childRef} terms={mainTerms}/>
		</ConceptsContainer>
	);
};

const ConceptsContainer = styled.div`
	background: #2E2E3B;
	height: 100%;
	position: relative;
	border-radius: 8px;
	color: #fff;
	line-height: 150%;
	padding: 50px;
`;

const ConceptsTitle = styled.p`
	font-weight: normal;
	font-size: 28px;
	line-height: 33px;
`;

const ConceptsSubTitle = styled.p`
	font-weight: 300;
	font-size: 18px;
	line-height: 21px;
`;
