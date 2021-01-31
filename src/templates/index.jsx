import { Col, Row } from 'antd';
import React from "react"

import { Layout } from '@components/Layout';
import { Header } from '@home/Header';
import { ChooseLevel } from '@home/ChooseLevel';
import { Section, Container, MarginBottom, SectionWithoutPadding } from '@components/global';


import "../assets/css/antd.less";
import "../assets/css/main.css";

const IndexPage = () => {
	return (
		<Layout>
			<Section accent>
				<Container>
					<Header/>
				</Container>
			</Section>
			<SectionWithoutPadding>
				<Container>
					<MarginBottom>
						<ChooseLevel/>
					</MarginBottom>
				</Container>
			</SectionWithoutPadding>
		</Layout>
	);
};

export default IndexPage
