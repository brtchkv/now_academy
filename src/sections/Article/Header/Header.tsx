import styled from 'styled-components';
import Img from 'gatsby-image';

import { Terms } from '../Terms';

import * as React from 'react';

export const Header: React.FunctionComponent = ({ title, image, terms }) => {
	return (
		<div>
			<StyledH1>{title}</StyledH1>
			{image &&	<StyledImg fluid={image.childImageSharp.fluid}/>}
			<Terms terms={terms}/>
		</div>
	);
};

const StyledH1 = styled.h1`
	margin-bottom: 30px;
`;

const StyledImg = styled(Img)`
	margin-bottom: 30px;
`;
