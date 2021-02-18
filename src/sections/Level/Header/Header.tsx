import styled from 'styled-components';

import * as React from 'react';


export const Header: React.FunctionComponent = ({ name, description }) => {
	return (
		<div>
			<StyledH>{name}</StyledH>
			<StyledP>{description}</StyledP>
		</div>
	);
};

const StyledP = styled.p`
	font-weight: 300;
	font-size: 18px;
	line-height: 140%;
	text-align: center;
	font-weight: lighter;
	color: ${({theme}) => theme.color.gray.regular};
	@media (max-width: ${({ theme }) => theme.screen.xs}) {
		text-align: left;
  	}
`;

const StyledH = styled.h1`
	font-weight: 300;
	text-align: center;
	font-weight: lighter;
	font-size: 38px;
	@media (max-width: ${({ theme }) => theme.screen.xs	}) {
		text-align: left;
  	}
`;
