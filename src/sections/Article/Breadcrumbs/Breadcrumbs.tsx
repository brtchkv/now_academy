import { Breadcrumb } from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

export const Breadcrumbs: React.FunctionComponent = ({ level, title }) => {
	return (
		<StyledBreadcrumb separator=">">
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
	);
};

const StyledBreadcrumb = styled(Breadcrumb)`
	color: #929298;
	& span {
		color: #929298;
	}	
	& a {
		color: #929298;
	}	
`;
