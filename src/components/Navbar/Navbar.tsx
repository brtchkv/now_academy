import { Layout, Drawer, Col, Row } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { graphql, useStaticQuery } from "gatsby"
import { MobileMenu } from './components/MobileMenu';
import { DesktopMenu } from './components/DesktopMenu';
import styled from 'styled-components';
import logo from './components/academyLogo.svg';
import { Link } from 'gatsby';

import {
	Section,
	Container,
	MarginBottom
} from '@components/global';
import { MobileSearch } from './components/MobileSearch';


const { Header } = Layout;

export const Navbar: React.FunctionComponent = () => {
	const [isDrawerVisible, setDrawerVisible] = useState(false);
	const [isSearchVisible, setSearchVisible] = useState(false);
	const showDrawer = () => {
		setDrawerVisible(true);
	};
	const onCloseDrawer = () => {
		setDrawerVisible(false);
	};
	const showSearch = () => {
		setSearchVisible(true);
	};
	const onCloseSearch = () => {
		setSearchVisible(false);
	};

	const data = useStaticQuery(graphql`
    query SearchQuery {
      allStrapiArticle {
        nodes {
          id
          title
          level {
            name
            slug
          }
        }
      }
      allStrapiTerm {
        nodes {
          id
          name
		  term_type {
            name
          }
        }
      }
    }
  `);

	return (
		<StyledNav>
			<Container>
				<Header className="before-navbar">
					<Col lg={{ span: 24 }} xs={{ span: 0 }}>
						<DesktopMenu data={data} />
					</Col>

					<Col lg={{ span: 0 }} xs={{ span: 24 }}>
						<Row justify="center">
							<StyledCol xs={3}>
								<MenuOutlined style={{ color: '#fff', fontSize: '25px', alignSelf: 'center', }} onClick={showDrawer} />
							</StyledCol>
							<StyledCol xs={18}>
								<StyledLink to="/">
									<img src={logo} alt={"ChangeNow"} style={{ width: '146px' }} />
								</StyledLink>
							</StyledCol>
							<StyledCol xs={3}>
								<StyledDrawer
									placement="right"
									drawerStyle={{ backgroundColor: '#2B2B36' }}
									closable={true}
									onClose={onCloseSearch}
									visible={isSearchVisible}
									width={'100%'}
									style={{ color: '#fff', fontSize: '25px', alignSelf: 'center', marginLeft: 'auto' }}
								>
									<MobileSearch data={data} onClose={onCloseSearch}/>
								</StyledDrawer>
								<StyledSearchOutlined style={{ color: '#fff', fontSize: '25px', alignSelf: 'center', marginLeft: 'auto' }} onClick={showSearch} />
							</StyledCol>
						</Row>
					</Col>

					<StyledDrawer
						placement="left"
						drawerStyle={{ backgroundColor: '#2B2B36' }}
						closable={true}
						onClose={onCloseDrawer}
						visible={isDrawerVisible}
						width={'100%'}
						bodyStyle={{ padding: '3.2rem' }}
					>
						<MobileMenu/>
					</StyledDrawer>
				</Header>
			</Container>
		</StyledNav>
	);
};

const StyledNav = styled.div`
	max-width: '100%';
	background-color: '#2B2B36';
	@media (min-width: 1024px) {
		padding: 24px 0;
		max-width: 960px;
		padding-left: 0px;
		padding-right: 0px;
		margin: auto;
  	}
	@media (min-width: 1216px) {
		max-width: 1152px;
		padding: 24px 50px;
		padding-left: 1rem;
		padding-right: 1rem;
		margin: auto;
	}
`;

const StyledCol = styled(Col)`
	display: flex;
`;

const StyledSearchOutlined = styled(SearchOutlined)`
	color: '#fff'; 
	font-size: '25px'; 
	align-self: 'center';
	margin-left: 'auto'
`;

const StyledDrawer = styled(Drawer)`
	& .anticon {
		font-size: 30px;
		color: white;
	}
`;
const StyledLink = styled(Link)`
	margin-left: auto;
	margin-right: auto;
`;