import styled from 'styled-components';
import * as React from 'react';
import { stringToSlug } from '@utils/utils';
import showdown from 'showdown';
import Img from 'gatsby-image';


export const ArticleSections = ({ sections, image }) => {
	const converter = new showdown.Converter();
	return (
		<>
			{sections.map(({ title, content }, i) => (
				<div key={`section__${i}`}>
					{ i > 0 &&
						<SectionTitle id={stringToSlug(title)}>{title}</SectionTitle>
					}
					<SectionContent dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
					{ i == 0 &&
						image && <StyledImg fluid={image.childImageSharp.fluid} />
					}
				</div>
			))}

		</>
	)
};

const StyledImg = styled(Img)`
	margin-bottom: 30px;
`;


const SectionTitle = styled.div`
	margin-bottom: 20px;
	margin-top: 100px;
	font-style: normal;
	font-weight: 300;
	font-size: 32px;
	line-height: 37px;
`;

const SectionContent = styled.div`
	font-size: 16px;
	line-height: 150%;  
	margin-bottom: 60px;
	font-weight: 300;
	font-size: 18px;
	line-height: 27px;
	color: ${({ theme }) => theme.color.gray.regular};
`;
