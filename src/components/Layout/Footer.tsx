import { Col, Divider, Layout, Row } from 'antd';
import styled from 'styled-components';
import * as React from 'react';
import { Link } from 'gatsby';
import facebook from './social/facebook.svg';
import instagram from './social/instagram.svg';
import reddit from './social/reddit.svg';
import twitter from './social/twitter.svg';
import youtube from './social/youtube.svg';
import telegram from './social/telegram.svg';

import changeNow from './changeNow.svg';
import {
	Section,
	Container,
	MarginBottom
} from '@components/global';

const { Footer } = Layout;

export const FooterLayout: React.FunctionComponent = () => (
	<StyledFooter>
		<Row>
			<Col lg={{ order: 1, span: 12 }} md={{ order: 2, span: 24 }} xs={{ order: 2, span: 24 }}>
				<Col lg={{ order: 1}} md={{ order: 2 }} xs={{ order: 1 }}>
					<Row style={{ paddingBottom: '1rem' }}>
						<ChangeNowLogo src={changeNow} alt="Change Now logo" width={120} />
					</Row>
				</Col>
				<Col lg={{ order: 2}} md={{ order: 3 }} xs={{ order: 2 }}>
					<Row style={{ paddingBottom: '1.5rem' }}>
						<Copyright>© ChangeNOW 2021 ChangeNOW International ltd.</Copyright>
					</Row>
				</Col>
				<Col lg={{ order: 3}} md={{ order: 1 }} xs={{ order: 3 }}>
					<Row>
						<a target="_blank" href="https://twitter.com/ChangeNOW_io/">
							<SocialIcon src={twitter} alt="twitter logo" width="22px" />
						</a>
						<a target="_blank" href="https://www.youtube.com/ChangeNOW/">
							<SocialIcon src={telegram} alt="youtube logo" width="22px" />
						</a>
						<a target="_blank" href="https://www.instagram.com/changenow_io/">
							<SocialIcon src={instagram} alt="instagram logo" width="18px" />
						</a>
						<a target="_blank" href="https://www.facebook.com/ChangeNOW.io/">
							<SocialIcon src={facebook} alt="facebook logo" width="12px" />
						</a>
						<a target="_blank" href="https://www.reddit.com/r/ChangeNOW_io/">
							<SocialIcon src={reddit} alt="reddit logo" width="22px" />
						</a>
						<a target="_blank" href="https://www.youtube.com/ChangeNOW/">
							<SocialIcon src={youtube} alt="youtube logo" width="24px" />
						</a>
					</Row>
				</Col>
			</Col>
			<Col lg={{ order: 2, span: 12 }} md={{ order: 1, span: 24 }} xs={{ order: 1, span: 0 }}>
				<Row>
					<Col span={8}>
						<SectionName>Learn</SectionName>
						<StyledLink to={'/glossary'}>Glossary</StyledLink>
						<StyledLink to={'/beginner-level'}>Beginner</StyledLink>
						<StyledLink to={'/intermediate-level'}>Intermediate</StyledLink>
					</Col>
					<Col span={8}>
						<SectionName>Products</SectionName>
						<StyledHref target='_blank' href={'https://changenow.io/'}>ChangeNOW</StyledHref>
						<StyledHref target='_blank' href={'https://nowpayments.io/'}>NOWPayments</StyledHref>
						<StyledHref target='_blank' href={'https://nownodes.io/'}>NOWNodes</StyledHref>
						<StyledHref target='_blank' >B2B Solutions</StyledHref>
						<StyledHrefToken target='_blank'>NOW Token</StyledHrefToken>
					</Col>
					<Col span={8}>
						<SectionName>Products</SectionName>
						<StyledHref target='_blank' href='https://changenow.io/terms-of-use'>Terms of Use</StyledHref>
						<StyledHref target='_blank' href='https://changenow.io/privacy-policy'>Privacy Policy</StyledHref>
						<StyledHref target='_blank'>Corporate responsibility</StyledHref>
						<StyledHref target='_blank'>For press</StyledHref>
						<StyledHref target='_blank'>Jobs</StyledHref>
					</Col>
				</Row>
			</Col>
		</Row>
	</StyledFooter>
);

const SocialIcon = styled.img`
	margin-right: 25px;
  &:hover {
		fill: #00C26F;
	}
`;

const ChangeNowLogo = styled.img`
	@media (max-width: ${props => props.theme.screen.md}) {
		justify-content: center;
  	}
`;

const Copyright = styled.p`
	font-weight: 300;
	font-size: 14px;
	display: inline-block;
	line-height: 14px;
	@media (max-width: ${props => props.theme.screen.md}) {
    	margin-top: 15px;
    	margin-bottom: 5px;
  	}
	  @media (max-width: ${props => props.theme.screen.md}) {
		justify-content: center;
  	}
`;

const SectionName = styled.p`
	font-size: 13px;
	letter-spacing: 0.2px;
	color: #FFFFFF;
	line-height: 2;
	font-weight: lighter;
	opacity: 0.6;
	text-transform: uppercase;

	@media (max-width: ${props => props.theme.screen.md}) {
    	margin-top: 15px;
    	margin-bottom: 5px;
  	}
`;

const StyledLink = styled(Link)`
	font-size: 15px;
	display: block;
	color: #FFFFFF;
	line-height: 2;
	font-weight: lighter;
	@media (max-width: ${props => props.theme.screen.md}) {
    	margin-bottom: 5px;
  	}
`;

const StyledHref = styled.a`
	font-size: 15px;
	display: block;
	color: #FFFFFF;
	line-height: 2;
	font-weight: lighter;
	@media (max-width: ${props => props.theme.screen.md}) {
    	margin-bottom: 5px;
  	}
`;

const StyledHrefToken = styled.a`
	font-size: 15px;
	display: block;
	line-height: 2;
	font-weight: lighter;
	color: ${({ theme }) => theme.color.green.regular};

	@media (max-width: ${props => props.theme.screen.md}) {
    	margin-bottom: 5px;
  	}
`;

const StyledFooter = styled(Footer)`
	background-color: #2B2B36;
	@media (max-width: ${props => props.theme.screen.md}) {
    	padding: 1.5rem;
		flex-flow: row;
  	}
`;


export default FooterLayout;
