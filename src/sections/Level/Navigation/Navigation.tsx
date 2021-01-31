import styled from 'styled-components';
import * as React from 'react';
import { Link } from "gatsby";

export const Navigation: React.FunctionComponent = ({ prev_level, next_level }) => {
	let prev;
	let next;

	if (prev_level) {
		prev = <LevelLink level={3} to={`/${prev_level.slug}`}>← {prev_level.name}</LevelLink>;
	}

	if (next_level) {
		next = <LevelLink style={{marginLeft: 'auto'}} level={3} to={`/${next_level.slug}`}>{next_level.name} →</LevelLink>;
	}
	return (
		<NavigationBlock>
			{prev}
			{next}
		</NavigationBlock>
	);
};

const NavigationBlock = styled.div`
	display: flex;
	width: 100%;
  	justify-content: space-between;
`;


const LevelLink = styled(Link)`
	font-size: 18px;
	color: #A8A8AD;
	line-height: 21px;
	font-weight: lighter;
	&:hover {
    	color: #ecf0f1;
  	}
`;
