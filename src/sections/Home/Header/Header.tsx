import styled from 'styled-components';
import { Col, Row, Typography } from 'antd';
import * as React from 'react';
import image from './Main_illustration.png';

const { Title } = Typography;

export const Header: React.FunctionComponent = () => {
	return (
		<Row justify="center">
			<Col>
				<StyledH1>Everything you need to know about the world of crypto</StyledH1>
			</Col>
		</Row>
	);
};

const StyledH1 = styled.h1`
	font-weight: lighter;
	font-size: 36px;
	line-height: 140%;
	color: #FFFFFF;
	@media (max-width: ${({ theme }) => theme.screen.md}) {
    	padding-left: 1rem;
  	}
`;
