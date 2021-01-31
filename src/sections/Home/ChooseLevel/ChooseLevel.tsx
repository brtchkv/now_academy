import { Col, Row, Card } from "antd"
import styled from "styled-components"
import * as React from "react"
import { StyledTitle } from "@components/global"

import beginner from "./static/beginner.svg"
import advanced from "./static/advanced.svg"
import intermediate from "./static/intermediate.svg"
import { Link } from "gatsby"

export const ChooseLevel: React.FunctionComponent = () => {
  return (
    <>
      <Row style={{ marginBottom: 20 }}>
        <Col md={8} xs={24} style={{ padding: ".5rem" }}>
          <Link to={"/beginner-level"}>
            <LeftCard bordered={false} cover={<CardImg src={beginner} />}>
              <LevelName>Beginner</LevelName>
              <CardDescription>
			  Introduction to crypto: basic concepts, foundational tech, renowned projects, and popular coins.
              </CardDescription>
              <ActionButton>Start learning</ActionButton>
            </LeftCard>
          </Link>
        </Col>
        <Col md={8} xs={24} style={{ padding: ".5rem" }}>
          <Link to={"/intermediate-level"}>
            <CenterCard bordered={false} cover={<CardImg src={intermediate} />}>
              <LevelName>Intermediate</LevelName>
              <CardDescription>
			  A closer look at decentralized finance, complex tech used in crypto, digital markets, and trading.
              </CardDescription>
              <ActionButton>Start learning</ActionButton>
            </CenterCard>
          </Link>
        </Col>
        <Col md={8} xs={24} style={{ padding: ".5rem" }}>
          <RightCard bordered={false} cover={<CardImg src={advanced} />}>
            <LevelName>Advanced</LevelName>
            <CardDescription>
			An in-depth review of processes, phenomena, and events related to the crypto industry.
            </CardDescription>
            <ActionButton>Start learning</ActionButton>
          </RightCard>
        </Col>
      </Row>
    </>
  )
}

const LevelName = styled.p`
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
  font-weight: lighter;
`

const CardImg = styled.img`
  margin: 0;
`

const LevelCard = styled(Card)`
  height: 100%;
  overflow: hidden;
  position: relative;
  border: 0.5px solid #252531;
  background: ${({ theme }) => theme.color.blue.regular};
  color: #fff;
  line-height: 150%;
  border-radius: unset;
  & .ant-card-cover {
    margin: 0;
    & img {
      border-radius: 0px;
    }
  }
  & b {
    font-size: 19px;
    line-height: 150%;
  }
  & .ant-card-head-title {
    height: 250px;
  }
  &:hover {
    background: #616174;
  }
  transition: #fff 0.25s 0.0833333333s;
  position: relative;

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
    border-color: #fff;
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    transition-delay: 0s, 0s, 0.25s;
  }
  &:hover::after {
    transition-delay: 0s, 0.25s, 0s;
  }
`

const CardDescription = styled.p`
  line-height: 1.5715;
  font-weight: lighter;
  font-size: 16px;
  min-height: 126px;
`

const CommingSoon = styled.div`
  line-height: 14px;
  font-size: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: lighter;
  color: #ffffff;
  padding: 14px 22px;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`

const ActionButton = styled.div`
  line-height: 14px;
  font-size: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: lighter;
  color: #ffffff;
  padding: 14px 22px;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #fff;

  transition: ${({ theme }) => theme.color.green.regular} 0.25s 0.0833333333s;
  position: relative;

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
    color: ${({ theme }) => theme.color.green.regular};
    border: none;
    transition: border 0s, width 0.25s, height 0.25s;
  }
  &:hover::before,
  &:hover::after {
    border-color: ${({ theme }) => theme.color.green.regular};
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    transition-delay: 0s, 0s, 0.25s;
  }
  &:hover::after {
    transition-delay: 0s, 0.25s, 0s;
  }
`

const LeftCard = styled(LevelCard)`
  border-radius: 0;
  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`

const CenterCard = styled(LevelCard)`
  border-radius: 0;
  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`

const RightCard = styled(LevelCard)`
  border-radius: 0;
  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`
