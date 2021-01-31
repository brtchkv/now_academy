import { Col, Row } from 'antd';
import * as React from 'react';
import { StyledTitle } from '@components/global';

import { ArticleCard } from './components/ArticleCard';


export const Articles = () => {
  return (
	  <>
		  <StyledTitle>Recently in our blog</StyledTitle>
		  <Row gutter={30}>
			  <Col md={{ span: 24 }} lg={{ span: 8 }}>
				  <ArticleCard
					  title={'4 Ways to Avoid Losing Money on BCH and BSV Exchange'}
					  href={'https://changenow.io/blog/split-your-coins'}
					  image={'https://changenow.io/blog/changenow-content/uploads/2020/06/Hardfork_cake2.png'}
					  date={'JUNE 26, 2020'}
				  />
			  </Col>

			  <Col md={{ span: 24 }} lg={{ span: 8 }}>
				  <ArticleCard
					  title={'Earn Money with ChangeNOW Affiliate Program!'}
					  href={'https://changenow.io/blog/changenow-affiliate-program'}
					  image={'https://changenow.io/blog/changenow-content/uploads/2020/06/aFF.png'}
					  date={'JUNE 26, 2020'}
				  />
			  </Col>

			  <Col md={{ span: 24 }} lg={{ span: 8 }}>
				  <ArticleCard
					  title={'Cryptocurrency in the UK – a tough progress?'}
					  href={'https://changenow.io/blog/crypto-in-the-uk'}
					  image={'https://changenow.io/blog/changenow-content/uploads/2020/06/UK.png'}
					  date={'JUNE 19, 2020'}
				  />
			  </Col>
		  </Row>
	  </>
  )
};
