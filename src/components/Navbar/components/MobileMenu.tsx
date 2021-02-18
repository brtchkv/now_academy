import { List } from 'antd';
import * as React from 'react';

import { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Logos } from './Logos';

export const MobileMenu = (props) => {
	const items = [
		{
			'Learn':
				[
					['/beginner-level', 'Beginner'],
					['#', 'Intermediate'],
					['#', 'Advanced'],
				]
		},
		{
			'Products':
				[
					['https://changenow.io/', 'ChangeNOW'],
					['https://nowpayments.io/', 'NOWPayments'],
					['https://nownodes.io/', 'NOWNodes'],
					['https://changenow.io/for-partners', 'B2B Solutions'],
					['https://changenow.io/token', 'NOW Token']
				]
		},
		{
			'Company':
				[
					['https://changenow.io/terms-of-use', 'Terms of Use'],
					['https://changenow.io/privacy-policy', 'Privacy Policy'],
					['https://changenow.io/business-ethics', 'NOW Responsibility'],
					['https://changenow.io/blog/', 'Blog'],
					['https://changenow.io/jobs', 'Jobs']
				]
		}
	];
	const pathname = typeof window !== 'undefined' && window.location.pathname || '';
	const [selectedKey, setSelectedKeys] = useState<string>('');

	// useEffect(() => {
	// 	const [selectedSlug] = items.find(([slug]) => pathname.includes(slug)) || [''];
	// 	setSelectedKeys(selectedSlug);
	// }, []);



	return (
		<List>
			<LogosItemsStyled key="logos">
				<Logos />
			</LogosItemsStyled>
			{
				items.map((item) => (
					Object.keys(item).map((title, i) => (
						<div key={i}>
							<SectionName>{title}</SectionName>
							{
								item[title].map(([slug, text]) => (
									<List.Item key={text} style={{ borderBottom: 0, padding: '0' }}>
										<StyledHref to={`${slug}`} className={selectedKey === slug ? 'activeLink' : ''}>
											{text}
										</StyledHref>
									</List.Item>
								))
							}
						</div >
					))
				)
				)
			}
		</List>
	);
};


const LogosItemsStyled = styled(List.Item)`
	padding-left: 0;
	padding-top: 0;
	border-bottom: 0;
`

const SectionName = styled.p`
	font-size: 14px;
	letter-spacing: 0.2px;
	color: #FFFFFF;
	line-height: 2;
	font-weight: lighter;
	opacity: 0.6;
	text-transform: uppercase;

	@media (max-width: ${props => props.theme.screen.md}) {
    	margin-top: 15px;
    	margin-bottom: 5px;
  	}
`;

const StyledHref = styled(Link)`
	font-size: 18px;
	display: block;
	color: #FFFFFF;
	line-height: 2;
	font-weight: lighter;
	&.activeLink {
		border-bottom: none;
	}
	@media (max-width: ${props => props.theme.screen.md}) {
    	margin-bottom: 5px;
  	}
`;

