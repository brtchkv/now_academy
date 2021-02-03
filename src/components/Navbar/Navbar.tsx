import { Layout, Drawer, Col, Row } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';

import { MobileMenu } from './components/MobileMenu';
import { DesktopMenu } from './components/DesktopMenu';
import { Logo } from './components/Logo';
import styled from 'styled-components';
import {
	Section,
	Container,
	MarginBottom
} from '@components/global';

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
	return (
		<StyledNav>
			<Container>
				<Header className="before-navbar">
					<Col lg={{ span: 24 }} xs={{ span: 0 }}>
						<DesktopMenu/>
					</Col>

					<Col lg={{span: 0}} xs={{span: 24}}>
						<Row justify="center">
							<StyledCol xs={3}>
								<MenuOutlined style={{color: '#fff', fontSize: '25px', alignSelf: 'center',}} onClick={showDrawer}/>
							</StyledCol>
							<StyledCol xs={18}>
								<Logo/>
							</StyledCol>
							<StyledCol xs={3}>
								<StyledSearchOutlined style={{color: '#fff', fontSize: '25px', alignSelf: 'center', marginLeft: 'auto'}} onClick={showSearch}/>
							</StyledCol>
						</Row>
					</Col>

					<Drawer
						placement="left"
						drawerStyle={{backgroundColor: '#2B2B36' }}
						closable={true}
						onClose={onCloseDrawer}
						visible={isDrawerVisible}
						width={'100%'}
						bodyStyle={{padding: '3.2rem'}}
					>
						<MobileMenu/>
					</Drawer>
				</Header>
			</Container>
		</StyledNav>
	);
};

const StyledNav = styled.div`
	max-width: '100%';
	background-color: '#2B2B36';
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
	padding: 3.2rem;
`