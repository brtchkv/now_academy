import { Col, Row, Card } from "antd"
import styled from "styled-components"
import * as React from "react"
import { StyledTitle } from "@components/global"

import beginner from "./static/beginner.svg"
import advanced from "./static/advanced.svg"
import intermediate from "./static/intermediate.svg"
import { Link } from "gatsby"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { useContext } from "react"
import { ThemeContext } from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const ChooseLevel: React.FunctionComponent = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <Row style={{ marginBottom: 10 }}>
      <Slider
        spaceBetween={15}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
            allowTouchMove: false
		  },
		}}
      >
        <SwiperSlide>
          <ColCards md={24} xs={24}>
            <Link to={"/beginner-level"}>
              <LeftCard bordered={false} cover={<CardImg src={beginner} />}>
                <LevelName>Beginner</LevelName>
                <CardDescription>
                  Introduction to crypto: basic concepts, foundational tech,
                  renowned projects, and popular coins.
                </CardDescription>
                <ActionButton>Start learning</ActionButton>
              </LeftCard>
            </Link>
          </ColCards>
        </SwiperSlide>
        <SwiperSlide>
          <ColCards md={24} xs={24}>
              <CenterCard
                bordered={false}
                cover={<CardImg src={intermediate} />}
              >
                <LevelName>Intermediate</LevelName>
                <CardDescription>
                  A closer look at decentralized finance, complex tech used in
                  crypto, digital markets, and trading.
                </CardDescription>
                <ActionButton>Coming Soon</ActionButton>
              </CenterCard>
          </ColCards>
        </SwiperSlide>
        <SwiperSlide>
          <ColCards md={24} xs={24}>
            <RightCard bordered={false} cover={<CardImg src={advanced} />}>
              <LevelName>Advanced</LevelName>
              <CardDescription>
                An in-depth review of processes, phenomena, and events related
                to the crypto industry.
              </CardDescription>
              <ActionButton>Coming Soon</ActionButton>
            </RightCard>
          </ColCards>
        </SwiperSlide>
      </Slider>
    </Row>
  )
}

const ColCards = styled(Col)`
  height: 100%;
`

const LevelName = styled.p`
  font-size: 32px;
  line-height: 26px;
  color: #ffffff;
  font-weight: lighter;
`

const Slider = styled(Swiper)`
  padding-bottom: 2rem;
  max-width: 980px;
  & .swiper-pagination-bullets {
    bottom: -5px;
    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.color.green.regular};
    }
	@media (min-width: ${({ theme }) => theme.screen.sm}) {
    	display: none;
  	}
  }
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
  max-width: 365px;
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
  transition: #fff 0.3s 0.0833333333s;
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

const CardDescription = styled.p`
  line-height: 1.5715;
  font-weight: lighter;
  font-size: 18px;
  min-height: 115px;
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

  transition: ${({ theme }) => theme.color.green.regular} 0.3s 0.0833333333s;
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
    transition: border 0s, width 0.3s, height 0.3s;
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
