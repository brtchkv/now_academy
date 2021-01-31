import { Layout, Drawer, Col, Row } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

import { MobileMenu } from './components/MobileMenu';
import { DesktopMenu } from './components/DesktopMenu';
import { Logo } from './components/Logo';
import {
	Section,
	Container,
	MarginBottom
} from '@components/global';

const { Header } = Layout;

export const Navbar: React.FunctionComponent = () => {
	const [isDrawerVisible, setDrawerVisible] = useState(false);
	const showDrawer = () => {
		setDrawerVisible(true);
	};
	const onClose = () => {
		setDrawerVisible(false);
	};
	return (
		<div style={{maxWidth: '100%', backgroundColor: '#2B2B36' }}>
			<Container>
				<Header className="before-navbar">
					<Col lg={{ span: 24 }} xs={{ span: 0 }}>
						<DesktopMenu/>
					</Col>

					<Col lg={{span: 0}} xs={{span: 24}}>
						<Row>
							<Col xs={21}>
								<Logo/>
							</Col>
							<Col xs={3}>
								<MenuOutlined style={{color: '#fff', fontSize: '18px'}} onClick={showDrawer}/>
							</Col>
						</Row>
					</Col>

					<Drawer
						placement="right"
						drawerStyle={{backgroundColor: '#2B2B36' }}
						closable={false}
						onClose={onClose}
						visible={isDrawerVisible}
					>
						<MobileMenu/>
					</Drawer>
				</Header>
			</Container>
		</div>
	);
};
