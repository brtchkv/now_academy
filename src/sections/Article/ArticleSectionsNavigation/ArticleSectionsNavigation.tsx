import styled from 'styled-components';
import * as React from 'react';
import { Affix, Anchor, Col, Row } from 'antd';
import { stringToSlug } from '@utils/utils';

const { Link } = Anchor;

export const ArticleSectionsNavigation = ({ sections }) => {
	return (
		<>
			<Row>
				<Col md={24} xs={0}>
					<Affix offsetTop={15}>
						<StyledAnchor targetOffset={15}>
							{sections.map(({ title, content }, i) => (
								<StyledLink key={`section__${i}`} href={`#${stringToSlug(title)}`} title={title} />
							))}
						</StyledAnchor>
					</Affix>
				</Col>
			</Row>
		</>
	)
};

const Title = styled.p`
	font-weight: 300;
	font-size: 18px;
	line-height: 140%;
	color: #fff;
`;

const StyledAnchor = styled(Anchor)`
	background-color: #252531;
	color: #fff;
`;

const StyledLink = styled(Link)`
	& a {
		color: #fff;
	}
`;

const SectionTitle = styled.div`
	font-size: 24px;
	line-height: 28px;
	margin-bottom: 20px;

`;

const SectionContent = styled.div`
	font-size: 16px;
	line-height: 150%;
	margin-bottom: 60px;
`;
