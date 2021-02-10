import * as React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import { Col, Row } from 'antd';


import glossary from './glossary.svg';
import logo from './academyLogo.svg';
import changeNow from './changeNow.svg';

export const Logos: React.FunctionComponent = () => {
	return (
		<Row>
			<Col span={24} style={{paddingBottom: '1rem'}}>
				<StyledLink to="/">
					<img src={logo} alt={"NowAcademy"} style={{ width: '148px' }} />
				</StyledLink>
			</Col>
			<Col span={24} style={{paddingBottom: '1rem'}}>
				<StyledLink to="/">
					<img src={changeNow} alt={"ChangeNow"} style={{ width: '137px' }} />
				</StyledLink>
			</Col>
			<Col span={24} style={{paddingBottom: '1rem'}}>
				<StyledLink to="/">
					<img src={glossary} alt={"Glossary"} style={{ width: '108px' }} />
				</StyledLink>
			</Col>
		</Row >
	);
};

const StyledLink = styled(Link)`
	margin-left: auto;
	margin-right: auto;
`;