import { Layout } from "antd"
import styled from "styled-components"

const { Content } = Layout

export const Container = styled(Content)`
  width: 100% !important;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 0 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: ${(props) => props.theme.screen.xs}) {
    max-width: 540px;
  }
  @media (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: 720px;
  }
  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 960px;
  }
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 1152px;
  }
  
  ${(props) =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const StyledTitle = styled.p`
  font-size: 24px;
  line-height: 140%;
  color: #ffffff;
`

export const MarginBottom = styled.div`
  @media (min-width: ${(props) => props.theme.screen.xs}) {
    margin-bottom: 20px;
  }
  @media (min-width: ${(props) => props.theme.screen.sm}) {
    margin-bottom: 30px;
  }
  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 40px;
  }
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    margin-bottom: 60px;
  }
  @media (min-width: ${(props) => props.theme.screen.xlg}) {
    margin-bottom: 60px;
  }
`

export const Section = styled.section`
  overflow: hidden;
  width: 100%;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 32px 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${(props) =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.black.light
        : props.theme.color.primary
    }`};
`

export const SectionWithoutPadding = styled.section`
  overflow: hidden;
  width: 100%;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 32px 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${(props) =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.black.light
        : props.theme.color.primary
    }`};
`

export const Title = styled.h2`
  padding-bottom: 36px;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
`

export const Tag = styled.div`
  padding: 6px 12px;
  background: rgba(97, 97, 116, 0.34);
  border-radius: 4px;
  font-size: 14px;
  line-height: 140%;
  margin: 2px 0px;
  display: inline-block;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background: rgba(150, 255, 210, 0.15);
    color: #00c26f;
  }
`
