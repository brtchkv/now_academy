import { List } from 'antd';
import * as React from 'react';

import { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Logo } from './Logo';

export const MobileMenu: React.FunctionComponent = () => {
	const items = [
		{
			'Learn':
				[
					['beginner-level', 'Beginner'],
					['intermediate-level', 'Intermediate'],
					['advanced-level', 'Advanced'],
				]
		},
		{'Products':
			[
				['https://changenow.io/', 'ChangeNOW'],
				['https://nowpayments.io/', 'NOWPayments'],
				['https://nownodes.io/','NOWNodes'],
				['https://changenow.io/b2b','B2B Solutions'],
				['https://changenow.io/token','NOW Token']
			]
		},
		{'Company':
			[
				['https://changenow.io/terms-of-use', 'Terms of Use'],
				['https://changenow.io/privacy-policy', 'Privacy Policy'],
				['https://changenow.io/','Corporate responsibility'],
				['https://changenow.io/','For press'],
				['https://changenow.io/jobs','Jobs']
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
			<List.Item key="/" style={{ paddingLeft: 0, paddingTop: 0, borderBottom: 0 }}>
				<Logo />
			</List.Item>
			{
				items.map((item) => (
						Object.keys(item).map((title) => (
							<>
								<SectionName>{title}</SectionName>
								{ 
									item[title].map(([slug, text]) => (
										<List.Item key={slug} style={{ borderBottom: 0, padding: '0' }}>
											<StyledHref to={`/${slug}`} className={selectedKey === slug ? 'activeLink' : ''}>
												{text}
											</StyledHref>
										</List.Item>
									))
								}
							</>
						))
					)
				)
			}
		</List>
	);
};

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

const StyledHref = styled.a`
	font-size: 18px;
	display: block;
	color: #FFFFFF;
	line-height: 2;
	font-weight: lighter;
	@media (max-width: ${props => props.theme.screen.md}) {
    	margin-bottom: 5px;
  	}
`;

