import styled from 'styled-components';
import * as React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

export const GlossarySections = ({ level }) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

	return (
		<>
			{!level && (
				<StyledAnchor affix={false}>
					{alphabet.map((letter) => (
						<StyledLink key={letter} href={`#${letter}`} title={letter} />
					))}
				</StyledAnchor>
			)}
		</>
	)
};

const StyledAnchor = styled(Anchor)`
	background: ${({ theme }) => theme.color.blue.dark};
	color: #fff;
	max-height: 100%!important;
`;

const StyledLink = styled(Link)`
	padding: 0 0 0 10px;
	& a {
		color: #fff;
		padding: 7px 12px;
		display: inline-block;

		&:hover {
	    background-color: #00C26F;
	    border-radius: 3px;
	    color: #fff;
    }
	}
`;
