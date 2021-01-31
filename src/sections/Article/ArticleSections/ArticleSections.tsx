import styled from 'styled-components';
import * as React from 'react';
import { stringToSlug } from '@utils/utils';
import showdown from 'showdown';

export const ArticleSections = ({ sections }) => {
	const converter = new showdown.Converter();
	return (
		<>
			{sections.map(({title, content}, i) => (
				<div key={`section__${i}`}>
					<SectionTitle id={stringToSlug(title)}>{title}</SectionTitle>
					<SectionContent dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}/>
				</div>
			))}
		</>
	)
};

const SectionTitle = styled.div`
	font-size: 24px;
	line-height: 28px;
	margin-bottom: 20px;

`;

const SectionContent = styled.div`
	font-size: 16px;
	line-height: 150%;  
	margin-bottom: 60px;
`;
