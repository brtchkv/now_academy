import * as React from 'react';
import { Link } from 'gatsby';

import logo from './logo.svg';
import styled from 'styled-components';


export const Logo: React.FunctionComponent = () => {
	return (
		<StyledLink to="/">
			<img src={logo} alt="ChangeNOW" style={{ width: '146px' }} />
		</StyledLink>
	);
};

const StyledLink = styled(Link)`
	margin-left: auto;
	margin-right: auto;
`;