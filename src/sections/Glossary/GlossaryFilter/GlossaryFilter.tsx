import { Link } from 'gatsby';
import { Col, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import { Tag } from '@components/global';

export const GlossaryFilter: React.FunctionComponent = ({ terms, level, type, onFilter }) => {
	const types = [...terms.reduce((acc, term) => {
		acc.add(term.term_type.name);
		return acc;
	}, new Set())].sort();
	const levels = ['Beginner level'];


	return (
		<Row>
			<Col md={12}>
				<p>Your level: </p>
				<Filters>
					<Link to={'/glossary'}>
						<StyledTag active={!(level)}>All</StyledTag>
					</Link>
					{levels.map(lvl => (
						<Link key={lvl} to={'/glossary'} state={{level: lvl}}>
							<StyledTag active={level && lvl === level}>{lvl}</StyledTag>
						</Link>
					))}
				</Filters>
			</Col>

			<Col md={12}>
				<p>Type: </p>
				<Filters>
					<Link to={'/glossary'}>
						<StyledTag active={!(type)}>All</StyledTag>
					</Link>
					{types.map(termType => (
						<Link key={termType} to={'/glossary'} state={{type: termType}} >
							<StyledTag active={type && termType === type}>{termType}</StyledTag>
						</Link>
					))}
				</Filters>
			</Col>
		</Row>
	);
};

const Filters = styled.div`
	margin-bottom: 30px;
`;

const StyledTag = styled(Tag)`
	color: ${props => props.active ? '#00C26F' : '#fff'};
`;

const StyledLink = styled(Link)`

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
