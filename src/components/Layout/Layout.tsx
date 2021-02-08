import { Card, Layout } from "antd"
import * as React from "react"
import { Helmet } from "react-helmet"
import styled, { ThemeProvider } from "styled-components"

import { Navbar } from "../Navbar"
import FooterLayout from "./Footer"
import { ReactChild } from "react"
import GlobalStyles from "@styles/GlobalStyles"
import theme from "@styles/theme"

interface Prop {
  children: ReactChild | ReactChild[]
  isHome?: boolean
}
const { Content } = Layout

export const LayoutComponent: React.FunctionComponent<Prop> = ({
  children,
  isHome,
}) => (
  <ThemeProvider theme={theme}>
    <Helmet title="NOWAcademy"></Helmet>
    <Navbar />
    <GlobalStyles />
    {children}
    <FooterLayout />
  </ThemeProvider>
)

const StyledSection = styled.section`
  padding: 3rem 1.5rem;
  background-color: #2b2b36;
  @media (max-width: 768px) {
    padding: 2rem 0.5rem !important;
  }
`

export const StyledContent = styled(Content)`
  width: 100% !important;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
`

export default LayoutComponent
