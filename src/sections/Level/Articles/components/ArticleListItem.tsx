import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export const ArticleListItem = ({ article }) => {
	return (
		<Aricle to={article.slug}>
			{article.preview_image && <AricleImg fluid={article.preview_image.childImageSharp.fluid} />}
		</Aricle>
	)
};


const Aricle = styled(Link)`
	background: rgba(97, 97, 116, 0.3);
	color: #fff;
	border-radius: 5px;
	width:100%;
  	height:100%;

  	overflow: hidden;
  	display:flex;
  	justify-content:center;
  	justify-content: space-between;
  	align-items:center;
  	transition: 0.2s;
  
  	&:hover {
    	background-color: #616174;
    	color: #fff;
  	}
`;

const AricleImg = styled(Img)`
	width: 144px;
	height: 144px;
	object-fit: cover;
	flex-shrink: 0;
	border-radius: 5px;
`;
