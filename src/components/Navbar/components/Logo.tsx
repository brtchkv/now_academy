import * as React from 'react';
import { Link } from 'gatsby';

import logo from './logo.svg';

export const Logo: React.FunctionComponent = () => {
	return (
		<Link to="/">
			<img src={logo} alt="ChangeNOW" style={{ width: '146px' }} />
		</Link>
	);
};
