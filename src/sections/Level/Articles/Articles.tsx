import styled from "styled-components"
import * as React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Col, Row } from "antd"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import './styles/styles.scss';

export const Articles = ({ articles_list }) => {
  const [scrollPostion, setScrollPostion] = useState(0)
  const articles = [
    { img: "origins.svg", name: "Origins of Crypto" },
    { img: "blockchain.svg", name: "Blockchain" },
    { img: "bitcoin.svg", name: "Bitcoin" },
    { img: "mining.svg", name: "Mining" },
    { img: "consensus.svg", name: "Consensus Algorithms" },
    { img: "litecoin.svg", name: "Litecoin" },
    { img: "decentralisation.svg", name: "Decentralization as a concept" },
    { img: "contracts.svg", name: "Smart Contracts & Dapps" },
    { img: "ethereum.svg", name: "Ethereum" },
    { img: "funds.svg", name: "Crypto Wallets and Funds Safety" },
    { img: "scaling.svg", name: "Scaling in Blockchain" },
    { img: "eos.svg", name: "EOS" },
    { img: "economy.svg", name: "Crypto Economy & Tokenomics" },
    { img: "trading.svg", name: "Crypto Exchanges & Trading" },
    { img: "usdt.svg", name: "USDT Tether" },
    { img: "cbdc.svg", name: "Crypto Legislation & CBDC" },
    { img: "finance.svg", name: "Blockchain in Traditional Finance" },
    { img: "ripple.svg", name: "Ripple" },
    {
      img: "review.svg",
      name: "Prominent Blockchain Projects & Platforms Review",
    },
    { img: "privacy.svg", name: "Privacy, Anonymity, & Data Protection" },
    { img: "monero.svg", name: "Monero" },
  ]

  const themeContext = useContext(ThemeContext);

  function importAll(r) {
    let images = {}
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item)
    })
    return images
  }

  const images = importAll(
    require.context("./static", false, /\.(png|jpe?g|svg)$/)
  )

  useEffect(() => {
    if (window.innerWidth > 1024) {
      document.addEventListener("scroll", listenToScrollEvent)
    }
    return () => {
      document.removeEventListener("scroll", listenToScrollEvent)
    }
  })

  const listenToScrollEvent = () => {
    requestAnimationFrame(() => {
      calculateScrollDistance()
    })
  }

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset
    const winHeight = window.innerHeight
    const docHeight = getDocHeight()

    const totalDocScrollLength = docHeight - winHeight
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100)

    setScrollPostion(scrollPostion)
  }

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
  }

  return (
    <Row>
      <GridFixCol lg={{ span: 23 }} md={{ span: 24 }}>
        <Row gutter={[16, 24]}>
          <Col lg={{ span: 4 }} md={{ span: 4 }} xs={{ span: 0 }}></Col>
          <Col lg={{ span: 6 }} md={{ span: 0 }} xs={{ span: 0 }}>
            <Title>Concept</Title>
          </Col>
          <Col lg={{ span: 6 }} md={{ span: 0 }} xs={{ span: 0 }}>
            <Title>Technology</Title>
          </Col>
          <Col lg={{ span: 6 }} md={{ span: 0 }} xs={{ span: 0 }}>
            <Title>Coin</Title>
          </Col>
        </Row>
        <Row gutter={[16, 24]} justify="start" className={'tableContent'}>
          {articles.map((article, i) => (
            <>
              {i % 3 === 0 && (
                <ColSpanWrapper
                  lg={{ span: 4 }}
                  style={{ alignSelf: "center" }}
                  key={`title__${i}`}
                  md={{ span: 24 }}
                  xs={{ span: 24 }}
                >
                  <Title>Step {i / 3 + 1}</Title>
                </ColSpanWrapper>
              )}
              <CardWrapper key={`article__${i}`}>
                <Col lg={{ span: 24 }} style={{ padding: 0 }} >
                  <CardLink to={"brief-history-of-crypto"}>
                    <AricleImg img={images[article.img]}>
                      <ArticleTitle>{article.name}</ArticleTitle>
                    </AricleImg>
                  </CardLink>
                </Col>
              </CardWrapper>

            </>
          ))}
        </Row>
      </GridFixCol>
      <Col lg={{ span: 1 }} md={{ span: 0 }} xs={{ span: 0 }}>
        <Progress />
        <ProgressLine scroll={scrollPostion + "%"} />
      </Col>
    </Row>
  )
}

const ArticleTitle = styled.div`
  margin: auto;
  font-weight: lighter;
  font-size: 16px;
  text-align: center;
  color: #fff;
`

const CardWrapper = styled.div`
  padding: 12px 8px;
  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    width: 100%;
  }
`

const AricleImg = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 310px;
  height: 182px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.screen.xlg}) {
    width: 265px;
    height: 136px;
  }
  @media (max-width: 1200px) {
    width: 218px;
    height: 139px;
  }
  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    width: 100%;
    height: 57px;
  }
`

const CardLink = styled(Link)`
  transition: ${({ theme }) => theme.color.green.regular} 0.3s 0.0833333333s;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    left: 0;
  }
  &::before {
    border-bottom-width: 1px;
    border-right-width: 1px;
  }
  &::after {
    border-top-width: 1px;
    border-left-width: 1px;
  }
  &:hover {
    color: #fff;
    border: none;
  }
  &:hover::before,
  &:hover::after {
    border-color: ${({ theme }) => theme.color.green.regular};
    transition: border-color 0s, width 0.3s, height 0.3s;
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    transition-delay: 0s, 0s, 0.3s;
  }
  &:hover::after {
    transition-delay: 0s, 0.3s, 0s;
  }
`

const ProgressLine = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.green.regular} ${(props) => props.scroll},
    transparent 0
  );
  width: 3%;
  top: 0px;
  height: 90%;
  z-index: -2;
  position: absolute;
  right: 0;
`

const ColSpanWrapper = styled(Col)`
  align-self: center;
  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    margin-right: "auto";
    width: "100%";
  }
`

const Progress = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.blue.regular} 99%,
    transparent 0
  );
  width: 3%;
  top: 0px;
  height: 90%;
  z-index: -2;
  position: absolute;
  right: 0;
`

const Title = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: lighter;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.green.regular};
  align-self: center;
  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    text-align: left;
  }
`

const GridFixCol = styled(Col)`
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    margin-left: -15px;
  }
  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-left: -21px;
  }
`
