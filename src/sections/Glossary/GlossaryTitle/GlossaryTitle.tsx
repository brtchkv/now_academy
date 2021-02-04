import styled from 'styled-components';
import * as React from 'react';

export const GlossaryTitle = () => {
	return (
		<GlossaryTitleStyled>
			<StyledH1>Glossary</StyledH1>
			<StyledSpan>Click on a term to learn more</StyledSpan>
		</GlossaryTitleStyled>
	)
};

const StyledH1 = styled.h1`
	display: inline-block;
	color: #fff;
	font-weight: 300;
	font-size: 38px;
	line-height: 45px;
	text-align: center;
`;

const StyledSpan = styled.span`
	font-weight: 300;
	font-size: 18px;
	line-height: 21px;
	color: ${({ theme }) => theme.color.gray.regular};
	text-align: center;
`;

const GlossaryTitleStyled = styled.div`
	font-size: 14px;
	line-height: 16px;
	display: flex;
	flex-direction: column;
`;
