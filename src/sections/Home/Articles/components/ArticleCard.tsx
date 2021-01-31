import { Card } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

const { Meta } = Card;

export const ArticleCard = ({ title, href, image, date }) => {
  return (
	  <a href={href} target='_blank'>
		  <StyledCard
			  bordered={false}
			  cover={<img src={image}/>}
		  >
			  <ArticleTitle>{title}</ArticleTitle>
			  <Meta description={date} />
		  </StyledCard>
	  </a>
  )
};

const ArticleTitle = styled.p`
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	color: #fff;
`;

const StyledCard = styled(Card)`
	background: #2E2E3B;
	border-radius: 5px;
	width: 100%;
	height: 100%;
	transition: 0.3s;
	overflow: hidden;
	&: hover {
		background: #616174;
	}
`;
