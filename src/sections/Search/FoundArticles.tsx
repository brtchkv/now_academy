import styled from 'styled-components';
import * as React from 'react';

import { ArticleListItem } from './components/ArticleListItem';

export const FoundArticles = ({ articles }) => {
	return (
		<>
			{articles.map((article, i) => (
				<ArticleListItem key={i} article={article}/>
			))}
		</>
	)
};

