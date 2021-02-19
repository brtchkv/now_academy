import { Layout, Drawer, Col, Row, Menu } from "antd"
import * as React from "react"
import { useState } from "react"
import { MenuOutlined, SearchOutlined } from "@ant-design/icons"
import { graphql, useStaticQuery } from "gatsby"
import { MobileMenu } from "./components/MobileMenu"
import { DesktopMenu } from "./components/DesktopMenu"
import styled from "styled-components"
import logo from "./components/academyLogo.svg"
import closeIcon from "./components/closeIcon.svg"
import { Link } from "gatsby"
import changeNow from "./components/changeNow.svg"
import academy from "./components/academyLogo.svg"

import { Section, Container, MarginBottom } from "@components/global"
import { MobileSearch } from "./components/MobileSearch"

const { Header } = Layout

export const Navbar: React.FunctionComponent = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false)
  const [isSearchVisible, setSearchVisible] = useState(false)
  const slugAndTextList = [["glossary", "Glossary"]]
  const showDrawer = () => {
    setDrawerVisible(true)
  }
  const onCloseDrawer = () => {
    setDrawerVisible(false)
  }
  const showSearch = () => {
    setSearchVisible(true)
  }
  const onCloseSearch = () => {
    setSearchVisible(false)

  }

  const stepsAndArticle = [
	  {name: "the-origins-of-crypto", step: 1},
	  {name: "blockchain-101", step: 1},
	  {name: "Bitcoin", step: 1},
	  {name: "the-basics-of-mining", step: 2},
	  {name: "cryptocurrency-consensus-algorithms", step: 2},
	  {name: "Litecoin", step: 2},
	  {name: "decentralization-as-a-concept", step: 3},
	  {name: "smart-contracts-and-dapps", step: 3},
	  {name: "Ethereum", step: 3},
	  {name: "crypto-wallets-and-asset-security", step: 4},
	  {name: "blockchain-scaling", step: 4},
	  {name: "EOS", step: 4},
	  {name: "crypto-economy-and-tokenomics", step: 5},
	  {name: "cryptocurrency-exchanges-and-trading", step: 5},
	  {name: "usdt-and-stablecoins", step: 5},
	  {name: "crypto-legislation & CBDC", step: 6},
	  {name: "blockchain-in-traditional-finance", step: 6},
	  {name: "Ripple", step: 6},
	  {name: "prominent-blockchain-projects-and-platforms-review", step: 7},
	  {name: "privacy-anonymity-and-data-protection", step: 7},
	  {name: "Monero", step: 7},
  ]

  const data = useStaticQuery(graphql`
    query SearchQuery {
      allStrapiArticle {
        nodes {
          id
          title
		  slug
          level {
            name
            slug
          }
        }
      }
      allStrapiTerm {
        nodes {
          id
          name
          term_type {
            name
          }
        }
      }
    }
  `)

  return (
    <StyledNav>
      <Container>
        <Header className="before-navbar" >
          <Col lg={{ span: 24 }} xs={{ span: 0 }} md={{ span: 0 }}>
            <DesktopMenu data={data} steps={stepsAndArticle}/>
          </Col>

          <Col lg={{ span: 0 }} xs={{ span: 24 }} md={{ span: 0 }}>
            <Row justify="center">
              <StyledCol xs={3}>
                <MenuOutlined
                  style={{
                    color: "#fff",
                    fontSize: "25px",
                    alignSelf: "center",
                  }}
                  onClick={showDrawer}
                />
              </StyledCol>
              <StyledCol xs={18}>
                <StyledLink to="/">
                  <img
                    src={logo}
                    alt={"ChangeNow"}
                    style={{ width: "146px" }}
                  />
                </StyledLink>
              </StyledCol>
              <StyledCol xs={3}>
                <StyledDrawer
                  placement="right"
                  drawerStyle={{ backgroundColor: "#2B2B36" }}
                  closable={false}
                  visible={isSearchVisible}
                  width={"100%"}
                  style={{
                    color: "#fff",
                    fontSize: "25px",
                    alignSelf: "center",
                    marginLeft: "auto",
                  }}
                  bodyStyle={{ padding: "20px", paddingTop: "15px" }}
                >
                  <MobileSearch data={data} onClose={onCloseSearch} showInput={showSearch} steps={stepsAndArticle}/>
                </StyledDrawer>
                <StyledSearchOutlined
                  style={{
                    color: "#fff",
                    fontSize: "25px",
                    alignSelf: "center",
                    marginLeft: "auto",
                  }}
                  onClick={showSearch}
                />
              </StyledCol>
            </Row>
          </Col>

          <Col lg={{ span: 0 }} xs={{ span: 0 }} md={{ span: 24 }}>
            <Row justify="center">
              <StyledMainMenu mode="horizontal">
                <StyledMenuItemWithoutBorder
                  style={{ marginLeft: 0, paddingLeft: 0 }}
                >
                  <StyledLogoLink to="/">
                    <img
                      src={academy}
                      alt={"AcademyNow"}
                      style={{ width: "205px" }}
                    />
                  </StyledLogoLink>
                </StyledMenuItemWithoutBorder>

                <StyledLeftBlock>
                  {slugAndTextList.map(([slug, text]) => (
                    <StyledMenuItem
                      key={slug}
                      style={{ float: "right", borderBottom: "none" }}
                    >
                      <StyledLink to={`/${slug}`}>{text}</StyledLink>
                    </StyledMenuItem>
                  ))}

                  <StyledMenuItemWithoutBorder
                    style={{ marginRight: 0, paddingRight: 0 }}
                  >
                    <Link target="_blank" to="https://changenow.io/">
                      <ChangeNowLogo
                        src={changeNow}
                        alt="Change Now logo"
                        width={105}
                      />
                    </Link>
                  </StyledMenuItemWithoutBorder>

                  <StyledCol md={2}>
                    <StyledDrawer
                      placement="right"
                      drawerStyle={{ backgroundColor: "#2B2B36" }}
                      closable={false}
                      visible={isSearchVisible}
                      width={"100%"}
                      style={{
                        color: "#fff",
                        fontSize: "25px",
                        alignSelf: "center",
                        marginLeft: "auto",
                      }}
                      bodyStyle={{ padding: "20px", paddingTop: "15px" }}
                    >
                      <MobileSearch data={data} onClose={onCloseSearch} showInput={showSearch} steps={stepsAndArticle}/>
                    </StyledDrawer>
                    <StyledSearchOutlined
                      style={{
                        color: "#fff",
                        fontSize: "25px",
                        alignSelf: "center",
                        marginLeft: "auto",
                      }}
                      onClick={showSearch}
                    />
                  </StyledCol>
                </StyledLeftBlock>
              </StyledMainMenu>
            </Row>
          </Col>

          <StyledDrawer
            placement="left"
            drawerStyle={{ backgroundColor: "#2B2B36" }}
            closable={true}
            onClose={onCloseDrawer}
            visible={isDrawerVisible}
            width={"100%"}

            bodyStyle={{ padding: "3.2rem" }}
          >
            <MobileMenu />
          </StyledDrawer>
        </Header>
      </Container>
    </StyledNav>
  )
}

const ChangeNowLogo = styled.img`
  margin-top: -4px;
`

const StyledMenuItem = styled(Menu.Item)`
  margin: 0 14px;
  padding: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  & a {
    color: #fff !important;
  }
  &:hover {
    border-bottom: none !important;
  }
`

const StyledLogoLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
`

const StyledMainMenu = styled(Menu)`
  display: flex;
  background: ${({ theme }) => theme.color.blue.dark};
  border: none;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
const StyledLeftBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`

const StyledMenuItemWithoutBorder = styled(Menu.Item)`
  margin: 0 14px;
  border-bottom: 0px !important;
  display: table-cell;
  padding: 0;

  & a {
    color: #fff !important;
  }
  &:hover {
    border-bottom: 0px !important;
  }
`

const StyledNav = styled.div`
  max-width: "100%";
  background-color: "#2B2B36";
  @media (min-width: 1024px) {
    padding: 24px 0;
    max-width: 960px;
    padding-left: 0px;
    padding-right: 0px;
    margin: auto;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
    padding: 24px 50px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
  }
`

const StyledCol = styled(Col)`
  display: flex;
`

const StyledSearchOutlined = styled(SearchOutlined)`
  color: "#fff";
  font-size: "25px";
  align-self: "center";
  margin-left: "auto";
`

const StyledDrawer = styled(Drawer)`
  & .anticon {
    font-size: 30px;
    color: white;
  }
`
const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
`
