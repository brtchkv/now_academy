import styled from 'styled-components';
import * as React from 'react';
import { Link } from "gatsby";
import { Breadcrumb } from 'antd';

export const Navigation: React.FunctionComponent = ({name, prev_level, next_level }) => {
	let next;

	// if (next_level) {
	// 	next = <LevelLink style={{marginLeft: 'auto'}} level={3} to={`/${next_level.slug}`}>{next_level.name} →</LevelLink>;
	// }
	return (
		<NavigationBlock>
			<StyledBreadcrumb separator="→">
				<Breadcrumb.Item>
					<Link to={'/'}>NOWAcademy</Link>
				</Breadcrumb.Item>
				{prev_level && 
					<Breadcrumb.Item>
						<Link to={`/${prev_level.slug}`}>{prev_level.name}</Link>
					</Breadcrumb.Item>
				}
				<Breadcrumb.Item>
					{name}
				</Breadcrumb.Item>
			</StyledBreadcrumb>
			{/* {next} */}
		</NavigationBlock>
	);
};

const NavigationBlock = styled.div`
	display: flex;
	width: 100%;
  	justify-content: space-between;
	padding-top: .5rem;
	@media (min-width: 1216px) {
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;


const LevelLink = styled(Link)`
	font-size: 18px;
	color: ${({ theme }) => theme.color.gray.regular};;
	line-height: 21px;
	font-weight: lighter;
	&:hover {
    	color: ${({ theme }) => theme.color.green.regular};
  	}
`;

const StyledBreadcrumb = styled(Breadcrumb)`
	font-size: 18px;
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
	line-height: 21px;
	font-weight: lighter;
    text-overflow: ellipsis;
	padding-right: 1rem;	
	& a:hover {
		color: ${({ theme }) => theme.color.green.regular};
	}
`;
