import styled from 'styled-components';
import * as React from 'react';

export const GlossaryTitle = () => {
	return (
		<>
			<StyledH1>Glossary</StyledH1>
			<StyledSpan>Click on a term to learn more</StyledSpan>
		</>
	)
};

const StyledH1 = styled.h1`
	display: inline-block;
	color: #fff;
	margin-right: 20px;
`;

const StyledSpan = styled.span`
	font-size: 14px;
	line-height: 16px;

`;
