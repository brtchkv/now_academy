import { Col, Row } from 'antd';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

export const ArticleNavigation: React.FunctionComponent = ({ next, prev, level }) => {
	const getSlug = (slug) => {
		return slug ? `/${level.slug}/${slug}` : '';
	};

	const prevLesson = prev && (
		<Link to={getSlug(prev.slug)}>
			<NavigationItem >
				{prev.title}
			</NavigationItem>
		</Link>
	);

	const nextLesson = next && (
		<Link to={getSlug(next.slug)}>
			<NavigationItem style={{ textAlign: 'right' }}>
				{next.title}
			</NavigationItem>
		</Link>
	);

	return (
		<StyledRow>
			<Row gutter={32}>
				<Col md={12}>
					{prevLesson}
				</Col>
				<Col md={12}>
					{nextLesson}
				</Col>
			</Row>
		</StyledRow>
	);
};

const StyledRow = styled.div`
	@media (min-width: 1024px) {
		max-width: 960px;
		padding-left: 0px;
		padding-right: 0px;
		margin: auto;
  	}
	@media (min-width: 1216px) {
		max-width: 1152px;
		padding: 24px 50px;
		padding-left: .5rem;
		padding-right: .5rem;
		margin: auto;
	}
`

const NavigationItem = styled.div`
	border-radius: 4px;
	padding: 25px;
	color: #FFFFFF;
	
	& span {
		color: #929298;
	}
	& a {
		color: #929298;
	}	

  &:hover {
    background: #373745;
  }
`;

const Title = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	letter-spacing: 0.155em;
	text-transform: uppercase;
	color: #00C26F;
`;
