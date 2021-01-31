import { List } from 'antd';
import * as React from 'react';

import {useEffect, useState} from 'react';
import {Link} from 'gatsby';

import { Logo } from './Logo';

export const MobileMenu: React.FunctionComponent = () => {
	const slugAndTextList = [
		['beginner-level', 'Beginner level'],
		['glossary', 'Glossary'],
	];
	const pathname = typeof window !== 'undefined' && window.location.pathname || '';
	const [selectedKey, setSelectedKeys] = useState<string>('');

	useEffect(() => {
		const [selectedSlug] = slugAndTextList.find(([slug]) => pathname.includes(slug)) || [''];
		setSelectedKeys(selectedSlug);
	}, []);

	return (
		<List>
			<List.Item key="/" style={{paddingLeft: 0, paddingTop: 0, borderBottom: 0}}>
				<Logo/>
			</List.Item>
			{
				slugAndTextList.map(([slug, text]) => (
					<List.Item key={slug} style={{borderBottom: 0, padding: '0 0 12px 0'}}>
						<Link to={`/${slug}`} className={selectedKey === slug ? 'activeLink' : ''}>
							<b style={{color: '#fff'}}>{text}</b>
						</Link>
					</List.Item>
				))
			}
		</List>
	);
};
