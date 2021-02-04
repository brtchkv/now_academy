import { Breadcrumb } from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

export const Breadcrumbs: React.FunctionComponent = ({ level, title, next, prev }) => {
	const getSlug = (slug) => {
		return slug ? `/${level.slug}/${slug}` : '';
	};

	const prevLesson = prev && (
		<Link to={getSlug(prev.slug)}>
			<NavigationItem style={{paddingRight: '1rem'}}>
			← {prev.title}
			</NavigationItem>
		</Link>
	);

	const nextLesson = next && (
		<Link to={getSlug(next.slug)}>
			<NavigationItem style={{textAlign: 'right'}}>
				{next.title} →
			</NavigationItem>
		</Link>
	);

	return (
		<Navigation>
			<StyledBreadcrumb separator="→">
				<Breadcrumb.Item>
					<Link to={'/'}>NOWAcademy</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>
					<Link to={`/${level.slug}`}>{level.name}</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>
					<span>{title}</span>
				</Breadcrumb.Item>
			</StyledBreadcrumb>
			<NavigationArticles>
				{prevLesson}
				{nextLesson}
			</NavigationArticles>
		</Navigation>
	);
};

const StyledBreadcrumb = styled(Breadcrumb)`
	color: ${({ theme }) => theme.color.gray.regular};
	width: max-content;
	& span {
		color: ${({ theme }) => theme.color.gray.regular};
	}	
	& a {
		color: ${({ theme }) => theme.color.gray.regular};
	}
	overflow:hidden; 
    white-space:nowrap; 
    text-overflow: ellipsis;
	padding-right: 1rem;	
	& a:hover {
		color: ${({ theme }) => theme.color.green.regular};
	}
`;

const NavigationItem = styled.div`
	border-radius: 4px;
	padding: 0;
	color: ${({ theme }) => theme.color.gray.regular};
	width: max-content;
	& span {
		color: ${({ theme }) => theme.color.gray.regular};
	}	
	& a {
		color: ${({ theme }) => theme.color.gray.regular};
	}		

	&:hover {
		color: ${({ theme }) => theme.color.green.regular};
	}
`;

const NavigationArticles = styled.div`
	display: flex;
	flex-direction: row;
`

const Navigation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Title = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	letter-spacing: 0.155em;
	text-transform: uppercase;
	color: #00C26F;
`;