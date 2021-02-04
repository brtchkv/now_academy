import { Col, Divider, Layout, Row } from "antd"
import styled from "styled-components"
import * as React from "react"
import { Link } from "gatsby"
import facebook from "./social/facebook.svg"
import instagram from "./social/instagram.svg"
import reddit from "./social/reddit.svg"
import twitter from "./social/twitter.svg"
import youtube from "./social/youtube.svg"
import telegram from "./social/telegram.svg"

import changeNow from "./changeNow.svg"
import { Section, Container, MarginBottom } from "@components/global"

const { Footer } = Layout

export const FooterLayout: React.FunctionComponent = () => (
  <StyledFooter>
    <Row>
      <AdaptiveCol
        lg={{ order: 1, span: 12 }}
        md={{ order: 2, span: 24 }}
        xs={{ order: 2, span: 24 }}
      >
        <Col lg={{ order: 1 }} md={{ order: 2 }} xs={{ order: 1 }}>
          <AdaptiveRow style={{ paddingBottom: "1rem" }}>
            <ChangeNowLogo src={changeNow} alt="Change Now logo" width={120} />
          </AdaptiveRow>
        </Col>
        <Col lg={{ order: 2 }} md={{ order: 3 }} xs={{ order: 2 }}>
          <AdaptiveRow style={{ paddingBottom: "1.5rem" }}>
            <Copyright>© ChangeNOW 2021 ChangeNOW International ltd.</Copyright>
          </AdaptiveRow>
        </Col>
        <Col lg={{ order: 3 }} md={{ order: 1 }} xs={{ order: 3 }}>
          <AdaptiveMediaRow>
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
          </AdaptiveMediaRow>
        </Col>
      </AdaptiveCol>
      <Col
        lg={{ order: 2, span: 12 }}
        md={{ order: 1, span: 24 }}
        xs={{ order: 1, span: 0 }}
      >
        <Row>
          <Col span={8}>
            <SectionName>Learn</SectionName>
            <StyledLink to={"/beginner-level"}>Beginner</StyledLink>
            <StyledLink to={"/intermediate-level"}>Intermediate</StyledLink>
            <StyledLink to={"/advanced-level"}>Advanced</StyledLink>
          </Col>
          <Col span={8}>
            <SectionName>Products</SectionName>
            <StyledHref target="_blank" href={"https://changenow.io/"}>
              ChangeNOW
            </StyledHref>
            <StyledHref target="_blank" href={"https://nowpayments.io/"}>
              NOWPayments
            </StyledHref>
            <StyledHref target="_blank" href={"https://nownodes.io/"}>
              NOWNodes
            </StyledHref>
            <StyledHref target="_blank">B2B Solutions</StyledHref>
            <StyledHrefToken target="_blank">NOW Token</StyledHrefToken>
          </Col>
          <Col span={8}>
            <SectionName>Company</SectionName>
            <StyledHref
              target="_blank"
              href="https://changenow.io/terms-of-use"
            >
              Terms of Use
            </StyledHref>
            <StyledHref
              target="_blank"
              href="https://changenow.io/privacy-policy"
            >
              Privacy Policy
            </StyledHref>
            <StyledHref target="_blank">Corporate responsibility</StyledHref>
            <StyledHref target="_blank">For press</StyledHref>
            <StyledHref target="_blank">Jobs</StyledHref>
          </Col>
        </Row>
      </Col>
    </Row>
  </StyledFooter>
)

const SocialIcon = styled.img`
  margin-right: 25px;
  &:hover {
    fill: #00c26f;
  }
`

const ChangeNowLogo = styled.img`
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-content: center;
  }
`

const Copyright = styled.p`
  font-weight: 300;
  font-size: 14px;
  display: inline-block;
  line-height: 14px;
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    line-height: 27px;
    font-size: 18px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-top: 15px;
    margin-bottom: 5px;
    justify-content: center;
    font-size: 18px;
  }
`

const SectionName = styled.p`
  font-size: 14px;
  letter-spacing: 0.2px;
  color: #ffffff;
  line-height: 2;
  font-weight: lighter;
  opacity: 0.6;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-top: 15px;
    margin-bottom: 5px;
  }
`

const StyledLink = styled(Link)`
  font-size: 18px;
  display: block;
  color: #ffffff;
  line-height: 2;
  font-weight: lighter;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 5px;
  }
`

const StyledHref = styled.a`
  font-size: 18px;
  display: block;
  color: #ffffff;
  line-height: 2;
  font-weight: lighter;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 5px;
  }
`

const StyledHrefToken = styled.a`
  font-size: 18px;
  display: block;
  line-height: 2;
  font-weight: lighter;
  color: ${({ theme }) => theme.color.green.regular};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 5px;
  }
`

const StyledFooter = styled(Footer)`
  background-color: #2b2b36;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 1.3rem;
    flex-flow: row;
  }
  
  width: 100% !important;
  margin: 0 auto;
  padding: 24px 50px;

  @media (min-width: 1024px) {
    max-width: 960px;
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (min-width: 1216px) {
	max-width: 1152px;
	padding: 24px 50px;
  }
  @media (min-width: 1408px) {
    max-width: 1344px;
  }
`

const AdaptiveCol = styled(Col)`
  display: block;
  @media (max-width: ${(props) => props.theme.screen.lg}) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: flex;
    flex-direction: column;
  }
`

const AdaptiveRow = styled(Row)`
  @media (max-width: 990px) {
    justify-content: center;
    text-align: text;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    justify-content: inherit;
  }
`

const AdaptiveMediaRow = styled(AdaptiveRow)`
  @media (max-width: 990px) {
    padding-bottom: 32px;
    padding-top: 57px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    padding-bottom: inherit;
    padding-top: inherit;
  }
`

export default FooterLayout
