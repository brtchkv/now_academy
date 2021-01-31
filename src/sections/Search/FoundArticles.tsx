import styled from 'styled-components';
import * as React from 'react';

import { ArticleListItem } from './components/ArticleListItem';

export const FoundArticles = ({ articles }) => {
	return (
		<>
			{articles.length ? <h2>Found articles:</h2> : undefined}
			{articles.map((article, i) => (
				<ArticleListItem key={i} article={article}/>
			))}
		</>
	)
};

